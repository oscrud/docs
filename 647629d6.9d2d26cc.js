(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{159:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return b})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return s}));var r=n(2),a=n(9),o=(n(0),n(196)),l={title:"Response Context",sidebar_label:"Response Context",keywords:["documentation","oscrud","handler","response"],description:"oscrud response context object"},b={id:"handler/response",isDocsHomePage:!1,title:"Response Context",description:"oscrud response context object",source:"@site/docs/handler/response.md",permalink:"/docs/handler/response",lastUpdatedBy:"Oskang09",lastUpdatedAt:1596030521,sidebar_label:"Response Context",sidebar:"defaultSidebar",previous:{title:"Request Context",permalink:"/docs/handler/request"},next:{title:"Response Object",permalink:"/docs/handler/response-object"}},c=[],i={rightToc:c};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Method"),Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Set(key string, value string) Context"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Append header to response, will override if key exists")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"NoContent() Context"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Response with status 204, and empty result.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"NotFound() Context"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Response with status 404, and not found error.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"String(status int, text string) Context"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Response with status, and raw string. Content type will be set as ",Object(o.b)("inlineCode",{parentName:"td"},"text/plain"))),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"HTML(status int, html string) Context"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Response with status, and html string. Content type will be set as ",Object(o.b)("inlineCode",{parentName:"td"},"text/html"),".")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"JSON(status int, i interface{}) Context"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Response with status, and interface. Content type will be set as ",Object(o.b)("inlineCode",{parentName:"td"},"application/json"),".")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"XML(status int, i interface{}) Context"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Response with status, and interface. Content type will be set as ",Object(o.b)("inlineCode",{parentName:"td"},"application/xml"),".")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Send(status int, contentType string, i interface{}) Context"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Response with status, content type and interface. Transport should be handle on this if not will return error ",Object(o.b)("inlineCode",{parentName:"td"},"ErrResponseFailed"),".")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Error(status int, exception error)"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Response with status, and given error")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Stack(status int, exception error)"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Response with status, and given error ( stack will be provided ). ",Object(o.b)("inlineCode",{parentName:"td"},"errors.WithStack()"),".")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"End() Context"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"A signal to tell handler, the flow is reach end already. If ",Object(o.b)("inlineCode",{parentName:"td"},"End()")," didn't call until end of the handler, will return error ",Object(o.b)("inlineCode",{parentName:"td"},"ErrResponseNotComplete"),".")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Response() Response"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Return response object")))))}s.isMDXComponent=!0},196:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return O}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=a.a.createContext({}),s=function(e){var t=a.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):b(b({},t),e)),n},p=function(e){var t=s(e.components);return a.a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),p=s(n),u=r,O=p["".concat(l,".").concat(u)]||p[u]||d[u]||o;return n?a.a.createElement(O,b(b({ref:t},i),{},{components:n})):a.a.createElement(O,b({ref:t},i))}));function O(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=u;var b={};for(var c in t)hasOwnProperty.call(t,c)&&(b[c]=t[c]);b.originalType=e,b.mdxType="string"==typeof e?e:r,l[1]=b;for(var i=2;i<o;i++)l[i]=n[i];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);