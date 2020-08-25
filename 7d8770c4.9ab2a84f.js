(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{167:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return d}));var n=r(2),c=r(9),o=(r(0),r(209)),a={title:"Creating Own Oscrud Service",sidebar_label:"Creating Own Oscrud Service",keywords:["documentation","oscrud","service","customization"],description:"custom service for oscrud server"},i={id:"service/create-own-service",isDocsHomePage:!1,title:"Creating Own Oscrud Service",description:"custom service for oscrud server",source:"@site/docs/service/create-own-service.md",permalink:"/docs/service/create-own-service",lastUpdatedBy:"Oskang09",lastUpdatedAt:1598346779,sidebar_label:"Creating Own Oscrud Service",sidebar:"defaultSidebar",previous:{title:"Overview",permalink:"/docs/service/overview"},next:{title:"Defining Model",permalink:"/docs/service/data-model"}},s=[],u={rightToc:s};function d(e){var t=e.components,r=Object(c.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"For creating own service, you must have implement methods based on ",Object(o.b)("inlineCode",{parentName:"p"},"oscrud.Service")," interface."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-go"}),"type Service struct {}\nfunc (service Service) Create(ctx *oscrud.Context) *oscrud.Context {\n    // Createing data\n}\n\nfunc (service Service) Find(ctx *oscrud.Context) *oscrud.Context {\n    // List data\n}\n\nfunc (service Service) Get(id string, ctx *oscrud.Context) *oscrud.Context {\n    // Get data ( should be one result always )\n}\n\nfunc (service Service) Update(id string, ctx *oscrud.Context) *oscrud.Context {\n    // update data\n}\n\nfunc (service Service) Patch(id string, ctx *oscrud.Context) *oscrud.Context {\n    // patch data\n}\n\nfunc (service Service) Delete(id string, ctx *oscrud.Context) *oscrud.Context {\n    // delete data\n}\n")))}d.isMDXComponent=!0},209:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return v}));var n=r(0),c=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,c=function(e,t){if(null==e)return{};var r,n,c={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(c[r]=e[r]);return c}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}var u=c.a.createContext({}),d=function(e){var t=c.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=d(e.components);return c.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},f=c.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,a=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),l=d(r),f=n,v=l["".concat(a,".").concat(f)]||l[f]||p[f]||o;return r?c.a.createElement(v,i(i({ref:t},u),{},{components:r})):c.a.createElement(v,i({ref:t},u))}));function v(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,a=new Array(o);a[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,a[1]=i;for(var u=2;u<o;u++)a[u]=r[u];return c.a.createElement.apply(null,a)}return c.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);