(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{147:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return o})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return p}));var n=r(2),a=r(9),i=(r(0),r(194)),c={title:"Oscrud Service"},o={id:"service/ovrview",isDocsHomePage:!1,title:"Oscrud Service",description:"Service has 6 action following CRUD standard. Basically service will registering 6 endpoints by default. Currently creating a service may required some basic knowledge on reflect package, we trying to minimize usage of reflect when creating own service.",source:"@site/docs/service/ovrview.md",permalink:"/docs/service/ovrview",lastUpdatedBy:"Oskang09",lastUpdatedAt:1594980638},l=[],u={rightToc:l};function p(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Service has 6 action following ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Create,_read,_update_and_delete"}),"CRUD")," standard. Basically service will registering 6 endpoints by default. Currently creating a service may required some basic knowledge on ",Object(i.b)("inlineCode",{parentName:"p"},"reflect")," package, we trying to minimize usage of reflect when creating own service."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"GET /basePath - Service.Find"),Object(i.b)("li",{parentName:"ul"},"POST /basePath - Service.Create"),Object(i.b)("li",{parentName:"ul"},"GET /basePath/:$id - Service.Get"),Object(i.b)("li",{parentName:"ul"},"PUT /basePath/:$id - Service.Update"),Object(i.b)("li",{parentName:"ul"},"PATCH /basePath/:$id - Service.Patch"),Object(i.b)("li",{parentName:"ul"},"DELETE /basePath/:$id - Service.Delete")))}p.isMDXComponent=!0},194:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=a.a.createContext({}),p=function(e){var t=a.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=p(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(r),d=n,f=s["".concat(c,".").concat(d)]||s[d]||b[d]||i;return r?a.a.createElement(f,o(o({ref:t},u),{},{components:r})):a.a.createElement(f,o({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,c=new Array(i);c[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,c[1]=o;for(var u=2;u<i;u++)c[u]=r[u];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);