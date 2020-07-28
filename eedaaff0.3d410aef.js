(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{186:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return p}));var a=n(2),r=n(9),b=(n(0),n(194)),c={title:"Request Context"},l={id:"handler/request",isDocsHomePage:!1,title:"Request Context",description:"| Method                                  | Description                                                                                                                                           |",source:"@site/docs/handler/request.md",permalink:"/docs/docs/handler/request",lastUpdatedBy:"Oskang09",lastUpdatedAt:1594980638},i=[],o={rightToc:i};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(b.b)("wrapper",Object(a.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Method"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Method() string"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Return request method, default to be smaller case ",Object(b.b)("inlineCode",{parentName:"td"},"get"),", ",Object(b.b)("inlineCode",{parentName:"td"},"post"),".")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Get(key string) interface{}"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Get value by key from  ",Object(b.b)("inlineCode",{parentName:"td"},"param"),", ",Object(b.b)("inlineCode",{parentName:"td"},"query"),", ",Object(b.b)("inlineCode",{parentName:"td"},"body"),", ",Object(b.b)("inlineCode",{parentName:"td"},"header"),", order respectively.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Context() context.Context"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Get request context")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Transport() TransportID"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Get transport name")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Path() string"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Return request path")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"RequestID() string"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Return request id")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"State() map","[string]","interface{}"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Return request state")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Headers() map","[string]","string"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Return request headers")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Query() map","[string]","interface{}"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Return request queries")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Params() map","[string]","string"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Return request params")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Body() map","[string]","interface{}"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Return request body")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Bind(src interface{}) error"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Bind data from ",Object(b.b)("inlineCode",{parentName:"td"},"map")," specify by ",Object(b.b)("inlineCode",{parentName:"td"},"reflect.Tag"),". More information please look at ",Object(b.b)("a",Object(a.a)({parentName:"td"},{href:"#specific-binding"}),"Specific Binding"),".")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"BindAll(src interface{}) error"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Bind data from ",Object(b.b)("inlineCode",{parentName:"td"},"param"),", ",Object(b.b)("inlineCode",{parentName:"td"},"query"),", ",Object(b.b)("inlineCode",{parentName:"td"},"body"),", ",Object(b.b)("inlineCode",{parentName:"td"},"header"),", ",Object(b.b)("inlineCode",{parentName:"td"},"state")," based on ",Object(b.b)("inlineCode",{parentName:"td"},"json")," and ",Object(b.b)("inlineCode",{parentName:"td"},"qm")," tag. More information please look at ",Object(b.b)("a",Object(a.a)({parentName:"td"},{href:"#all-binding"}),"All Binding"),".")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"SetState(key string, value interface{})"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Set data to request level state")))))}p.isMDXComponent=!0},194:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){b(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},b=Object.keys(e);for(a=0;a<b.length;a++)n=b[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(a=0;a<b.length;a++)n=b[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=r.a.createContext({}),p=function(e){var t=r.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,b=e.originalType,c=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),d=p(n),u=a,m=d["".concat(c,".").concat(u)]||d[u]||O[u]||b;return n?r.a.createElement(m,l(l({ref:t},o),{},{components:n})):r.a.createElement(m,l({ref:t},o))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var b=n.length,c=new Array(b);c[0]=u;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,c[1]=l;for(var o=2;o<b;o++)c[o]=n[o];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);