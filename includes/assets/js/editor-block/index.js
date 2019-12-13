!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=12)}([function(e,t){!function(){e.exports=this.wp.element}()},function(e,t){!function(){e.exports=this.lodash}()},function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}e.exports=function(e,t,o){return t&&n(e.prototype,t),o&&n(e,o),e}},function(e,t,n){var o=n(10),r=n(8);e.exports=function(e,t){return!t||"object"!==o(t)&&"function"!=typeof t?r(e):t}},function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},function(e,t,n){var o=n(11);e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&o(e,t)}},function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},function(e,t,n){var o;
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var o=arguments[t];if(o){var s=typeof o;if("string"===s||"number"===s)e.push(o);else if(Array.isArray(o)&&o.length){var i=r.apply(null,o);i&&e.push(i)}else if("object"===s)for(var a in o)n.call(o,a)&&o[a]&&e.push(a)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(o=function(){return r}.apply(t,[]))||(e.exports=o)}()},function(e,t){function n(t){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?e.exports=n=function(e){return typeof e}:e.exports=n=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(t)}e.exports=n},function(e,t){function n(t,o){return e.exports=n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},n(t,o)}e.exports=n},function(e,t,n){"use strict";n.r(t);var o=n(1),r=n(7),s=n.n(r),i=n(2),a=n.n(i),c=n(3),l=n.n(c),u=n(4),p=n.n(u),f=n(5),b=n.n(f),m=n(8),h=n.n(m),d=n(6),y=n.n(d),g=n(0),v=n(9),O=n.n(v),j=window.km_rpbt_plugin_data||{},_={post_types:{type:"object"},taxonomies:{type:"object"},formats:{type:"object"},order:{type:"object"},image_sizes:{type:"object"},default_tax:{type:"string"},all_tax:{type:"string"},default_category:{type:"string"},preview:{type:"bool",default:!0},html5_gallery:{type:"bool",default:!1},show_date:{type:"bool",default:!1}};function x(e,t){return!(!Object(o.isObject)(e)||!e.hasOwnProperty(t))&&!Object(o.isUndefined)(e[t])}function w(e){var t=function(e){var t=Object(o.get)(_,e+".default"),n=Object(o.get)({object:{},string:""},Object(o.get)(_,e+".type"));return Object(o.isUndefined)(t)?n:t}(e);if(!x(j,e)||Object(o.isUndefined)(t))return t;var n=j[e];return function(e,t){var n=!1;switch(e){case"bool":t=function(e){if(!Object(o.isString)(e))return e;var t=Number(e.trim());return 1===t||0===t?1===t:e}(t),n=Object(o.isBoolean)(t);break;case"object":n=Object(o.isObject)(t);break;case"string":n=Object(o.isString)(t)}return n}(Object(o.get)(_,e+".type"),n)?n:t}function k(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=w(e);for(var o in n)n.hasOwnProperty(o)&&t.push({label:n[o],value:o});return t}var C=wp.components.BaseControl;function P(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=[],n=w("post_types");for(var o in n)n.hasOwnProperty(o)&&t.push({post_type:o,label:n[o],checked:-1!==e.indexOf(o)});return t}var T=(0,wp.compose.withInstanceId)(function(e){function t(){var e;a()(this,t);var n=(e=p()(this,b()(t).apply(this,arguments))).props.postTypes;return e.state={items:P(n.split(","))},e}return y()(t,e),l()(t,[{key:"onChange",value:function(e){var t=this.state.items.slice();t[e].checked=!t[e].checked,this.setState({items:t});var n=this.state.items.filter((function(e){return e.checked})).map((function(e){return e.post_type}));this.props.onChange&&this.props.onChange(n.join(","))}},{key:"render",value:function(){var e=this,t=this.props,n=t.label,r=t.help,s=t.instanceId,i=t.postTypes,a="inspector-multi-checkbox-control-"+s;var c=i.split(",");return c=c.filter((function(e){return t=e,x(w("post_types"),t);var t})),!Object(o.isEmpty)(this.state.items)&&Object(g.createElement)(C,{label:n,id:a,help:r,className:"blocks-checkbox-control"},this.state.items.map((function(t,n){return Object(g.createElement)("div",{key:a+"-"+n,className:"blocks-checkbox-control__option"},Object(g.createElement)("input",{id:a+"-"+n,className:"blocks-checkbox-control__input",type:"checkbox",name:a+"-"+n,value:t.post_type,onChange:e.onChange.bind(e,n),checked:!(-1===c.indexOf(t.post_type)),"aria-describedby":r?a+"__help":void 0}),Object(g.createElement)("label",{key:t.post_type,htmlFor:a+"-"+n},t.label))})))}}]),t}(wp.element.Component)),E=wp.i18n.__,S=wp.components,D=S.SelectControl,I=S.RangeControl,N=S.ToggleControl,M=k("taxonomies",[{label:E("all taxonomies"),value:"km_rpbt_all_tax"}]),A=k("formats"),z=k("order");function R(e){var t=e.taxonomies,n=e.onTaxonomiesChange,o=e.postsPerPage,r=e.onPostsPerPageChange,s=e.format,i=e.onFormatChange,a=e.showDate,c=e.onShowDateChange,l=e.postTypes,u=e.onPostTypesChange,p=e.order,f=e.onOrderChange;return[r&&Object(g.createElement)(I,{key:"rpbt-range-posts-per-page",label:E("Number of items"),value:o,onChange:r,min:-1,max:100}),n&&Object(g.createElement)(D,{key:"rpbt-select-taxonomies",label:E("Taxonomies"),value:"".concat(t),options:M,onChange:function(e){n(e)}}),u&&Object(g.createElement)(T,{label:E("Post Types"),onChange:u,postTypes:l}),f&&Object(g.createElement)(D,{key:"rpbt-select-order",label:E("Order posts"),value:"".concat(p),options:z,onChange:function(e){f(e)}}),i&&Object(g.createElement)(D,{key:"rpbt-select-format",label:E("Format"),value:"".concat(s),options:A,onChange:function(e){i(e)}}),c&&Object(g.createElement)(N,{label:E("Display post date"),checked:a,onChange:c})]}var F=wp.i18n.__,U=wp.components,B=U.SelectControl,q=U.RangeControl,L=k("image_sizes");function G(e){var t=e.imageSize,n=e.onImageSizeChange,o=e.columns,r=e.onColumnsChange;return[n&&Object(g.createElement)(B,{key:"rpbt-select-image-size",label:F("Image Size"),value:"".concat(t),options:L,onChange:function(e){n(e)}}),r&&Object(g.createElement)(q,{key:"rpbt-range-columns",label:F("Image Columns"),value:o,onChange:r,min:0,max:20})]}function Q(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}var W=wp.element,H=W.Component,V=W.RawHTML,J=wp.components,K=J.Placeholder,X=J.Spinner,Y=wp.i18n,Z=Y.__,$=Y.sprintf,ee=wp.apiFetch,te=wp.url.addQueryArgs;function ne(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=null!==t?t:{};return o.gallery_format="editor_block",o.is_editor=!0,o.link_caption=!1,te("/related-posts-by-taxonomy/v1/posts/".concat(e),function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Q(Object(n),!0).forEach((function(t){s()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Q(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},o,{},n))}var oe=function(e){function t(e){var n;return a()(this,t),(n=p()(this,b()(t).call(this,e))).state={response:null},n}return y()(t,e),l()(t,[{key:"componentDidMount",value:function(){this.isStillMounted=!0,this.fetch(this.props),this.fetch=Object(o.debounce)(this.fetch,500)}},{key:"componentWillUnmount",value:function(){this.isStillMounted=!1}},{key:"componentDidUpdate",value:function(e){Object(o.isEqual)(e,this.props)||this.fetch(this.props)}},{key:"fetch",value:function(e){var t=this;if(this.isStillMounted){null!==this.state.response&&this.setState({response:null});var n=e.postID,o=e.attributes,r=void 0===o?null:o,s=e.urlQueryArgs,i=ne(n,r,void 0===s?{}:s),a=this.currentFetchRequest=ee({path:i}).then((function(e){t.isStillMounted&&a===t.currentFetchRequest&&e&&e.rendered&&t.setState({response:e.rendered})})).catch((function(e){t.isStillMounted&&a===t.currentFetchRequest&&t.setState({response:{error:!0,errorMsg:e.message}})}));return a}}},{key:"render",value:function(){var e=this.state.response;if(!e)return Object(g.createElement)(K,null,Object(g.createElement)(X,null));if(e.error){var t=$(Z("Error loading post: %s"),e.errorMsg);return Object(g.createElement)(K,null,t)}return e.length?Object(g.createElement)(V,{key:"html"},e):Object(g.createElement)(K,null,Z("No results found."))}}]),t}(H),re=wp.editor.InspectorControls,se=wp.components,ie=se.BaseControl,ae=se.PanelBody,ce=se.ToggleControl,le=(se.ServerSideRender,se.Disabled,wp.element),ue=le.Component,pe=le.Fragment,fe=wp.i18n.__,be=0,me=function(e){function t(){var e;return a()(this,t),(e=p()(this,b()(t).apply(this,arguments))).previewExpanded=w("preview"),e.html5Gallery=w("html5_gallery"),e.defaultCategory=w("default_category"),e.updatePostTypes=e.updatePostTypes.bind(h()(e)),e.onTitleChange=e.onTitleChange.bind(h()(e)),e.titleDebounced=Object(o.debounce)(e.updateTitle,1e3),e.toggleLinkCaption=e.createToggleAttribute("link_caption"),e.toggleShowDate=e.createToggleAttribute("show_date"),e.instanceId=be++,e}return y()(t,e),l()(t,[{key:"createToggleAttribute",value:function(e){var t=this;return function(){var n=t.props.attributes[e];(0,t.props.setAttributes)(s()({},e,!n))}}},{key:"componentWillUnmount",value:function(){this.titleDebounced.cancel()}},{key:"onTitleChange",value:function(e){this.titleDebounced(e.target.value)}},{key:"updateTitle",value:function(e){(0,this.props.setAttributes)({title:e})}},{key:"updatePostTypes",value:function(e){(0,this.props.setAttributes)({post_types:e})}},{key:"render",value:function(){var e=this.props,t=e.attributes,n=e.setAttributes,r=e.editorData,s=e.postType,i=e.postID,a=t.title,c=t.taxonomies,l=t.post_types,u=t.posts_per_page,p=t.format,f=t.image_size,b=t.columns,m=t.link_caption,h=t.show_date,d=t.order,y=(t.fields,"inspector-text-control-"+this.instanceId),v=O()(this.props.className,{"rpbt-html5-gallery":"thumbnails"===p&&this.html5Gallery});if(Object(o.isUndefined)(r))return null;var j=Object.assign({},t);j.post_id=i,j.terms=r.termIDs.join(","),j.terms.length||-1===r.taxonomyNames.indexOf("category")||(j.terms=this.defaultCategory);var _=l;!Object(o.isUndefined)(l)&&l||(_=s);var x=Object(g.createElement)(re,null,Object(g.createElement)(ae,{title:fe("Related Posts Settings")},Object(g.createElement)("div",{className:this.props.className+"-inspector-controls"},Object(g.createElement)("div",null,Object(g.createElement)("p",null,fe("Note: The preview style is not the actual style used in the front end of your site."))),Object(g.createElement)(ie,{label:fe("Title"),id:y},Object(g.createElement)("input",{className:"components-text-control__input",type:"text",onChange:this.onTitleChange,defaultValue:a,id:y})),Object(g.createElement)(R,{postsPerPage:u,onPostsPerPageChange:function(e){var t=0===Number(e)?1:e;n({posts_per_page:Number(t)})},taxonomies:c,onTaxonomiesChange:function(e){return n({taxonomies:e})},format:p,onFormatChange:function(e){return n({format:e})},order:d,onOrderChange:function(e){return n({order:e})},showDate:h,onShowDateChange:this.toggleShowDate,postTypes:_,onPostTypesChange:this.updatePostTypes}))),Object(g.createElement)(ae,{title:fe("Image Settings")},Object(g.createElement)(G,{imageSize:f,onImageSizeChange:function(e){return n({image_size:e})},columns:b,onColumnsChange:function(e){return n({columns:Number(e)})}}),Object(g.createElement)(ce,{label:fe(" Link image captions to posts"),checked:m,onChange:this.toggleLinkCaption})));return Object(g.createElement)(pe,null,x,Object(g.createElement)("div",{className:v},Object(g.createElement)(oe,{block:"related-posts-by-taxonomy/related-posts-block",postID:i,attributes:j})))}}]),t}(ue),he=wp.i18n.__,de=wp.blocks.registerBlockType,ye=wp.data.withSelect,ge=wp.compose.compose;Object(o.isEmpty)(j)||de("related-posts-by-taxonomy/related-posts-block",{title:he("Related Posts by Taxonomy"),icon:"megaphone",category:"widgets",description:he("This block displays related posts by taxonomy."),supports:{html:!1,customClassName:!1},edit:ge(ye((function(e,t){return{postID:e("core/editor").getCurrentPostId(),postType:e("core/editor").getCurrentPostType(),registeredTaxonomies:e("core").getTaxonomies()}})),ye((function(e,t){if(!t.registeredTaxonomies||!t.postType||!t.postID)return null;var n={},r=[],s=t.registeredTaxonomies;Object(o.filter)(s,(function(e){return Object(o.includes)(e.types,t.postType)})).map((function(t){n[t.slug]=e("core/editor").getEditedPostAttribute(t.rest_base),r.push(t.slug)}));var i=Object(o.pickBy)(n,(function(e){return e.length})),a=Object.keys(i).map((function(e){return i[e]}));return{editorData:{taxonomyTerms:n,taxonomyNames:r,termIDs:Object(o.flatten)(a)}}})))(me),save:function(){return null}})}]);