(this["webpackJsonpgithub-pages-code-reference"]=this["webpackJsonpgithub-pages-code-reference"]||[]).push([[13],{208:function(s){s.exports=JSON.parse('{"km_rpbt_query_related_posts-59":{"html":"<hr /><section class=\\"parameters\\"><h3>Parameters</h3><dl><dt>$post_id</dt><dd><p class=\\"desc\\"><span class=\\"type\\">(<span class=\\"int\\">int</span>)</span><span class=\\"required\\">(Required)</span><span class=\\"description\\">The post id to get related posts for.</span></p></dd><dt>$taxonomies</dt><dd><p class=\\"desc\\"><span class=\\"type\\">(<span class=\\"array\\">array</span>|<span class=\\"string\\">string</span>)</span><span class=\\"required\\">(Optional)</span><span class=\\"description\\">The taxonomies to use for the related posts query. default \'category\'.</span></p><p class=\\"default\\">Default value: \'category\'</p></dd><dt>$args</dt><dd><p class=\\"desc\\"><span class=\\"type\\">(<span class=\\"string\\">string</span>|<span class=\\"array\\">array</span>)</span><span class=\\"required\\">(Optional)</span><span class=\\"description\\">Query variables to get related posts. <ul class=\\"param-hash\\"><li><b>\'post_types\'</b><br /><i><span class=\'type\'>(string|array)</span></i> Post types to use for related posts query. Array or comma separated list of post type names. Default \'post\'.</li><li><b>\'posts_per_page\'</b><br /><i><span class=\'type\'>(int)</span></i> Number of related posts. Default 5.</li><li><b>\'order\'</b><br /><i><span class=\'type\'>(string)</span></i> Order of related posts. Accepts \'DESC\', \'ASC\' and \'RAND\'. Default \'DESC\'.</li><li><b>\'orderby\'</b><br /><i><span class=\'type\'>(string)</span></i> Order by post date or by date modified. Accepts \'post_date\'and \'post_modified\'. Default \'post_date\'.</li><li><b>\'fields\'</b><br /><i><span class=\'type\'>(string)</span></i> Return full post objects, IDs, post titles or post slugs. Accepts \'all\', \'ids\', \'names\' or \'slugs\'. Default is \'all\'.</li><li><b>\'include_terms\'</b><br /><i><span class=\'type\'>(array|string)</span></i> Terms to use for the related posts query. Array or comma separated list of term ids. Default empty (query by the terms of the current post).</li><li><b>\'include_parents\'</b><br /><i><span class=\'type\'>(boolean)</span></i> Whether to include parent terms in the query for related posts. Default false.</li><li><b>\'include_children\'</b><br /><i><span class=\'type\'>(boolean)</span></i> Whether to include child terms in the query for related posts. Default false.</li><li><b>\'exclude_terms\'</b><br /><i><span class=\'type\'>(array|string)</span></i> Terms to exlude for the related posts query. Array or comma separated list of term ids. Default empty</li><li><b>\'exclude_post\'</b><br /><i><span class=\'type\'>(array|string)</span></i> Exclude posts for the related posts query. Array or comma separated list of post ids. </li><li><b>\'limit_posts\'</b><br /><i><span class=\'type\'>(int)</span></i> Limit the posts to search related posts in. Default -1 (search in all posts).</li><li><b>\'limit_month\'</b><br /><i><span class=\'type\'>(int)</span></i> Limit the posts to the past months to search related posts in.</li><li><b>\'post_thumbnail\'</b><br /><i><span class=\'type\'>(boolean)</span></i> Whether to query for related posts with a featured image only. Default false.</li><li><b>\'public_only\'</b><br /><i><span class=\'type\'>(boolean)</span></i> Whether to exclude private posts in the related posts display, even if the current user has the capability to see those posts. Default false (include private posts)</li><li><b>\'include_self\'</b><br /><i><span class=\'type\'>(string|boolean)</span></i> Whether to include the current post in the related posts results. The included post is ordered at the top. Use \'regular_order\' to include the current post ordered by terms in common. Default false (exclude current post).</li><li><b>\'meta_key\'</b><br /><i><span class=\'type\'>(string)</span></i> Meta key.</li><li><b>\'meta_value\'</b><br /><i><span class=\'type\'>(string)</span></i> Meta value.</li><li><b>\'meta_compare\'</b><br /><i><span class=\'type\'>(string)</span></i> MySQL operator used for comparing the $meta_value. Accepts \'=\', \'!=\', \'&gt;\', \'&gt;=\', \'&lt;\', \'&lt;=\', \'LIKE\', \'NOT LIKE\', \'IN\', \'NOT IN\', \'BETWEEN\', \'NOT BETWEEN\', \'REGEXP\', \'NOT REGEXP\', \'RLIKE\', \'EXISTS\' or \'NOT EXISTS\'. Default is \'IN\' when <code>$meta_value</code> is an array, \'=\' otherwise.</li><li><b>\'meta_type\'</b><br /><i><span class=\'type\'>(string)</span></i> MySQL data type that the meta_value column will be CAST to for comparisons. Accepts \'NUMERIC\', \'BINARY\', \'CHAR\', \'DATE\', \'DATETIME\', \'DECIMAL\', \'SIGNED\', \'TIME\', or \'UNSIGNED\'. Default is \'CHAR\'.</li></li></ul></span></p><p class=\\"default\\">Default value: \'\'</p></dd></dl></section><hr /><section class=\\"return\\"><h3>Return</h3><p><span class=\'return-type\'>(array)</span> Array with post objects. Empty array if no related posts found.</p></section>","methods":[],"related":{"uses":[{"source":"includes/taxonomy.php","url":"/functions/km_rpbt_get_taxonomies","text":"km_rpbt_get_taxonomies()"},{"source":"includes/settings.php","url":"/functions/km_rpbt_sanitize_args","text":"km_rpbt_sanitize_args()"},{"source":"includes/taxonomy.php","url":"/functions/km_rpbt_get_terms","text":"km_rpbt_get_terms()"},{"source":"includes/query.php","url":"/hooks/related_posts_by_taxonomy_pre_related_posts","text":"related_posts_by_taxonomy_pre_related_posts"},{"source":"includes/query.php","url":"/hooks/related_posts_by_taxonomy_posts_meta_query","text":"related_posts_by_taxonomy_posts_meta_query"},{"source":"includes/query.php","url":"/hooks/related_posts_by_taxonomy_posts_fields","text":"related_posts_by_taxonomy_posts_fields"},{"source":"includes/query.php","url":"/hooks/related_posts_by_taxonomy_posts_join","text":"related_posts_by_taxonomy_posts_join"},{"source":"includes/query.php","url":"/hooks/related_posts_by_taxonomy_posts_where","text":"related_posts_by_taxonomy_posts_where"},{"source":"includes/query.php","url":"/hooks/related_posts_by_taxonomy_posts_groupby","text":"related_posts_by_taxonomy_posts_groupby"},{"source":"includes/query.php","url":"/hooks/related_posts_by_taxonomy_posts_orderby","text":"related_posts_by_taxonomy_posts_orderby"},{"source":"includes/query.php","url":"/hooks/related_posts_by_taxonomy_posts_limits","text":"related_posts_by_taxonomy_posts_limits"},{"source":"includes/query.php","url":"/hooks/related_posts_by_taxonomy_posts_clauses","text":"related_posts_by_taxonomy_posts_clauses"},{"source":"includes/query.php","url":"/hooks/related_posts_by_taxonomy","text":"related_posts_by_taxonomy"},{"source":"includes/functions.php","url":"/functions/km_rpbt_nested_array_sort","text":"km_rpbt_nested_array_sort()"}],"used_by":[{"source":"includes/functions.php","url":"/functions/km_rpbt_get_related_posts","text":"km_rpbt_get_related_posts()"},{"source":"includes/class-cache.php","url":"/classes/related_posts_by_taxonomy_cache/set_cache","text":"Related_Posts_By_Taxonomy_Cache::set_cache()"},{"source":"includes/back-compat/deprecated.php","url":"/functions/km_rpbt_related_posts_by_taxonomy","text":"km_rpbt_related_posts_by_taxonomy()"}]},"changelog":[{"description":"Introduced.","version":"2.5.0"}],"signature":"km_rpbt_query_related_posts( <span class=\\"arg-type\\">int</span>&nbsp;<span class=\\"arg-name\\">$post_id</span>,  <span class=\\"arg-type\\">array|string</span>&nbsp;<span class=\\"arg-name\\">$taxonomies</span>&nbsp;=&nbsp;<span class=\\"arg-default\\">\'category\'</span>,  <span class=\\"arg-type\\">string|array</span>&nbsp;<span class=\\"arg-name\\">$args</span>&nbsp;=&nbsp;<span class=\\"arg-default\\">\'\'</span>&nbsp;)","notice":""},"km_rpbt_related_posts_by_taxonomy_cmp-432":{"html":"<hr /><section class=\\"parameters\\"><h3>Parameters</h3><dl><dt>$item1</dt><dd><p class=\\"desc\\"><span class=\\"type\\">(<span class=\\"array\\">array</span>)</span><span class=\\"required\\">(Required)</span><span class=\\"description\\">Item 1.</span></p></dd><dt>$item2</dt><dd><p class=\\"desc\\"><span class=\\"type\\">(<span class=\\"array\\">array</span>)</span><span class=\\"required\\">(Required)</span><span class=\\"description\\">Item 2.</span></p></dd></dl></section><hr /><section class=\\"return\\"><h3>Return</h3><p><span class=\'return-type\'>(int)</span> </p></section>","methods":[],"related":{"uses":[],"used_by":[]},"changelog":[{"description":"Introduced.","version":"0.1"}],"signature":"km_rpbt_related_posts_by_taxonomy_cmp( <span class=\\"arg-type\\">array</span>&nbsp;<span class=\\"arg-name\\">$item1</span>,  <span class=\\"arg-type\\">array</span>&nbsp;<span class=\\"arg-name\\">$item2</span>&nbsp;)","notice":""},"related_posts_by_taxonomy-420":{"html":"<hr /><section class=\\"parameters\\"><h3>Parameters</h3><dl><dt>$results</dt><dd><p class=\\"desc\\"><span class=\\"type\\">(<span class=\\"array\\">array</span>)</span><span class=\\"description\\">Related posts. Array with Post objects or post IDs or post titles or post slugs.</span></p></dd><dt>$post_id</dt><dd><p class=\\"desc\\"><span class=\\"type\\">(<span class=\\"int\\">int</span>)</span><span class=\\"description\\">Post id used to get the related posts.</span></p></dd><dt>$taxonomies</dt><dd><p class=\\"desc\\"><span class=\\"type\\">(<span class=\\"array\\">array</span>)</span><span class=\\"description\\">Taxonomies used to get the related posts.</span></p></dd><dt>$args</dt><dd><p class=\\"desc\\"><span class=\\"type\\">(<span class=\\"array\\">array</span>)</span><span class=\\"description\\">Arguments used to query the related posts.</span></p></dd></dl></section>","methods":[],"related":{"uses":[],"used_by":[{"source":"includes/query.php","url":"/functions/km_rpbt_query_related_posts","text":"km_rpbt_query_related_posts()"},{"source":"includes/class-cache.php","url":"/classes/related_posts_by_taxonomy_cache/get_cache","text":"Related_Posts_By_Taxonomy_Cache::get_cache()"}]},"changelog":[{"description":"Introduced.","version":"0.1"}],"signature":"<span class=\\"hook-func\\">apply_filters</span>( \'related_posts_by_taxonomy\',  <nobr><span class=\\"arg-type\\">array</span> <span class=\\"arg-name\\">$results</span></nobr>,  <nobr><span class=\\"arg-type\\">int</span> <span class=\\"arg-name\\">$post_id</span></nobr>,  <nobr><span class=\\"arg-type\\">array</span> <span class=\\"arg-name\\">$taxonomies</span></nobr>,  <nobr><span class=\\"arg-type\\">array</span> <span class=\\"arg-name\\">$args</span></nobr> )","notice":""},"related_posts_by_taxonomy_posts_clauses-336":{"html":"<hr /><section class=\\"description\\"><h2>Description</h2><p>Covers the WHERE, GROUP BY, JOIN, ORDER BY, fields (SELECT), and LIMITS clauses.</p></section><hr /><section class=\\"parameters\\"><h3>Parameters</h3><dl><dt>$pieces</dt><dd><p class=\\"desc\\"><span class=\\"type\\">(<span class=\\"array\\">array</span>)</span><span class=\\"description\\">The list of clauses for the related posts query.</span></p></dd><dt>$post_id</dt><dd><p class=\\"desc\\"><span class=\\"type\\">(<span class=\\"int\\">int</span>)</span><span class=\\"description\\">Post ID.</span></p></dd><dt>$taxonomies</dt><dd><p class=\\"desc\\"><span class=\\"type\\">(<span class=\\"array\\">array</span>)</span><span class=\\"description\\">Array of Taxonomy names.</span></p></dd><dt>$args</dt><dd><p class=\\"desc\\"><span class=\\"type\\">(<span class=\\"array\\">array</span>)</span><span class=\\"description\\">Related posts query arguments.</span></p></dd></dl></section>","methods":[],"related":{"uses":[],"used_by":[{"source":"includes/query.php","url":"/functions/km_rpbt_query_related_posts","text":"km_rpbt_query_related_posts()"}]},"changelog":[{"description":"Introduced.","version":"0.3.1"}],"signature":"<span class=\\"hook-func\\">apply_filters_ref_array</span>( \'related_posts_by_taxonomy_posts_clauses\',  <nobr><span class=\\"arg-type\\">array</span> <span class=\\"arg-name\\">$pieces</span></nobr>,  <nobr><span class=\\"arg-type\\">int</span> <span class=\\"arg-name\\">$post_id</span></nobr>,  <nobr><span class=\\"arg-type\\">array</span> <span class=\\"arg-name\\">$taxonomies</span></nobr>,  <nobr><span class=\\"arg-type\\">array</span> <span class=\\"arg-name\\">$args</span></nobr> )","notice":""},"related_posts_by_taxonomy_posts_fields-254":{"html":"<hr /><section class=\\"parameters\\"><h3>Parameters</h3><dl><dt>$select_sql</dt><dd><p class=\\"desc\\"><span class=\\"type\\">(<span class=\\"string\\">string</span>)</span><span class=\\"description\\">The SELECT clause of the related posts query.</span></p></dd><dt>$post_id</dt><dd><p class=\\"desc\\"><span class=\\"type\\">(<span class=\\"int\\">int</span>)</span><span class=\\"description\\">Post ID.</span></p></dd><dt>$taxonomies</dt><dd><p class=\\"desc\\"><span class=\\"type\\">(<span class=\\"array\\">array</span>)</span><span class=\\"description\\">Array of Taxonomy names.</span></p></dd><dt>$args</dt><dd><p class=\\"desc\\"><span class=\\"type\\">(<span class=\\"array\\">array</span>)</span><span class=\\"description\\">Related posts query arguments.</span></p></dd></dl></section>","methods":[],"related":{"uses":[],"used_by":[{"source":"includes/query.php","url":"/functions/km_rpbt_query_related_posts","text":"km_rpbt_query_related_posts()"}]},"changelog":[{"description":"Introduced.","version":"0.3.1"}],"signature":"<span class=\\"hook-func\\">apply_filters_ref_array</span>( \'related_posts_by_taxonomy_posts_fields\',  <nobr><span class=\\"arg-type\\">string</span> <span class=\\"arg-name\\">$select_sql</span></nobr>,  <nobr><span class=\\"arg-type\\">int</span> <span class=\\"arg-name\\">$post_id</span></nobr>,  <nobr><span class=\\"arg-type\\">array</span> <span class=\\"arg-name\\">$taxonomies</span></nobr>,  <nobr><span class=\\"arg-type\\">array</span> <span class=\\"arg-name\\">$args</span></nobr> )","notice":""},"related_posts_by_taxonomy_posts_groupby-295":{"html":"<hr /><section class=\\"parameters\\"><h3>Parameters</h3><dl><dt>$groupby</dt><dd><p class=\\"desc\\"><span class=\\"type\\">(<span class=\\"string\\">string</span>)</span><span class=\\"description\\">The GROUP BY clause of the related posts query.</span></p></dd><dt>$post_id</dt><dd><p class=\\"desc\\"><span class=\\"type\\">(<span class=\\"int\\">int</span>)</span><span class=\\"description\\">Post ID.</span></p></dd><dt>$taxonomies</dt><dd><p class=\\"desc\\"><span class=\\"type\\">(<span class=\\"array\\">array</span>)</span><span class=\\"description\\">Array of Taxonomy names.</span></p></dd><dt>$args</dt><dd><p class=\\"desc\\"><span class=\\"type\\">(<span class=\\"array\\">array</span>)</span><span class=\\"description\\">Related posts query arguments.</span></p></dd></dl></section>","methods":[],"related":{"uses":[],"used_by":[{"source":"includes/query.php","url":"/functions/km_rpbt_query_related_posts","text":"km_rpbt_query_related_posts()"}]},"changelog":[{"description":"Introduced.","version":"0.3.1"}],"signature":"<span class=\\"hook-func\\">apply_filters_ref_array</span>( \'related_posts_by_taxonomy_posts_groupby\',  <nobr><span class=\\"arg-type\\">string</span> <span class=\\"arg-name\\">$groupby</span></nobr>,  <nobr><span class=\\"arg-type\\">int</span> <span class=\\"arg-name\\">$post_id</span></nobr>,  <nobr><span class=\\"arg-type\\">array</span> <span class=\\"arg-name\\">$taxonomies</span></nobr>,  <nobr><span class=\\"arg-type\\">array</span> <span class=\\"arg-name\\">$args</span></nobr> )","notice":""},"related_posts_by_taxonomy_posts_join-269":{"html":"<hr /><section class=\\"parameters\\"><h3>Parameters</h3><dl><dt>$join_sql</dt><dd><p class=\\"desc\\"><span class=\\"type\\">(<span class=\\"string\\">string</span>)</span><span class=\\"description\\">The JOIN clause of the related posts query.</span></p></dd><dt>$post_id</dt><dd><p class=\\"desc\\"><span class=\\"type\\">(<span class=\\"int\\">int</span>)</span><span class=\\"description\\">Post ID.</span></p></dd><dt>$taxonomies</dt><dd><p class=\\"desc\\"><span class=\\"type\\">(<span class=\\"array\\">array</span>)</span><span class=\\"description\\">Array of Taxonomy names.</span></p></dd><dt>$args</dt><dd><p class=\\"desc\\"><span class=\\"type\\">(<span class=\\"array\\">array</span>)</span><span class=\\"description\\">Related posts query arguments.</span></p></dd></dl></section>","methods":[],"related":{"uses":[],"used_by":[{"source":"includes/query.php","url":"/functions/km_rpbt_query_related_posts","text":"km_rpbt_query_related_posts()"}]},"changelog":[{"description":"Introduced.","version":"0.3.1"}],"signature":"<span class=\\"hook-func\\">apply_filters_ref_array</span>( \'related_posts_by_taxonomy_posts_join\',  <nobr><span class=\\"arg-type\\">string</span> <span class=\\"arg-name\\">$join_sql</span></nobr>,  <nobr><span class=\\"arg-type\\">int</span> <span class=\\"arg-name\\">$post_id</span></nobr>,  <nobr><span class=\\"arg-type\\">array</span> <span class=\\"arg-name\\">$taxonomies</span></nobr>,  <nobr><span class=\\"arg-type\\">array</span> <span class=\\"arg-name\\">$args</span></nobr> )","notice":""},"related_posts_by_taxonomy_posts_limits-321":{"html":"<hr /><section class=\\"parameters\\"><h3>Parameters</h3><dl><dt>$limits</dt><dd><p class=\\"desc\\"><span class=\\"type\\">(<span class=\\"string\\">string</span>)</span><span class=\\"description\\">The LIMIT clause of the related posts query.</span></p></dd><dt>$post_id</dt><dd><p class=\\"desc\\"><span class=\\"type\\">(<span class=\\"int\\">int</span>)</span><span class=\\"description\\">Post ID.</span></p></dd><dt>$taxonomies</dt><dd><p class=\\"desc\\"><span class=\\"type\\">(<span class=\\"array\\">array</span>)</span><span class=\\"description\\">Array of Taxonomy names.</span></p></dd><dt>$args</dt><dd><p class=\\"desc\\"><span class=\\"type\\">(<span class=\\"array\\">array</span>)</span><span class=\\"description\\">Related posts query arguments.</span></p></dd></dl></section>","methods":[],"related":{"uses":[],"used_by":[{"source":"includes/query.php","url":"/functions/km_rpbt_query_related_posts","text":"km_rpbt_query_related_posts()"}]},"changelog":[{"description":"Introduced.","version":"0.3.1"}],"signature":"<span class=\\"hook-func\\">apply_filters_ref_array</span>( \'related_posts_by_taxonomy_posts_limits\',  <nobr><span class=\\"arg-type\\">string</span> <span class=\\"arg-name\\">$limits</span></nobr>,  <nobr><span class=\\"arg-type\\">int</span> <span class=\\"arg-name\\">$post_id</span></nobr>,  <nobr><span class=\\"arg-type\\">array</span> <span class=\\"arg-name\\">$taxonomies</span></nobr>,  <nobr><span class=\\"arg-type\\">array</span> <span class=\\"arg-name\\">$args</span></nobr> )","notice":""},"related_posts_by_taxonomy_posts_meta_query-228":{"html":"<hr /><section class=\\"description\\"><h2>Description</h2><p>The default relation of the meta query is &#8216;AND&#8217;.</p></section><hr /><section class=\\"parameters\\"><h3>Parameters</h3><dl><dt>$meta_query</dt><dd><p class=\\"desc\\"><span class=\\"type\\">(<span class=\\"array\\">array</span>)</span><span class=\\"description\\">Meta query. Array of meta query arguments.</span></p></dd><dt>$post_id</dt><dd><p class=\\"desc\\"><span class=\\"type\\">(<span class=\\"int\\">int</span>)</span><span class=\\"description\\">Post ID.</span></p></dd><dt>$taxonomies</dt><dd><p class=\\"desc\\"><span class=\\"type\\">(<span class=\\"array\\">array</span>)</span><span class=\\"description\\">Array of Taxonomy names.</span></p></dd><dt>$args</dt><dd><p class=\\"desc\\"><span class=\\"type\\">(<span class=\\"array\\">array</span>)</span><span class=\\"description\\">Related posts query arguments.</span></p></dd></dl></section>","methods":[],"related":{"uses":[],"used_by":[{"source":"includes/query.php","url":"/functions/km_rpbt_query_related_posts","text":"km_rpbt_query_related_posts()"}]},"changelog":[{"description":"Introduced.","version":"2.6.0"}],"signature":"<span class=\\"hook-func\\">apply_filters</span>( \'related_posts_by_taxonomy_posts_meta_query\',  <nobr><span class=\\"arg-type\\">array</span> <span class=\\"arg-name\\">$meta_query</span></nobr>,  <nobr><span class=\\"arg-type\\">int</span> <span class=\\"arg-name\\">$post_id</span></nobr>,  <nobr><span class=\\"arg-type\\">array</span> <span class=\\"arg-name\\">$taxonomies</span></nobr>,  <nobr><span class=\\"arg-type\\">array</span> <span class=\\"arg-name\\">$args</span></nobr> )","notice":""},"related_posts_by_taxonomy_posts_orderby-309":{"html":"<hr /><section class=\\"parameters\\"><h3>Parameters</h3><dl><dt>$orderby</dt><dd><p class=\\"desc\\"><span class=\\"type\\">(<span class=\\"string\\">string</span>)</span><span class=\\"description\\">The ORDER BY clause of the related posts query.</span></p></dd><dt>$post_id</dt><dd><p class=\\"desc\\"><span class=\\"type\\">(<span class=\\"int\\">int</span>)</span><span class=\\"description\\">Post ID.</span></p></dd><dt>$taxonomies</dt><dd><p class=\\"desc\\"><span class=\\"type\\">(<span class=\\"array\\">array</span>)</span><span class=\\"description\\">Array of Taxonomy names.</span></p></dd><dt>$args</dt><dd><p class=\\"desc\\"><span class=\\"type\\">(<span class=\\"array\\">array</span>)</span><span class=\\"description\\">Related posts query arguments.</span></p></dd></dl></section>","methods":[],"related":{"uses":[],"used_by":[{"source":"includes/query.php","url":"/functions/km_rpbt_query_related_posts","text":"km_rpbt_query_related_posts()"}]},"changelog":[{"description":"Introduced.","version":"0.3.1"}],"signature":"<span class=\\"hook-func\\">apply_filters_ref_array</span>( \'related_posts_by_taxonomy_posts_orderby\',  <nobr><span class=\\"arg-type\\">string</span> <span class=\\"arg-name\\">$orderby</span></nobr>,  <nobr><span class=\\"arg-type\\">int</span> <span class=\\"arg-name\\">$post_id</span></nobr>,  <nobr><span class=\\"arg-type\\">array</span> <span class=\\"arg-name\\">$taxonomies</span></nobr>,  <nobr><span class=\\"arg-type\\">array</span> <span class=\\"arg-name\\">$args</span></nobr> )","notice":""},"related_posts_by_taxonomy_posts_where-283":{"html":"<hr /><section class=\\"parameters\\"><h3>Parameters</h3><dl><dt>$where</dt><dd><p class=\\"desc\\"><span class=\\"type\\">(<span class=\\"string\\">string</span>)</span><span class=\\"description\\">The WHERE clause of the related posts query.</span></p></dd><dt>$post_id</dt><dd><p class=\\"desc\\"><span class=\\"type\\">(<span class=\\"int\\">int</span>)</span><span class=\\"description\\">Post ID.</span></p></dd><dt>$taxonomies</dt><dd><p class=\\"desc\\"><span class=\\"type\\">(<span class=\\"array\\">array</span>)</span><span class=\\"description\\">Array of Taxonomy names.</span></p></dd><dt>$args</dt><dd><p class=\\"desc\\"><span class=\\"type\\">(<span class=\\"array\\">array</span>)</span><span class=\\"description\\">Related posts query arguments.</span></p></dd></dl></section>","methods":[],"related":{"uses":[],"used_by":[{"source":"includes/query.php","url":"/functions/km_rpbt_query_related_posts","text":"km_rpbt_query_related_posts()"}]},"changelog":[{"description":"Introduced.","version":"0.3.1"}],"signature":"<span class=\\"hook-func\\">apply_filters_ref_array</span>( \'related_posts_by_taxonomy_posts_where\',  <nobr><span class=\\"arg-type\\">string</span> <span class=\\"arg-name\\">$where</span></nobr>,  <nobr><span class=\\"arg-type\\">int</span> <span class=\\"arg-name\\">$post_id</span></nobr>,  <nobr><span class=\\"arg-type\\">array</span> <span class=\\"arg-name\\">$taxonomies</span></nobr>,  <nobr><span class=\\"arg-type\\">array</span> <span class=\\"arg-name\\">$args</span></nobr> )","notice":""},"related_posts_by_taxonomy_pre_related_posts-90":{"html":"<hr /><section class=\\"parameters\\"><h3>Parameters</h3><dl><dt>$related_posts</dt><dd><p class=\\"desc\\"><span class=\\"type\\">(<span class=\\"null\\">null</span>|<span class=\\"array\\">array</span>)</span><span class=\\"description\\">Array or null. Prevent the query for related posts by returning an array (with post objects or ids). Default null (do the query for related posts).</span></p></dd><dt>$args</dt><dd><p class=\\"desc\\"><span class=\\"type\\">(<span class=\\"array\\">array</span>)</span><span class=\\"description\\">Array with query arguments.</span></p></dd></dl></section>","methods":[],"related":{"uses":[],"used_by":[{"source":"includes/query.php","url":"/functions/km_rpbt_query_related_posts","text":"km_rpbt_query_related_posts()"},{"source":"includes/class-cache.php","url":"/classes/related_posts_by_taxonomy_cache/get_cache","text":"Related_Posts_By_Taxonomy_Cache::get_cache()"}]},"changelog":[{"description":"Introduced.","version":"2.5.0"}],"signature":"<span class=\\"hook-func\\">apply_filters</span>( \'related_posts_by_taxonomy_pre_related_posts\',  <nobr><span class=\\"arg-type\\">null|array</span> <span class=\\"arg-name\\">$related_posts</span></nobr>,  <nobr><span class=\\"arg-type\\">array</span> <span class=\\"arg-name\\">$args</span></nobr> )","notice":""}}')}}]);
//# sourceMappingURL=13.47829ab9.chunk.js.map