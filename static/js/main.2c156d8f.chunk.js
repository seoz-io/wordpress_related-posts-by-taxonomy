(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e){e.exports={homepage:"https://keesiemeijer.github.io/related-posts-by-taxonomy",app_basename:"related-posts-by-taxonomy",app_description:"Plugin Code Reference",app_url:"https://wordpress.org/plugins/related-posts-by-taxonomy",app_docs_url:"",repo_url:"https://github.com/keesiemeijer/related-posts-by-taxonomy",repo_release_url:"https://github.com/keesiemeijer/related-posts-by-taxonomy/tree/2.5.1",repo_gh_pages:"https://github.com/keesiemeijer/related-posts-by-taxonomy.git",parsed_name:"Related Posts by Taxonomy",parsed_version:"v2.5.1",parsed_type:"plugin"}},20:function(e){e.exports=["functions","hooks","classes","methods"]},26:function(e,t,n){e.exports=n(56)},3:function(e){e.exports={page_title:"Search The Code Reference!",home_desc:"Want to know what's going on inside this %1$s.","home_desc-2":"Search the Code Reference for more information about functions, classes, methods, and hooks.",home:"Home",functions:"Functions",function:"Function",classes:"Classes",class:"Class",hooks:"Hooks",hook:"Hook",methods:"Methods",method:"Method",functions_search:"Search functions",classes_search:"Search classes",hooks_search:"Search hooks",methods_search:"Search methods",source:"Source",source_file:"Source: %1$s",view_source:"View source",view_source_file:"View source file",submit:"Search",repo:"GitHub Repository",docs:"Documentation",related:"Related",used_by:"Used By",uses:"Uses",changelog:"Changelog",version:"Version",version_label:"Version: %1$s",description:"Description",code_base:"code base",loading:"Loading",retry:"Retry",timeout:"Taking a long time...",error:"Error!",namespace:"Namespace: %1$s",filter_by_version:"Since version:",filter_by_type:"Type:",none:"none",modified:"modified",introduced:"introduced",deprecated:"deprecated",deprecated_in:"deprecated in version: %1$s",undocumented:"undocumented",undocumented_version:"undocumented version",found:"%1$d %2$s found",filter_version_found:"%1$d %2$s found with version %3$s",filter_type_found:"%1$d %2$s %3$s found",filter_all_found:"%1$d %2$s %3$s found with version %4$s",not_found:"No %1$s found",filter_version_not_found:"No %1$s found with version %2$s",filter_type_not_found:"No %1$s %2$s found",filter_all_not_found:"No %1$s %2$s found with version %3$s"}},47:function(e,t,n){var a={"./classes.json":[57,1],"./functions.json":[58,2],"./hooks.json":[59,3],"./methods.json":[60,4],"./version.json":[61,5]};function s(e){var t=a[e];return t?n.e(t[1]).then(function(){var e=t[0];return n.t(e,3)}):Promise.resolve().then(function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t})}s.keys=function(){return Object.keys(a)},s.id=47,e.exports=s},51:function(e,t,n){var a={"./includes-back-compat-deprecated.json":[62,7],"./includes-class-cache.json":[63,8],"./includes-class-debug.json":[64,9],"./includes-class-defaults.json":[65,10],"./includes-class-plugin.json":[66,11],"./includes-class-rest-api.json":[67,12],"./includes-class-widget.json":[68,13],"./includes-functions.json":[69,14],"./includes-gallery.json":[70,15],"./includes-query.json":[71,16],"./includes-settings.json":[72,17],"./includes-shortcode.json":[73,18],"./includes-template-loader.json":[74,19],"./includes-template-tags.json":[75,20],"./related-posts-by-taxonomy.json":[76,21]};function s(e){var t=a[e];return t?n.e(t[1]).then(function(){var e=t[0];return n.t(e,3)}):Promise.resolve().then(function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t})}s.keys=function(){return Object.keys(a)},s.id=51,e.exports=s},52:function(e,t,n){},54:function(e,t,n){},56:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),r=n(23),o=n.n(r),i=n(80),l=n(81),c=n(49),u=n(79),p=n(2),h=n(19),m=n(48),d=n(77),f=n(7),g=n(8),v=n(10),y=n(9),E=n(11),b=n(13),j=n(82),_=n(24),O=n.n(_),T=function(e,t){return RegExp(k(t.trim()),"i").test(e)},k=function(e){return e.replace(/[-\\^$*+?.()|[\]{}]/g,"\\$&")},w=function(e,t){return e=e.title,t=t.title,e.length!==t.length?e.length-t.length:e<t?-1:1},S=function(e){function t(e){var n;return Object(f.a)(this,t),(n=Object(v.a)(this,Object(y.a)(t).call(this,e))).onChange=function(e,t){var a=t.newValue;n.setState({value:a})},n.onSuggestionsFetchRequested=function(e){var t=e.value;n.loadSuggestions(t)},n.onSuggestionsClearRequested=function(){n.setState({suggestions:[]})},n.handleSubmit=n.handleSubmit.bind(Object(b.a)(Object(b.a)(n))),n.state={value:"",suggestions:[],isLoading:!1},n.lastRequestId=null,n}return Object(E.a)(t,e),Object(g.a)(t,[{key:"handleSubmit",value:function(e){var t=this;e.preventDefault();var n=this.props.home+"/"+this.props.postType,a=this.props.postTypeData[this.props.postType],s=Object(p.findIndex)(a.content,function(e){return e.title===t.state.value});n=-1!==s?n+"/"+a.content[s].slug:n+"/"+this.state.value,this.props.history.push(n)}},{key:"loadSuggestions",value:function(e){var t=this.props.postType;this.setState({isLoading:!0}),this.props.fetchData(t),Object(p.isEmpty)(this.props.postTypeData[t])||this.setState({isLoading:!1,suggestions:this.getSuggestions(e,this.props.postTypeData[t])})}},{key:"getSuggestions",value:function(e,t){var n=e.trim().toLowerCase();return 0===n.length?[]:t.content.filter(function(e){return function(e,t){if(T(e,t))return!0;var n=k(e.trim().toLowerCase().replace(/[_\-\s]+/g," ")),a=k(t.trim().toLowerCase().replace(/[_\-\s]+/g," "));if(T(n,a))return!0;var s=(a=a.split(" ")).length;if(1>=s)return!1;for(var r=0,o=0;o<s;o++)-1!==n.indexOf(a[o].trim())&&r++;return r===s}(e.title.toLowerCase(),n)}).sort(w)}},{key:"renderSuggestion",value:function(e){return s.a.createElement("div",null,e.title)}},{key:"render",value:function(){var e=this.state,t=e.value,n=e.suggestions,a=this.props.postType,r={placeholder:this.props.strings[a+"_search"],value:t,onChange:this.onChange};return s.a.createElement("form",{onSubmit:this.handleSubmit},s.a.createElement(O.a,{suggestions:n,onSuggestionsFetchRequested:this.onSuggestionsFetchRequested,onSuggestionsClearRequested:this.onSuggestionsClearRequested,getSuggestionValue:function(e){return e.title},renderSuggestion:this.renderSuggestion,inputProps:r}),s.a.createElement("input",{type:"submit",value:this.props.strings.submit,id:"submit"}))}}]),t}(a.Component),C=Object(j.a)(S),D=n(20),$=n(21),x=s.a.createContext(),N=function(e){function t(e){var a;return Object(f.a)(this,t),(a=Object(v.a)(this,Object(y.a)(t).call(this,e))).fetchData=function(e){if(a.setState({status:"searching",postType:e}),Object(p.isEmpty)(a.state[e]))try{n(47)("./"+e+".json").then(function(t){var n;a.setState((n={},Object($.a)(n,e,t),Object($.a)(n,"status","done"),n))})}catch(t){a.setState({status:"error"})}else a.setState({status:"done"})},a.state={functions:{},classes:{},hooks:{},methods:{}},a}return Object(E.a)(t,e),Object(g.a)(t,[{key:"render",value:function(){return s.a.createElement(x.Provider,{value:{postType:this.state.postType,postTypeData:this.state,fetchData:this.fetchData}},this.props.children)}}]),t}(s.a.Component),q=function(e){var t=e.postType;t="methods"===t?"classes":t;var n=e.packageData,a=n.parsed_name,r=n.parsed_version,o=n.app_description,i=e.page,l=e.strings.page_title;a.length&&(l=a,l+=r.length?" "+r:"","home"!==i&&(l=s.a.createElement(m.a,{to:e.home},l)));var c="";o.length&&(c=s.a.createElement("p",{className:"site-description"},o));var u="/"===e.home?"":e.home;return s.a.createElement("header",{className:"site-header"},s.a.createElement("h1",{className:"site-title"},l),c,-1!==D.indexOf(t)&&s.a.createElement(x.Consumer,null,function(n){n.postType;var a=n.postTypeData,r=n.fetchData;return s.a.createElement(C,Object.assign({},e,{postType:t,postTypeData:a,fetchData:r,strings:e.strings,home:u}))}),s.a.createElement("nav",null,s.a.createElement(d.a,{to:e.home,exact:!0,activeClassName:"active"},e.strings.home),D.map(function(t,n){return"methods"!==t&&s.a.createElement(d.a,{to:u+"/"+t,key:n,activeClassName:"active"},e.strings[t])})))},R=n(3),L=function(e){var t=e.page,n=e.children,a="hfeed site devhub-wrap",r=t?a+" "+t:a;return s.a.createElement("div",{id:"page",className:r},s.a.createElement(q,Object.assign({},e,{strings:R})),s.a.createElement("div",{id:"content",className:"site-content"},s.a.createElement("div",{id:"content-area",className:"code-reference"},s.a.createElement("main",{id:"main",className:"site-main",role:"main"},n))))},P=function(e){var t=e.packageData,n=t.parsed_name,a=t.repo_url,r=t.app_url,o=t.parsed_type,i="";n.length&&(i=R.page_title);var l=R.repo?R.repo:"GitHub",c=o.length?o:R.code_base,u="";c.length&&(u=R.home_desc.replace("%1$s",c));var p="";r&&n&&(p=s.a.createElement("li",null,s.a.createElement("a",{href:r},n)));var h="";return a&&l.length&&(h=s.a.createElement("li",null,s.a.createElement("a",{href:a},l))),s.a.createElement("div",null,i&&s.a.createElement("h2",null,i),s.a.createElement("p",null,u," ",R["home_desc-2"]),(p||h)&&s.a.createElement("ul",null,p,h))},U=function(e){return s.a.createElement(P,e)},I=function(e){return s.a.createElement(L,Object.assign({},e,{postType:"functions",page:"home"}),s.a.createElement(U,e))},M=n(50);function F(e){return Object(p.trim)(e,"/").split("/").filter(function(e){return""!==e})}function H(e,t){var n=function(e){return e?(/^[?#]/.test(e)?e.slice(1):e).split("&").reduce(function(e,t){var n=t.split("="),a=Object(M.a)(n,2),s=a[0],r=a[1];return e[s]=r?decodeURIComponent(r.replace(/\+/g," ")):"",e},{}):{}}(e);return n.hasOwnProperty(t)&&n[t].length?n[t]:""}function V(e,t){var n="",a=F(e);return t+1<=a.length&&(n=Q(e,t).toLowerCase()),n&&W(n)?("classes"===n&&t+3===a.length&&(n="methods"),n):""}function W(e){return 1===["functions","hooks","classes","methods"].filter(function(t){return e===t}).length}function B(e){return 1===["introduced","modified","deprecated"].filter(function(t){return e===t}).length}function Q(e,t){var n="",a=F(e);return t<=a.length&&(n=a[t]),n}var G=function(e){function t(e){var n;return Object(f.a)(this,t),(n=Object(v.a)(this,Object(y.a)(t).call(this,e))).state={timePassed:!1},n}return Object(E.a)(t,e),Object(g.a)(t,[{key:"componentWillUnmount",value:function(){clearTimeout(this.timer)}},{key:"componentDidMount",value:function(){var e=this;this.timer=setTimeout(function(){e.setState({timePassed:!0})},500)}},{key:"render",value:function(){return this.state.timePassed?s.a.createElement("div",{className:"loader"},"Loading..."):null}}]),t}(s.a.Component),J=function(e){function t(e){var n;return Object(f.a)(this,t),(n=Object(v.a)(this,Object(y.a)(t).call(this,e))).state={type:"",version:"",terms:{},failedRequest:!1},n.handleChangeType=n.handleChangeType.bind(Object(b.a)(Object(b.a)(n))),n.handleChangeVersion=n.handleChangeVersion.bind(Object(b.a)(Object(b.a)(n))),n}return Object(E.a)(t,e),Object(g.a)(t,[{key:"setStateFromQuery",value:function(){var e=this.props.location.search,t=H(e,"type");this.setState({type:B(t)?t:"none",version:H(e,"since")})}},{key:"get_versions",value:function(){var e=this;if(Object(p.isEmpty)(this.state.terms))try{n.e(6).then(n.t.bind(null,78,3)).then(function(t){e.setState({terms:t})})}catch(t){this.setState({failedRequest:!0})}}},{key:"remove_query_vars",value:function(){var e=this.props.home+"/"+this.props.postType;this.props.history.replace(e)}},{key:"componentDidUpdate",value:function(e,t){e.postType!==this.props.postType&&this.setState({type:"none",version:""}),"undocumented"===this.state.version&&"none"!==this.state.type&&this.setState({type:"none"}),this.props.location.search.length&&this.remove_query_vars()}},{key:"componentDidMount",value:function(){this.setStateFromQuery(),this.get_versions(),this.remove_query_vars()}},{key:"handleChangeType",value:function(e){var t=B(e.target.value)?e.target.value:"none";this.setState({type:t})}},{key:"handleChangeVersion",value:function(e){this.setState({version:e.target.value})}},{key:"handleSubmit",value:function(e){e.preventDefault()}},{key:"filterByVersion",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"none",a=!t.length,s=!(n.length&&"none"===n);return a&&!s?e:e=e.filter(function(e){var s=-1!==e.terms.indexOf(t),r=-1!==e.terms.indexOf(e.introduced),o=-1!==e.terms.indexOf(e.deprecated),i=-1!==e.terms.indexOf("undocumented");switch(n){case"deprecated":return a?e.deprecated:e.deprecated===t;case"introduced":return a?e.introduced:e.introduced===t;case"modified":if(a){var l=e.terms.length;return!(!l||i)&&(l=r?--l:l,0<(l=o?--l:l))}var c=r&&e.introduced===t,u=o&&e.deprecated===t;return s&&!(c||u)}return!!a||s})}},{key:"render",value:function(){var e=this,t="/"===this.props.home?"":this.props.home,n="",a=Object(p.get)(this.state.terms,this.props.postType,{});if(Object(p.isEmpty)(this.state.terms))return s.a.createElement(G,null);this.state.failedRequest||Object(p.isEmpty)(a)||(n=this.state.terms[this.props.postType].map(function(e,t){return s.a.createElement("option",{key:t,value:e},"undocumented"===e?R.undocumented_version:e)}));var r=!Object(p.isEmpty)(this.state.type)&&"none"!==this.state.type,o="undocumented"===this.state.version,i="";Object(p.isEmpty)(a)||Object(p.isEmpty)(this.state.version)||(i=-1===a.indexOf(this.state.version)?"":this.state.version);var l=R[this.props.postType],c=this.filterByVersion(this.props.content,i,this.state.type),u=this.props.postType.substring(0,this.props.postType.length-1);u="classe"===u?"class":u;var h=!c.length||1<c.length?this.props.postType:u;h=R[h].toLowerCase();var d=c.length?"%2$s":"%1$s",f=c.length?"%3$s":"%2$s",g=c.length?"%2$s":"%1$s",v=c.length?"":"not_",y=i.length?"filter_version_".concat(v,"found"):"".concat(v,"found"),E=R[y];if(r||o){var b=o?R.undocumented:this.state.type;y="filter_type_".concat(v,"found"),i.length&&!o&&(y="filter_all_".concat(v,"found"),f=c.length?"%4$s":"%3$s"),d=c.length?"%3$s":"%2$s",E=R[y].replace(g,b)}return c.length&&(E=E.replace("%1$d",c.length)),E=E.replace(d,h).replace(f,i),s.a.createElement("div",null,s.a.createElement("h2",null,l),s.a.createElement("form",{onSubmit:this.handleSubmit},!Object(p.isEmpty)(a)&&n.length&&s.a.createElement("label",null,R.filter_by_version,s.a.createElement("select",{value:this.state.version,onChange:this.handleChangeVersion},s.a.createElement("option",{key:"none",value:""},R.none),n)),!Object(p.isEmpty)(a)&&!o&&s.a.createElement("label",null,R.filter_by_type,s.a.createElement("select",{value:this.state.type,onChange:this.handleChangeType},s.a.createElement("option",{value:"none"},R.none),s.a.createElement("option",{value:"introduced"},R.introduced),s.a.createElement("option",{value:"modified"},R.modified),s.a.createElement("option",{value:"deprecated"},R.deprecated)))),c.length?"":s.a.createElement("hr",null),s.a.createElement("p",null,E),c.length?s.a.createElement("hr",null):"",c.map(function(n,a){var r="";if(n.deprecated){var o=R.deprecated_in.replace("%1$s",n.deprecated);r=s.a.createElement("span",null," \u2014 ",s.a.createElement("span",{className:"deprecated-item"},o))}return s.a.createElement("article",{key:a,className:e.props.postClass},s.a.createElement("h1",null,s.a.createElement(m.a,{to:t+"/"+e.props.postType+"/"+n.slug},n.title),r),s.a.createElement("div",{className:"description",dangerouslySetInnerHTML:{__html:n.summary}}),s.a.createElement("div",{className:"sourcefile"},s.a.createElement("p",null,R.source_file.replace("%1$s",n.source_file))))}))}}]),t}(s.a.Component),A=Object(j.a)(J),z=function(e){return e.data.hasOwnProperty("signature")&&e.data.signature.length?s.a.createElement("h1",{dangerouslySetInnerHTML:{__html:e.data.signature}}):null},K=function(e){return e.element.hasOwnProperty("summary")&&e.element.summary.length?s.a.createElement("section",{className:"summary",dangerouslySetInnerHTML:{__html:e.element.summary}}):null},X=function(e){return e.data.hasOwnProperty("html")&&e.data.html.length?s.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.data.html}}):null},Y=function(e){var t=e.element,n=t.line_num,a=t.source_file,r=t.parent,o=t.namespace,i=e.packageData.repo_release_url,l="/"===e.home?"":e.home;if(!a.length)return null;var c=R.source_file.replace("%1$s",a),u="",h="",d=!1,f="",g="",v="";if(i.length&&(h=R.view_source_file,u=Object(p.trim)(i,"/")+"/"+a,n.length&&(h=R.view_source,u+="#L"+n)),r&&"methods"===e.postType){g=r;var y=e.slug.split("::");2===y.length&&(g=s.a.createElement(m.a,{to:l+"/classes/"+y[0]},r)),f=s.a.createElement("li",null,R.class,": ",g)}return o.length&&"global"!==o.toLowerCase()&&(v=s.a.createElement("li",null,R.namespace.replace("%1$s",o))),u.length&&h?(d=s.a.createElement("a",{href:u,target:"_blank",rel:"noopener noreferrer"},h),s.a.createElement("ul",{className:"source-info"},f,v,s.a.createElement("li",null,c," \u2014 ",d))):s.a.createElement("ul",{className:"source-info"},f,v,s.a.createElement("li",null,c))},Z=function(e){var t=Object(p.get)(e,"data.related.uses",{}),n=Object(p.get)(e,"data.related.used_by",{});if(Object(p.isEmpty)(t)&&Object(p.isEmpty)(n))return null;var a="";Object(p.isEmpty)(t)||(a=s.a.createElement("article",{className:"uses"},s.a.createElement("h3",null,R.uses),s.a.createElement("ul",null,t.map(function(t,n){return s.a.createElement("li",{key:n},s.a.createElement("span",null,t.source)," ",s.a.createElement(m.a,{to:e.home+t.url},t.text))}))));var r="";return Object(p.isEmpty)(n)||(r=s.a.createElement("div",null,s.a.createElement("hr",null),s.a.createElement("article",{className:"used-by"},s.a.createElement("h3",null,R.used_by),s.a.createElement("ul",null,n.map(function(t,n){return s.a.createElement("li",{key:n},s.a.createElement("span",null,t.source)," ",s.a.createElement(m.a,{to:e.home+t.url},t.text))}))))),s.a.createElement("div",null,s.a.createElement("hr",null),s.a.createElement("section",{className:"related"},s.a.createElement("h2",null,R.related),a,r))},ee=function(e){var t=e.data.changelog,n=e.archiveUrl;return Object(p.isEmpty)(e.data.changelog)?null:s.a.createElement("div",null,s.a.createElement("hr",null),s.a.createElement("section",{className:"changelog"},s.a.createElement("h3",null,R.changelog),s.a.createElement("table",null,s.a.createElement("caption",{className:"screen-reader-text"},R.changelog),s.a.createElement("thead",null,s.a.createElement("tr",null,s.a.createElement("th",{className:"changelog-version"},R.version),s.a.createElement("th",{className:"changelog-desc"},R.description))),s.a.createElement("tbody",null,t.map(function(e,t){var a=e.version;return Object(p.isEmpty)(n)||(a=s.a.createElement(m.a,{to:n+"?since="+a},a)),s.a.createElement("tr",{key:t},s.a.createElement("td",null,a),s.a.createElement("td",{dangerouslySetInnerHTML:{__html:e.description}}))})))))},te=function(e){var t="/"===e.home?"":e.home;if(!e.data.hasOwnProperty("methods"))return null;var n=e.data.methods;return s.a.createElement("div",null,s.a.createElement("hr",null),s.a.createElement("section",{className:"class-methods"},s.a.createElement("h2",null,R.methods),s.a.createElement("ul",null,n.map(function(e,n){return s.a.createElement("li",{key:n},s.a.createElement(m.a,{to:t+e.url},e.title)," \u2014 ",s.a.createElement("div",{className:"class-methods-excerpt",dangerouslySetInnerHTML:{__html:e.excerpt}}))}))))},ne=function(e){return e.data.hasOwnProperty("notice")&&e.data.notice.length?s.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.data.notice}}):null},ae=function(e){function t(e){var n;return Object(f.a)(this,t),(n=Object(v.a)(this,Object(y.a)(t).call(this,e))).state={file:{},failedRequest:!1},n.element={},n}return Object(E.a)(t,e),Object(g.a)(t,[{key:"failedRequest",value:function(){this.setState({failedRequest:!0})}},{key:"getPostData",value:function(){var e=this,t=Object(p.findIndex)(this.props.content,function(t){return t.slug===e.props.slug});-1===t?this.failedRequest():this.element=this.props.content[t]}},{key:"getFileData",value:function(e){var t=this;try{n(51)("./"+e+".json").then(function(e){t.setState({file:e})})}catch(a){this.failedRequest()}}},{key:"componentDidUpdate",value:function(e,t){e.slug!==this.props.slug&&(this.getPostData(),this.getFileData(this.element.json_file))}},{key:"componentDidMount",value:function(){this.getPostData(),this.getFileData(this.element.json_file)}},{key:"render",value:function(){if(Object(p.isEmpty)(this.state.file)||Object(p.isEmpty)(this.element))return this.state.failedRequest?s.a.createElement(u.a,{to:this.props.home}):s.a.createElement(G,null);var e=Object(p.get)(this.element,"slug",""),t=Object(p.get)(this.element,"line_num","");if(!e.length||!t.length)return null;var n=Object(p.get)(this.state.file,e+"-"+t,{});if(Object(p.isEmpty)(n))return null;var a="";"classes"===this.props.postType&&(a=s.a.createElement(te,{element:this.element,data:n,home:this.props.home}));var r="/"===this.props.home?"":this.props.home,o=r+"/"+this.props.postType;return"methods"===this.props.postType&&(o=""),s.a.createElement("article",{className:this.props.postClass},s.a.createElement(ne,{element:this.element,data:n}),s.a.createElement(z,{element:this.element,data:n}),s.a.createElement(K,{element:this.element,data:n}),s.a.createElement(Y,Object.assign({element:this.element},this.props)),s.a.createElement(X,{element:this.element,data:n}),s.a.createElement(ee,{element:this.element,data:n,archiveUrl:o}),a,s.a.createElement(Z,{element:this.element,data:n,home:r}))}}]),t}(s.a.Component),se=function(e){function t(){return Object(f.a)(this,t),Object(v.a)(this,Object(y.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(g.a)(t,[{key:"componentDidUpdate",value:function(e,t){e.postType!==this.props.postType&&Object(p.isEmpty)(this.props.postTypeData[this.props.postType])&&this.props.fetchData(this.props.postType)}},{key:"componentDidMount",value:function(){Object(p.isEmpty)(this.props.postTypeData[this.props.postType])&&this.props.fetchData(this.props.postType)}},{key:"render",value:function(){if(window.scrollTo(0,0),Object(p.isEmpty)(this.props.postTypeData[this.props.postType]))return s.a.createElement(G,null);var e=this.props.postTypeData[this.props.postType].content;if(!e.length||!this.props.request.length)return s.a.createElement(u.a,{to:this.props.home});if(e=e.sort(function(e,t){var n=e.title.toUpperCase(),a=t.title.toUpperCase();return n<a?-1:n>a?1:0}),"home"===this.props.request)return s.a.createElement(U,Object.assign({},this.props,{content:e}));var t=function(e){if(!W(e))return"";var t=e.substring(0,e.length-1);return"wp-parser-"+(t="classe"===t?"class":t)}(this.props.postType);return"archive"===this.props.request?s.a.createElement(A,Object.assign({},this.props,{content:e,postClass:t})):"single"===this.props.request?s.a.createElement(ae,Object.assign({},this.props,{content:e,postClass:t})):s.a.createElement(u.a,{to:this.props.home})}}]),t}(a.Component),re=function(e){var t=e.location.pathname,n=e.routeIndex,a=V(t,n);if(!function(e,t){var n=F(e),a=V(e,t);if(!a.length)return!1;if("methods"===a){if(t+3===n.length)return!0}else if(t+2===n.length)return!0;return!1}(t,n))return s.a.createElement(u.a,{to:e.home});var r=Q(t,n+1);return"methods"===a&&(r+="::"+Q(t,n+2)),s.a.createElement(L,Object.assign({},e,{postType:a,page:"single"}),s.a.createElement(x.Consumer,null,function(t){t.postType;var n=t.postTypeData,o=t.fetchData;return s.a.createElement(se,Object.assign({},e,{postType:a,postTypeData:n,fetchData:o,request:"single",slug:r}))}))},oe=function(e){var t=V(e.location.pathname,e.routeIndex);return s.a.createElement(L,Object.assign({},e,{postType:t,page:"archive"}),s.a.createElement(x.Consumer,null,function(n){n.postType;var a=n.postTypeData,r=n.fetchData;return s.a.createElement(se,Object.assign({},e,{postType:t,postTypeData:a,fetchData:r,request:"archive"}))}))},ie=function(e){return s.a.createElement(l.a,null,s.a.createElement(c.a,{path:e.match.path,exact:!0,render:function(t){return s.a.createElement(oe,e)}}),s.a.createElement(c.a,{path:"".concat(e.match.path,"/:slug"),render:function(t){return s.a.createElement(re,e)}}))},le=(n(52),n(54),function(e){var t=h.app_basename,n=Object(p.trim)("/"+t),a={appName:t,packageData:h,home:n,routeIndex:"/"===n?0:1};return n="/"===n?"":n,s.a.createElement(i.a,null,s.a.createElement(l.a,null,s.a.createElement(c.a,{path:a.home,exact:!0,render:function(e){return s.a.createElement(I,Object.assign({},e,a))}}),s.a.createElement(c.a,{path:n+"/functions",render:function(e){return s.a.createElement(ie,Object.assign({},e,a))}}),s.a.createElement(c.a,{path:n+"/classes",render:function(e){return s.a.createElement(ie,Object.assign({},e,a))}}),s.a.createElement(c.a,{path:n+"/hooks",render:function(e){return s.a.createElement(ie,Object.assign({},e,a))}}),s.a.createElement(u.a,{to:a.home})))}),ce=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function ue(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}o.a.render(s.a.createElement(N,null,s.a.createElement(x.Consumer,null,function(e){var t=e.fetchData;return s.a.createElement(le,{fetchData:t})})),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/related-posts-by-taxonomy",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("/related-posts-by-taxonomy","/service-worker.js");ce?(function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):ue(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):ue(e)})}}()}},[[26,23,22]]]);
//# sourceMappingURL=main.2c156d8f.chunk.js.map