(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{176:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return c})),t.d(r,"metadata",(function(){return i})),t.d(r,"rightToc",(function(){return p})),t.d(r,"default",(function(){return s}));var n=t(2),o=t(9),a=(t(0),t(209)),c={title:"Group Register",sidebar_label:"Group Register",keywords:["documentation","oscrud","group"],description:"register group to oscrud server"},i={id:"server/group",isDocsHomePage:!1,title:"Group Register",description:"register group to oscrud server",source:"@site/docs/server/group.md",permalink:"/docs/server/group",lastUpdatedBy:"Oskang09",lastUpdatedAt:1598346779,sidebar_label:"Group Register",sidebar:"defaultSidebar",previous:{title:"Register Service",permalink:"/docs/server/register-service"},next:{title:"Get Transport",permalink:"/docs/server/get-transport"}},p=[],u={rightToc:p};function s(e){var r=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},u,t,{components:r,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"Group")," is for group up a path and options, easier for those versioning or nested path."),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-go"}),'package main\n\nimport (\n    "github.com/oscrud/oscrud"\n)\n\nfunc Example(ctx *oscrud.Context) *oscrud.Context {\n    return ctx.String(200, "Example Handler")\n}\n\nfunc main() {\n    server := oscrud.NewOscrud()\n    group := server.Group("/v1")\n    group.RegisterEndpoint("GET", "/example", Example) // registered at /v1/example\n}\n')))}s.isMDXComponent=!0},209:function(e,r,t){"use strict";t.d(r,"a",(function(){return l})),t.d(r,"b",(function(){return g}));var n=t(0),o=t.n(n);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=o.a.createContext({}),s=function(e){var r=o.a.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},l=function(e){var r=s(e.components);return o.a.createElement(u.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},f=o.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),l=s(t),f=n,g=l["".concat(c,".").concat(f)]||l[f]||d[f]||a;return t?o.a.createElement(g,i(i({ref:r},u),{},{components:t})):o.a.createElement(g,i({ref:r},u))}));function g(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,c=new Array(a);c[0]=f;var i={};for(var p in r)hasOwnProperty.call(r,p)&&(i[p]=r[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var u=2;u<a;u++)c[u]=t[u];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"}}]);