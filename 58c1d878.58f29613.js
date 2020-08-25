(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{160:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return c})),t.d(r,"metadata",(function(){return i})),t.d(r,"rightToc",(function(){return l})),t.d(r,"default",(function(){return u}));var n=t(2),a=t(9),o=(t(0),t(209)),c={title:"Example",sidebar_label:"Example",keywords:["documentation","oscrud","handler"],description:"example of oscrud handler"},i={id:"handler/example",isDocsHomePage:!1,title:"Example",description:"example of oscrud handler",source:"@site/docs/handler/example.md",permalink:"/docs/handler/example",lastUpdatedBy:"Oskang09",lastUpdatedAt:1598346779,sidebar_label:"Example",sidebar:"defaultSidebar",previous:{title:"Overview",permalink:"/docs/handler/overview"},next:{title:"Request Context",permalink:"/docs/handler/request"}},l=[],p={rightToc:l};function u(e){var r=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},p,t,{components:r,mdxType:"MDXLayout"}),Object(o.b)("p",null,"You can customize some builder to build handler, there's an example with ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/oscrud/graphql-handler"}),"graphql"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-go"}),'func Example(ctx *oscrud.Context) *oscrud.Context {\n    // Before accessing form must ParseForm() first\n    if err := ctx.ParseForm(false); err != nil {\n        return ctx.Error(400, err)\n    }\n    return ctx.String(200, "Example Handler")\n}\n\nfunc main() {\n    server := oscrud.NewOscrud()\n    server.RegisterEndpoint("GET", "/example", Example)\n}\n')))}u.isMDXComponent=!0},209:function(e,r,t){"use strict";t.d(r,"a",(function(){return s})),t.d(r,"b",(function(){return f}));var n=t(0),a=t.n(n);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=a.a.createContext({}),u=function(e){var r=a.a.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},s=function(e){var r=u(e.components);return a.a.createElement(p.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},m=a.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=u(t),m=n,f=s["".concat(c,".").concat(m)]||s[m]||d[m]||o;return t?a.a.createElement(f,i(i({ref:r},p),{},{components:t})):a.a.createElement(f,i({ref:r},p))}));function f(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,c=new Array(o);c[0]=m;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var p=2;p<o;p++)c[p]=t[p];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);