(self.webpackChunkgquino_com=self.webpackChunkgquino_com||[]).push([[7],{7757:function(t,e,r){t.exports=r(3076)},7789:function(t,e,r){"use strict";r.d(e,{Z:function(){return l}});var n=r(1788),o=r(7294),a=r(5444),i=r(1496),c=r(1153),s=r(3964),u=r.n(s),l=function(t){function e(){return t.apply(this,arguments)||this}(0,n.Z)(e,t);var r=e.prototype;return r.getPostList=function(){return this.props.postEdges.filter((function(t){return"post"===t.node.frontmatter.template})).map((function(t){return{path:t.node.fields.slug,tags:t.node.frontmatter.tags,thumbnail:t.node.frontmatter.thumbnail,title:t.node.frontmatter.title,date:t.node.fields.date,excerpt:t.node.excerpt,timeToRead:t.node.timeToRead,categories:t.node.frontmatter.categories}}))},r.render=function(){var t=this.props.simple,e=this.getPostList();return o.createElement("section",{className:"posts "+(t?"simple":"")},e.map((function(e){var r;e.thumbnail&&(r=e.thumbnail.childImageSharp.fixed);var n=e.categories.includes("Popular"),s=(0,c.p)(e.date),l=u()(e.date)>u()().subtract(1,"months");return o.createElement(a.Link,{to:e.path,key:e.title},o.createElement("div",{className:"each"},r?o.createElement(i.Z,{fixed:r}):o.createElement("div",null),o.createElement("div",null,o.createElement("h2",null,e.title),t?null:o.createElement("div",{className:"excerpt"},s)),l&&o.createElement("div",{className:"new"},o.createElement("div",null,"New!")),n&&!t&&o.createElement("div",{className:"popular"},o.createElement("div",null,"Popular"))))})))},e}(o.Component)},2248:function(t,e,r){"use strict";r.d(e,{Z:function(){return l}});var n=r(1788),o=r(7294),a=r(5414),i=r(8594),c=r.n(i),s=r(2797),u=r.n(s),l=function(t){function e(){return t.apply(this,arguments)||this}return(0,n.Z)(e,t),e.prototype.render=function(){var t,e,r,n=this.props,i=n.postNode,s=n.postPath,l=n.postSEO,f="";if(l){var h=i.frontmatter;t=h.title,e=h.description?h.description:i.excerpt,h.thumbnail&&(f=h.thumbnail.childImageSharp.fixed.src),r=c()(u().siteUrl,u().pathPrefix,s)}else t=u().siteTitle,e=u().siteDescription,f=u().siteLogo;f=c()(u().siteUrl,f);var p=c()(u().siteUrl,u().pathPrefix),m=[{"@context":"http://schema.org","@type":"WebSite",url:p,name:t,alternateName:u().siteTitleAlt?u().siteTitleAlt:""}];return l&&m.push({"@context":"http://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,item:{"@id":r,name:t,image:f}}]},{"@context":"http://schema.org","@type":"BlogPosting",url:p,name:t,alternateName:u().siteTitleAlt?u().siteTitleAlt:"",headline:t,image:{"@type":"ImageObject",url:f},description:e}),o.createElement(a.Z,null,o.createElement("meta",{name:"description",content:e}),o.createElement("meta",{name:"image",content:f}),o.createElement("script",{type:"application/ld+json"},JSON.stringify(m)),o.createElement("meta",{property:"og:url",content:l?r:p}),l?o.createElement("meta",{property:"og:type",content:"article"}):null,o.createElement("meta",{property:"og:title",content:t}),o.createElement("meta",{property:"og:description",content:e}),o.createElement("meta",{property:"og:image",content:f}),o.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),o.createElement("meta",{name:"twitter:creator",content:u().userTwitter}),o.createElement("meta",{name:"twitter:title",content:t}),o.createElement("meta",{name:"twitter:description",content:e}),o.createElement("meta",{name:"twitter:image",content:f}))},e}(o.Component)},2449:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return g}});var n=r(18);function o(t,e,r,n,o,a,i){try{var c=t[a](i),s=c.value}catch(u){return void r(u)}c.done?e(s):Promise.resolve(s).then(n,o)}function a(t){return function(){var e=this,r=arguments;return new Promise((function(n,a){var i=t.apply(e,r);function c(t){o(i,n,a,c,s,"next",t)}function s(t){o(i,n,a,c,s,"throw",t)}c(void 0)}))}}var i=r(1788),c=r(7757),s=r.n(c),u=r(7294),l=r(5414),f=r(8914),h=r(7789),p=r(2248),m=r(2797),d=r.n(m),g=function(t){function e(){for(var e,r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))||this).state={searchTerm:"",currentCategories:[],posts:e.props.data.posts.edges,filteredPosts:e.props.data.posts.edges},e.handleChange=function(){var t=a(s().mark((function t(r){var n,o,a,i;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=r.target,a=o.name,i=o.value,t.next=3,e.setState(((n={})[a]=i,n));case 3:e.filterPosts();case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.filterPosts=function(){var t=e.state,r=t.posts,n=t.searchTerm,o=t.currentCategories,a=r.filter((function(t){if(t.node.frontmatter.title.toLowerCase().includes(n.toLowerCase()))return!0}));o.length>0&&(a=a.filter((function(t){if(t.node.frontmatter.categories&&o.every((function(e){return t.node.frontmatter.categories.includes(e)})))return!0}))),e.setState({filteredPosts:a})},e.updateCategories=function(t){e.state.currentCategories.includes(t)?e.setState((function(e){return{currentCategories:e.currentCategories.filter((function(e){return t!==e}))}})):e.setState((function(e){return{currentCategories:[].concat((0,n.Z)(e.currentCategories),[t])}}))},e}return(0,i.Z)(e,t),e.prototype.render=function(){var t=this,e=this.state,r=e.filteredPosts,n=e.searchTerm,o=e.currentCategories,i=r.length,c=this.props.data.categories.group;return u.createElement(f.Z,null,u.createElement(l.Z,{title:"Articles – "+d().siteTitle}),u.createElement(p.Z,null),u.createElement("div",{className:"container"},u.createElement("h1",null,"Articles"),u.createElement("div",{className:"category-container"},c.map((function(e){var r=o.includes(e.fieldValue);return u.createElement("div",{className:"category-filter "+(r?"active":""),key:e.fieldValue,onClick:a(s().mark((function r(){return s().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,t.updateCategories(e.fieldValue);case 2:return r.next=4,t.filterPosts();case 4:case"end":return r.stop()}}),r)})))},e.fieldValue," ",u.createElement("strong",{className:"count"},e.totalCount))}))),u.createElement("div",{className:"search-container"},u.createElement("input",{className:"search",type:"text",name:"searchTerm",value:n,placeholder:"Type here to filter posts...",onChange:this.handleChange}),u.createElement("div",{className:"filter-count"},i)),u.createElement(h.Z,{postEdges:r})))},e}(u.Component)},3076:function(t){var e=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function s(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(S){s=function(t,e,r){return t[e]=r}}function u(t,e,r,n){var o=e&&e.prototype instanceof g?e:g,a=Object.create(o.prototype),i=new _(n||[]);return a._invoke=function(t,e,r){var n=f;return function(o,a){if(n===p)throw new Error("Generator is already running");if(n===m){if("throw"===o)throw a;return O()}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=C(i,r);if(c){if(c===d)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=m,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=p;var s=l(t,e,r);if("normal"===s.type){if(n=r.done?m:h,s.arg===d)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n=m,r.method="throw",r.arg=s.arg)}}}(t,r,i),a}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(S){return{type:"throw",arg:S}}}t.wrap=u;var f="suspendedStart",h="suspendedYield",p="executing",m="completed",d={};function g(){}function v(){}function y(){}var E={};E[a]=function(){return this};var w=Object.getPrototypeOf,x=w&&w(w(k([])));x&&x!==r&&n.call(x,a)&&(E=x);var L=y.prototype=g.prototype=Object.create(E);function b(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function N(t,e){function r(o,a,i,c){var s=l(t[o],t,a);if("throw"!==s.type){var u=s.arg,f=u.value;return f&&"object"==typeof f&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){r("next",t,i,c)}),(function(t){r("throw",t,i,c)})):e.resolve(f).then((function(t){u.value=t,i(u)}),(function(t){return r("throw",t,i,c)}))}c(s.arg)}var o;this._invoke=function(t,n){function a(){return new e((function(e,o){r(t,n,e,o)}))}return o=o?o.then(a,a):a()}}function C(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,C(t,r),"throw"===r.method))return d;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var o=l(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,d;var a=o.arg;return a?a.done?(r[t.resultName]=a.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,d):a:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,d)}function P(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function T(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function _(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(P,this),this.reset(!0)}function k(t){if(t){var r=t[a];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,i=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return i.next=i}}return{next:O}}function O(){return{value:e,done:!0}}return v.prototype=L.constructor=y,y.constructor=v,v.displayName=s(y,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,y):(t.__proto__=y,s(t,c,"GeneratorFunction")),t.prototype=Object.create(L),t},t.awrap=function(t){return{__await:t}},b(N.prototype),N.prototype[i]=function(){return this},t.AsyncIterator=N,t.async=function(e,r,n,o,a){void 0===a&&(a=Promise);var i=new N(u(e,r,n,o),a);return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},b(L),s(L,c,"Generator"),L[a]=function(){return this},L.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=k,_.prototype={constructor:_,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(T),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return c.type="throw",c.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],c=i.completion;if("root"===i.tryLoc)return o("end");if(i.tryLoc<=this.prev){var s=n.call(i,"catchLoc"),u=n.call(i,"finallyLoc");if(s&&u){if(this.prev<i.catchLoc)return o(i.catchLoc,!0);if(this.prev<i.finallyLoc)return o(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return o(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return o(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===t||"continue"===t)&&a.tryLoc<=e&&e<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=t,i.arg=e,a?(this.method="next",this.next=a.finallyLoc,d):this.complete(i)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),T(r),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;T(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:k(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),d}},t}(t.exports);try{regeneratorRuntime=e}catch(r){Function("r","regeneratorRuntime = r")(e)}}}]);
//# sourceMappingURL=component---src-pages-blog-js-1bba68fbf033f02ea5db.js.map