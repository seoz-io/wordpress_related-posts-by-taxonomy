(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{19:function(e){e.exports=["functions","hooks","classes","methods"]},21:function(e){e.exports={homepage:"https://keesiemeijer.github.io/related-posts-by-taxonomy",app_basename:"related-posts-by-taxonomy",app_description:"Code Reference",app_url:"https://wordpress.org/plugins/related-posts-by-taxonomy",app_docs_url:"",repo_url:"https://github.com/keesiemeijer/related-posts-by-taxonomy",repo_release_url:"https://github.com/keesiemeijer/related-posts-by-taxonomy/tree/2.5.1",repo_gh_pages:"https://github.com/keesiemeijer/related-posts-by-taxonomy.git",parsed_name:"Related Posts by Taxonomy",parsed_version:"v2.5.1",parsed_type:"plugin",docs_url:""}},23:function(e,t,n){var a={"./classes.json":[71,16],"./files/includes-back-compat-deprecated.json":[27,0],"./files/includes-class-cache.json":[28,1],"./files/includes-class-debug.json":[29,2],"./files/includes-class-defaults.json":[30,3],"./files/includes-class-plugin.json":[31,4],"./files/includes-class-rest-api.json":[32,5],"./files/includes-class-widget.json":[33,6],"./files/includes-functions.json":[34,7],"./files/includes-gallery.json":[35,8],"./files/includes-query.json":[36,9],"./files/includes-settings.json":[37,10],"./files/includes-shortcode.json":[38,11],"./files/includes-template-loader.json":[39,12],"./files/includes-template-tags.json":[40,13],"./files/related-posts-by-taxonomy.json":[41,14],"./functions.json":[72,17],"./hooks.json":[73,18],"./methods.json":[74,19],"./version.json":[75,20],"./with-data.json":[19],"./wp-parser-json-strings.json":[3]};function s(e){var t=a[e];return t?Promise.all(t.slice(1).map(n.e)).then(function(){var e=t[0];return n.t(e,3)}):Promise.resolve().then(function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t})}s.keys=function(){return Object.keys(a)},s.id=23,e.exports=s},3:function(e){e.exports={page_title:"Search The Code Reference!",home_desc:"Want to know what's going on inside this %1$s.","home_desc-2":"Search the Code Reference for more information about functions, classes, methods, and hooks.",home:"Home",functions:"Functions",classes:"Classes",class:"Class",hooks:"Hooks",methods:"Methods",functions_search:"Search functions",classes_search:"Search classes",hooks_search:"Search hooks",methods_search:"Search methods",source:"Source",source_file:"Source: %1$s",view_source:"View source",view_source_file:"View source file",submit:"Search",repo:"GitHub Repository",docs:"Documentation",related:"Related",used_by:"Used By",uses:"Uses",changelog:"Changelog",version:"Version",description:"Description",code_base:"code base",loading:"Loading",retry:"Retry",timeout:"Taking a long time...",error:"Error!",namespace:"Namespace: %1$s"}},42:function(e,t,n){e.exports=n(70)},49:function(e,t,n){var a={"./includes-back-compat-deprecated.json":[27,0],"./includes-class-cache.json":[28,1],"./includes-class-debug.json":[29,2],"./includes-class-defaults.json":[30,3],"./includes-class-plugin.json":[31,4],"./includes-class-rest-api.json":[32,5],"./includes-class-widget.json":[33,6],"./includes-functions.json":[34,7],"./includes-gallery.json":[35,8],"./includes-query.json":[36,9],"./includes-settings.json":[37,10],"./includes-shortcode.json":[38,11],"./includes-template-loader.json":[39,12],"./includes-template-tags.json":[40,13],"./related-posts-by-taxonomy.json":[41,14]};function s(e){var t=a[e];return t?n.e(t[1]).then(function(){var e=t[0];return n.t(e,3)}):Promise.resolve().then(function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t})}s.keys=function(){return Object.keys(a)},s.id=49,e.exports=s},66:function(e,t,n){},68:function(e,t,n){},70:function(e,t,n){"use strict";n.r(t);var a=n(0),s=n.n(a),r=n(24),o=n.n(r),l=n(77),i=n(79),c=n(65),u=n(78),p=n(2),m=n(21),h=n(14),d=n(8),f=n(9),g=n(11),E=n(10),y=n(12),v=s.a.createContext(),b=function(e){function t(e){var a;return Object(d.a)(this,t),(a=Object(g.a)(this,Object(E.a)(t).call(this,e))).getFileData=function(e){try{n(49)("./"+e+".json").then(function(e){a.setState({file:e,status:"done"})})}catch(t){a.setState({status:"error",file:{}})}},a.fetchData=function(e,t){if(a.setState({status:"searching",postType:e,file:{}}),Object(p.isEmpty)(t))if(Object(p.isEmpty)(a.state[e]))try{n(23)("./"+e+".json").then(function(t){var n;a.setState((n={},Object(h.a)(n,e,t),Object(h.a)(n,"status","done"),n))})}catch(s){a.setState({status:"error"})}else a.setState({status:"done"});else a.getFileData(t)},a.state={functions:{},classes:{},hooks:{},methods:{},file:{}},a}return Object(y.a)(t,e),Object(f.a)(t,[{key:"render",value:function(){return s.a.createElement(v.Provider,{value:{postType:this.state.postType,postTypeData:this.state,fetchData:this.fetchData}},this.props.children)}}]),t}(s.a.Component),j=n(64),O=n(76),_=n(15),T=n(80),k=n(25),w=n.n(k),D=function(e,t){return RegExp(S(t.trim()),"i").test(e)},S=function(e){return e.replace(/[-\\^$*+?.()|[\]{}]/g,"\\$&")},C=function(e,t){return e=e.title,t=t.title,e.length!==t.length?e.length-t.length:e<t?-1:1},x=function(e){function t(e){var n;return Object(d.a)(this,t),(n=Object(g.a)(this,Object(E.a)(t).call(this,e))).onChange=function(e,t){var a=t.newValue;n.setState({value:a})},n.onSuggestionsFetchRequested=function(e){var t=e.value;n.loadSuggestions(t)},n.onSuggestionsClearRequested=function(){n.setState({suggestions:[]})},n.handleSubmit=n.handleSubmit.bind(Object(_.a)(Object(_.a)(n))),n.state={value:"",suggestions:[],isLoading:!1,functions:{},classes:{},hooks:{}},n.lastRequestId=null,n}return Object(y.a)(t,e),Object(f.a)(t,[{key:"handleSubmit",value:function(e){var t=this;e.preventDefault();var n=this.props.home+"/"+this.props.postType,a=Object(p.findIndex)(this.state[this.props.postType].content,function(e){return e.title===t.state.value});n=-1!==a?n+"/"+this.state[this.props.postType].content[a].slug:n+"/"+this.state.value,this.props.history.push(n)}},{key:"loadSuggestions",value:function(e){var t=this,a=this.props.postType;Object(p.isEmpty)(this.state[a])?(this.setState({isLoading:!0}),n(23)("./"+a+".json").then(function(n){var s;t.setState((s={},Object(h.a)(s,a,n),Object(h.a)(s,"isLoading",!1),Object(h.a)(s,"suggestions",t.getSuggestions(e,n)),s))})):this.setState({isLoading:!1,suggestions:this.getSuggestions(e,this.state[a])})}},{key:"getSuggestions",value:function(e,t){var n=e.trim().toLowerCase();return 0===n.length?[]:t.content.filter(function(e){return function(e,t){if(D(e,t))return!0;var n=S(e.trim().toLowerCase().replace(/[_\-\s]+/g," ")),a=S(t.trim().toLowerCase().replace(/[_\-\s]+/g," "));if(D(n,a))return!0;var s=(a=a.split(" ")).length;if(1>=s)return!1;for(var r=0,o=0;o<s;o++)-1!==n.indexOf(a[o].trim())&&r++;return r===s}(e.title.toLowerCase(),n)}).sort(C)}},{key:"renderSuggestion",value:function(e){return s.a.createElement("div",null,e.title)}},{key:"render",value:function(){var e=this.state,t=e.value,n=e.suggestions,a=this.props.postType,r={placeholder:this.props.strings[a+"_search"],value:t,onChange:this.onChange};return s.a.createElement("form",{onSubmit:this.handleSubmit},s.a.createElement(w.a,{suggestions:n,onSuggestionsFetchRequested:this.onSuggestionsFetchRequested,onSuggestionsClearRequested:this.onSuggestionsClearRequested,getSuggestionValue:function(e){return e.title},renderSuggestion:this.renderSuggestion,inputProps:r}),s.a.createElement("input",{type:"submit",value:this.props.strings.submit,id:"submit"}))}}]),t}(a.Component),N=Object(T.a)(x),q=n(19),L=function(e){var t=e.postType;t="methods"===t?"classes":t;var n=e.packageData,a=n.parsed_name,r=n.parsed_version,o=n.app_description,l=e.request,i=e.strings.page_title;a.length&&(i=a,i+=r.length?" "+r:"","home"!==l&&(i=s.a.createElement(j.a,{to:e.home},i)));var c="";o.length&&(c=s.a.createElement("p",{className:"site-description"},o));var u="/"===e.home?"":e.home;return s.a.createElement("header",{className:"site-header"},s.a.createElement("h1",{className:"site-title"},i),c,-1!==q.indexOf(t)&&s.a.createElement(N,{postType:t,strings:e.strings,home:u}),s.a.createElement("nav",null,s.a.createElement(O.a,{to:e.home,exact:!0,activeClassName:"active"},e.strings.home),q.map(function(t,n){return"methods"!==t&&s.a.createElement(O.a,{to:u+"/"+t,key:n,activeClassName:"active"},e.strings[t])})))},R=n(3),P=function(e){return s.a.createElement("div",{id:"page",className:"hfeed site devhub-wrap"},s.a.createElement(L,Object.assign({},e,{strings:R})),s.a.createElement("div",{id:"content",className:"site-content"},s.a.createElement("div",{id:"content-area",className:"code-reference"},s.a.createElement("main",{id:"main",className:"site-main",role:"main"},e.children))))},I=function(e){var t="/"===e.home?"":e.home;return s.a.createElement("div",null,s.a.createElement("h2",null,R[e.postType]),e.content.map(function(n,a){return s.a.createElement("article",{key:a,className:e.postClass},s.a.createElement("h1",null,s.a.createElement(j.a,{to:t+"/"+e.postType+"/"+n.slug},n.title)),s.a.createElement("div",{className:"description",dangerouslySetInnerHTML:{__html:n.summary}}),s.a.createElement("div",{className:"sourcefile"},s.a.createElement("p",null,R.source_file.replace("%1$s",n.source_file))))}))},M=function(e){var t=e.packageData,n=t.parsed_name,a=t.repo_url,r=t.app_url,o=t.parsed_type,l="";n.length&&(l=R.page_title);var i=R.repo?R.repo:"GitHub",c=o.length?o:R.code_base,u="";c.length&&(u=R.home_desc.replace("%1$s",c));var p="";r&&n&&(p=s.a.createElement("li",null,s.a.createElement("a",{href:r},n)));var m="";return a&&i.length&&(m=s.a.createElement("li",null,s.a.createElement("a",{href:a},i))),s.a.createElement("div",null,l&&s.a.createElement("h2",null,l),s.a.createElement("p",null,u," ",R["home_desc-2"]),(p||m)&&s.a.createElement("ul",null,p,m))},U=function(e){return s.a.createElement(M,e)},H=function(e){return e.data.hasOwnProperty("signature")&&e.data.signature.length?s.a.createElement("h1",{dangerouslySetInnerHTML:{__html:e.data.signature}}):null},$=function(e){return e.element.hasOwnProperty("summary")&&e.element.summary.length?s.a.createElement("section",{className:"summary",dangerouslySetInnerHTML:{__html:e.element.summary}}):null},F=function(e){return e.data.hasOwnProperty("html")&&e.data.html.length?s.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.data.html}}):null},W=function(e){var t=e.element,n=t.line_num,a=t.source_file,r=t.parent,o=t.namespace,l=e.packageData.repo_release_url,i="/"===e.home?"":e.home;if(!a.length)return null;var c=R.source_file.replace("%1$s",a),u="",m="",h=!1,d="",f="",g="";if(l.length&&(m=R.view_source_file,u=Object(p.trim)(l,"/")+"/"+a,n.length&&(m=R.view_source,u+="#L"+n)),r&&"methods"===e.postType){f=r;var E=e.slug.split("::");2===E.length&&(f=s.a.createElement(j.a,{to:i+"/classes/"+E[0]},r)),d=s.a.createElement("li",null,R.class,": ",f)}return o.length&&"global"!==o.toLowerCase()&&(g=s.a.createElement("li",null,R.namespace.replace("%1$s",o))),u.length&&m?(h=s.a.createElement("a",{href:u,target:"_blank",rel:"noopener noreferrer"},m),s.a.createElement("ul",{className:"source-info"},d,g,s.a.createElement("li",null,c," (",h,")"))):s.a.createElement("ul",{className:"source-info"},d,g,s.a.createElement("li",null,c))},V=function(e){var t="/"===e.home?"":e.home,n=Object(p.get)(e,"data.related.uses",{}),a=Object(p.get)(e,"data.related.used_by",{});if(Object(p.isEmpty)(n)&&Object(p.isEmpty)(a))return null;var r="";Object(p.isEmpty)(n)||(r=s.a.createElement("article",{className:"uses"},s.a.createElement("h3",null,R.uses),s.a.createElement("ul",null,n.map(function(e,n){return s.a.createElement("li",{key:n},s.a.createElement("span",null,e.source)," ",s.a.createElement(j.a,{to:t+e.url},e.text))}))));var o="";return Object(p.isEmpty)(a)||(o=s.a.createElement("div",null,s.a.createElement("hr",null),s.a.createElement("article",{className:"used-by"},s.a.createElement("h3",null,R.used_by),s.a.createElement("ul",null,a.map(function(e,n){return s.a.createElement("li",{key:n},s.a.createElement("span",null,e.source)," ",s.a.createElement(j.a,{to:t+e.url},e.text))}))))),s.a.createElement("div",null,s.a.createElement("hr",null),s.a.createElement("section",{className:"related"},s.a.createElement("h2",null,R.related),r,o))},B=function(e){if(!e.data.hasOwnProperty("changelog"))return null;var t=e.data.changelog;return s.a.createElement("div",null,s.a.createElement("hr",null),s.a.createElement("section",{className:"changelog"},s.a.createElement("h3",null,R.changelog),s.a.createElement("table",null,s.a.createElement("caption",{className:"screen-reader-text"},R.changelog),s.a.createElement("thead",null,s.a.createElement("tr",null,s.a.createElement("th",{className:"changelog-version"},R.version),s.a.createElement("th",{className:"changelog-desc"},R.description))),s.a.createElement("tbody",null,t.map(function(e,t){return s.a.createElement("tr",{key:t},s.a.createElement("td",null,e.version),s.a.createElement("td",{dangerouslySetInnerHTML:{__html:e.description}}))})))))},G=function(e){var t="/"===e.home?"":e.home;if(!e.data.hasOwnProperty("methods"))return null;var n=e.data.methods;return s.a.createElement("div",null,s.a.createElement("hr",null),s.a.createElement("section",{className:"class-methods"},s.a.createElement("h2",null,R.methods),s.a.createElement("ul",null,n.map(function(e,n){return s.a.createElement("li",{key:n},s.a.createElement(j.a,{to:t+e.url},e.title)," \u2014 ",s.a.createElement("div",{className:"class-methods-excerpt",dangerouslySetInnerHTML:{__html:e.excerpt}}))}))))},J=function(e){function t(e){var n;return Object(d.a)(this,t),(n=Object(g.a)(this,Object(E.a)(t).call(this,e))).element={},n.failedRequest=!1,n}return Object(y.a)(t,e),Object(f.a)(t,[{key:"getPostData",value:function(){var e=this,t=Object(p.findIndex)(this.props.content,function(t){return t.slug===e.props.slug});-1===t?this.failedRequest=!0:(this.failedRequest=!1,this.element=this.props.content[t])}},{key:"componentDidUpdate",value:function(e,t){e.slug!==this.props.slug&&(this.getPostData(),this.props.fetchData(this.props.postType,this.element.json_file))}},{key:"componentDidMount",value:function(){this.getPostData(),this.props.fetchData(this.props.postType,this.element.json_file)}},{key:"render",value:function(){var e=Object(p.get)(this.props,"postTypeData.file",{});if(Object(p.isEmpty)(e)||Object(p.isEmpty)(this.element))return this.failedRequest?s.a.createElement(u.a,{to:this.props.home}):null;var t=Object(p.get)(this.element,"slug",""),n=Object(p.get)(this.element,"line_num","");if(!t.length||!n.length)return null;var a=Object(p.get)(e,t+"-"+n,{});if(Object(p.isEmpty)(a))return null;var r="";return"classes"===this.props.postType&&(r=s.a.createElement(G,{element:this.element,data:a,home:this.props.home})),s.a.createElement("article",{className:this.props.postClass},s.a.createElement(H,{element:this.element,data:a}),s.a.createElement($,{element:this.element,data:a}),s.a.createElement(W,Object.assign({element:this.element},this.props)),s.a.createElement(F,{element:this.element,data:a}),s.a.createElement(B,{element:this.element,data:a}),r,s.a.createElement(V,{element:this.element,data:a,home:this.props.home}))}}]),t}(s.a.Component);function A(e){return Object(p.trim)(e,"/").split("/").filter(function(e){return""!==e})}function Q(e,t){var n="",a=A(e);return t+1<=a.length&&(n=K(e,t).toLowerCase()),n&&z(n)?("classes"===n&&t+3===a.length&&(n="methods"),n):""}function z(e){return 1===["functions","hooks","classes","methods"].filter(function(t){return e===t}).length}function K(e,t){var n="",a=A(e);return t<=a.length&&(n=a[t]),n}var X=function(e){function t(){return Object(d.a)(this,t),Object(g.a)(this,Object(E.a)(t).apply(this,arguments))}return Object(y.a)(t,e),Object(f.a)(t,[{key:"componentDidUpdate",value:function(e,t){e.postType!==this.props.postType&&Object(p.isEmpty)(this.props.postTypeData[this.props.postType])&&this.props.fetchData(this.props.postType)}},{key:"componentDidMount",value:function(){Object(p.isEmpty)(this.props.postTypeData[this.props.postType])&&this.props.fetchData(this.props.postType)}},{key:"render",value:function(){if(window.scrollTo(0,0),Object(p.isEmpty)(this.props.postTypeData[this.props.postType]))return null;var e=this.props.postTypeData[this.props.postType].content;if(!e.length||!this.props.request.length)return s.a.createElement(u.a,{to:this.props.home});if(e=e.sort(function(e,t){var n=e.title.toUpperCase(),a=t.title.toUpperCase();return n<a?-1:n>a?1:0}),"home"===this.props.request)return s.a.createElement(U,Object.assign({},this.props,{content:e}));var t=function(e){if(!z(e))return"";var t=e.substring(0,e.length-1);return"wp-parser-"+(t="classe"===t?"class":t)}(this.props.postType);return"archive"===this.props.request?s.a.createElement(I,Object.assign({},this.props,{content:e,postClass:t})):"single"===this.props.request?s.a.createElement(J,Object.assign({},this.props,{content:e,postClass:t})):s.a.createElement(u.a,{to:this.props.home})}}]),t}(a.Component),Y=function(e){return s.a.createElement(P,Object.assign({},e,{postType:"functions",request:"home"}),s.a.createElement(v.Consumer,null,function(t){t.postType;var n=t.postTypeData,a=t.fetchData;return s.a.createElement(X,Object.assign({},e,{postType:"functions",postTypeData:n,fetchData:a,request:"home"}))}))},Z=function(e){var t=e.location.pathname,n=e.postTypeIndex,a=Q(t,n);if(!function(e,t){var n=A(e),a=Q(e,t);if(!a.length)return!1;if("methods"===a){if(t+3===n.length)return!0}else if(t+2===n.length)return!0;return!1}(t,n))return s.a.createElement(u.a,{to:e.home});var r=K(t,n+1);return"methods"===a&&(r+="::"+K(t,n+2)),s.a.createElement(P,Object.assign({},e,{postType:a}),s.a.createElement(v.Consumer,null,function(t){t.postType;var n=t.postTypeData,o=t.fetchData;return s.a.createElement(X,Object.assign({},e,{postType:a,postTypeData:n,fetchData:o,request:"single",slug:r}))}))},ee=function(e){var t=Q(e.location.pathname,e.postTypeIndex);return s.a.createElement(P,Object.assign({},e,{postType:t}),s.a.createElement(v.Consumer,null,function(n){n.postType;var a=n.postTypeData,r=n.fetchData;return s.a.createElement(X,Object.assign({},e,{postType:t,postTypeData:a,fetchData:r,request:"archive"}))}))},te=function(e){return s.a.createElement(i.a,null,s.a.createElement(c.a,{path:e.match.path,exact:!0,render:function(t){return s.a.createElement(ee,e)}}),s.a.createElement(c.a,{path:"".concat(e.match.path,"/:slug"),render:function(t){return s.a.createElement(Z,e)}}))},ne=(n(66),n(68),function(e){var t=m.app_basename,n=Object(p.trim)("/"+t),a={appName:t,packageData:m,home:n,postTypeIndex:"/"===n?0:1};return n="/"===n?"":n,s.a.createElement(l.a,null,s.a.createElement(i.a,null,s.a.createElement(c.a,{path:a.home,exact:!0,render:function(e){return s.a.createElement(Y,Object.assign({},e,a))}}),s.a.createElement(c.a,{path:n+"/functions",render:function(e){return s.a.createElement(te,Object.assign({},e,a))}}),s.a.createElement(c.a,{path:n+"/classes",render:function(e){return s.a.createElement(te,Object.assign({},e,a))}}),s.a.createElement(c.a,{path:n+"/hooks",render:function(e){return s.a.createElement(te,Object.assign({},e,a))}}),s.a.createElement(u.a,{to:a.home})))}),ae=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function se(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}o.a.render(s.a.createElement(b,null,s.a.createElement(v.Consumer,null,function(e){var t=e.fetchData;return s.a.createElement(ne,{fetchData:t})})),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/keesiemeijer/github-pages-code-reference",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("/keesiemeijer/github-pages-code-reference","/service-worker.js");ae?(function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):se(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):se(e)})}}()}},[[42,22,21]]]);
//# sourceMappingURL=main.cef3f8ca.chunk.js.map