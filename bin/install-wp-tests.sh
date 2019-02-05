#!/usr/bin/env bash

ARGUMENT_COUNT=0

# Set arguments and flags.
for arg in "$@"
do
	if ! [[ "$arg" =~ ^- ]]; then
		ARGUMENT_COUNT=$((ARGUMENT_COUNT + 1))
		case "$ARGUMENT_COUNT" in
			4) DB_HOST=$4 ;;
			5) WP_VERSION=$5 ;;
			6) SKIP_DB_CREATE=$6 ;;
		esac
	else
		case "$arg" in
			--wp-version=*) WP_VERSION=${arg#"--wp-version="};;
			--wp-ts-version=*) WP_TS_VERSION=${arg#"--wp-ts-version="};;
			--skip-database-creation) SKIP_DB_CREATE=true ;;
			*)
			printf "Unknown option: %s.\n" "$arg"
			exit 1
			;;
		esac
	fi
done

if [ "$ARGUMENT_COUNT" -lt 3 ]; then
	echo "usage: $0 <db-name> <db-user> <db-pass> [db-host] [--wp-version] [--wp-ts-version] [--skip-database-creation]"
	exit 1
fi

DB_NAME=$1
DB_USER=$2
DB_PASS=$3

# Set optional arguments if not set
[[ -z "$DB_HOST" ]] && DB_HOST='localhost'
[[ -z "$SKIP_DB_CREATE" ]] && SKIP_DB_CREATE='false'
[[ -z "$WP_VERSION" ]] && WP_VERSION='latest' 
[[ -z "$WP_TS_VERSION" ]] && WP_TS_VERSION="trunk"

INSTALLED_VERSION=''
if [[ -f "$WP_CORE_DIR/wp-includes/version.php" ]]; then
	if grep -q "wp_version = " "$WP_CORE_DIR/wp-includes/version.php"; then
		INSTALLED_VERSION=$(grep "wp_version = " "$WP_CORE_DIR/wp-includes/version.php"|awk -F\' '{print $2}')
	fi
fi

WP_LATEST=''
if [[ 'latest' = "$WP_VERSION" || 'latest' = "$WP_TS_VERSION" ]]; then
	api_url="http://api.wordpress.org/core/version-check/1.5/"

	if [ `which curl` ]; then
		WP_LATEST=$(curl -s "$api_url" | head -n 4 | tail -n 1)
	elif [ `which wget` ]; then
		WP_LATEST=$(wget -S -q -O - "$api_url" | head -n 4 | tail -n 1);
	fi

	if [[ -z "$WP_LATEST" ]]; then
		echo "Error: WordPress version not found. Switching to trunk"
		WP_LATEST="trunk"
	fi
fi

printf "DB_NAME=%s\n" "$DB_NAME"
printf "DB_USER=%s\n" "$DB_USER"
printf "DB_PASS=%s\n" "$DB_PASS"
printf "DB_HOST=%s\n" "$DB_HOST"
printf "WP_VERSION=%s\n" "$WP_VERSION"
printf "WP_LATEST=%s\n" "$WP_LATEST"
printf "INSTALLED_VERSION=%s\n" "$INSTALLED_VERSION"
printf "WP_TS_VERSION=%s\n" "$WP_TS_VERSION"
printf "SKIP_DB_CREATE=%s\n" "$SKIP_DB_CREATE"

# To test release candidates use
# bash bin/install-wp-tests.sh wordpress_test root '' --wp-version=4.5-RC1 --wp-ts-version=trunk

TMPDIR=${TMPDIR-/tmp}
WP_TESTS_DIR=${WP_TESTS_DIR-$TMPDIR/wordpress-tests-lib}
WP_CORE_DIR=${WP_CORE_DIR-$TMPDIR/wordpress/}

#remove trailing slash
WP_CORE_DIR=${WP_CORE_DIR%/}

set -x

download() {
	if [ `which curl` ]; then
		curl -s "$1" > "$2";
	elif [ `which wget` ]; then
		wget -nv -O "$2" "$1"
	fi
}
 
wp_download_exists(){
	if [ `which curl` ]; then
		curl --output /dev/null --silent --head --fail "$1";
	elif [ `which wget` ]; then
		wget --spider "$1" >/dev/null 2>&1;
	fi
}

install_wp() {
	mkdir -p "$WP_CORE_DIR"

	[[ 'latest' = "$WP_VERSION" ]] && WP_VERSION="$WP_LATEST"

	if [[ -n "$INSTALLED_VERSION" && "$INSTALLED_VERSION" == "$WP_VERSION" ]]; then
		# No need to re-install WordPress
		return
	fi

	if [[ 'trunk' = "$WP_VERSION" ]]; then
		printf "Installing WordPress trunk... \n"
		svn export --quiet --force "https://develop.svn.wordpress.org/trunk/src/" "$WP_CORE_DIR"
	else
		if wp_download_exists "https://wordpress.org/wordpress-$WP_VERSION.tar.gz"; then
			download "https://wordpress.org/wordpress-$WP_VERSION.tar.gz" "$TMPDIR/wordpress.tar.gz"
			tar --strip-components=1 -zxmf "$TMPDIR/wordpress.tar.gz" -C "$WP_CORE_DIR"
		else
			echo "Error: WordPress not downloaded."
			exit
		fi 
	fi

	if [[ -d "$WP_CORE_DIR/wp-content/" ]]; then
		if wp_download_exists "https://raw.github.com/markoheijnen/wp-mysqli/master/db.php"; then
			download "https://raw.github.com/markoheijnen/wp-mysqli/master/db.php" "$WP_CORE_DIR/wp-content/db.php"
		fi
	fi
}

install_test_suite() {
	mkdir -p "$WP_TESTS_DIR"

	# portable in-place argument for both GNU sed and Mac OSX sed
	if [[ $(uname -s) == 'Darwin' ]]; then
		local ioption='-i .bak'
	else
		local ioption='-i'
	fi

	[[ 'latest' = "$WP_TS_VERSION" ]] && WP_TS_VERSION="$WP_LATEST"
	
	archive='trunk'
	if [[ 'trunk' != "$WP_TS_VERSION" ]]; then
		archive="tags/$WP_TS_VERSION"
	fi

	# Set up the testing suite from the core version

	if ! wp_download_exists "https://develop.svn.wordpress.org/$archive/wp-tests-config-sample.php"; then
		echo "Error: wp-tests-config-sample.php not found."
		return
	fi

	svn export --quiet --force "https://develop.svn.wordpress.org/$archive/tests/phpunit/includes/" "$WP_TESTS_DIR/includes"
	svn export --quiet --force "https://develop.svn.wordpress.org/$archive/tests/phpunit/data/" "$WP_TESTS_DIR/data"

	cd "$WP_TESTS_DIR" || exit

	download "https://develop.svn.wordpress.org/$archive/wp-tests-config-sample.php" "$WP_TESTS_DIR/wp-tests-config.php"

	if [[ -f "$WP_TESTS_DIR/wp-tests-config.php" ]]; then
		sed $ioption "s:dirname( __FILE__ ) . '/src/':'$WP_CORE_DIR/':" "$WP_TESTS_DIR/wp-tests-config.php"
		sed $ioption "s/youremptytestdbnamehere/$DB_NAME/" "$WP_TESTS_DIR/wp-tests-config.php"
		sed $ioption "s/yourusernamehere/$DB_USER/" "$WP_TESTS_DIR/wp-tests-config.php"
		sed $ioption "s/yourpasswordhere/$DB_PASS/" "$WP_TESTS_DIR/wp-tests-config.php"
		sed $ioption "s|localhost|${DB_HOST}|" "$WP_TESTS_DIR/wp-tests-config.php"
	fi
}

install_db() {
	# parse DB_HOST for port or socket references
	local PARTS=("${DB_HOST//\:/ }")
	local DB_HOSTNAME="${PARTS[0]}";
	local DB_SOCK_OR_PORT="${PARTS[1]}";
	local EXTRA=""

	if [ -n "$DB_HOSTNAME" ] ; then
		if [ "$(echo "$DB_SOCK_OR_PORT" | grep -e '^[0-9]\{1,\}$')" ]; then
			EXTRA="--host=$DB_HOSTNAME --port=$DB_SOCK_OR_PORT --protocol=tcp"
		elif [ -n "$DB_SOCK_OR_PORT" ] ; then
			EXTRA="--socket=$DB_SOCK_OR_PORT"
		elif [ -n "$DB_HOSTNAME" ] ; then
			EXTRA="--host=$DB_HOSTNAME"
		fi
	fi

	if [[ -f "$TMPDIR/my.cnf" ]]; then
		rm "$TMPDIR/my.cnf" || exit
	fi

	# Suppress password warnings. It silly, I know :-)
	printf "[client]\npassword=%s\nuser=%s" "$DB_PASS" "$DB_USER" > "$TMPDIR/my.cnf"

	database=$(mysqlshow --defaults-file="$TMPDIR/my.cnf" "$DB_NAME" | grep -v Wildcard | grep -ow "$DB_NAME")
	if [[ "$DB_NAME" = "$database" ]]; then
		printf "Database wordpress_test already exists\n"
	else
		printf "Creating database wordpress_test\n"
		mysqladmin --defaults-file="$TMPDIR/my.cnf" create "$DB_NAME" "$EXTRA"
	fi
}

install_wp
install_test_suite
install_db
