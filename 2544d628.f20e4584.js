(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{150:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return a})),r.d(n,"metadata",(function(){return c})),r.d(n,"rightToc",(function(){return s})),r.d(n,"default",(function(){return d}));var t=r(2),o=r(9),i=(r(0),r(209)),a={title:"Register Endpoint",sidebar_label:"Register Endpoint",keywords:["documentation","oscrud","endpoint"],description:"register endpoint to oscrud server"},c={id:"server/register-endpoint",isDocsHomePage:!1,title:"Register Endpoint",description:"register endpoint to oscrud server",source:"@site/docs/server/register-endpoint.md",permalink:"/docs/server/register-endpoint",lastUpdatedBy:"Oskang09",lastUpdatedAt:1598346779,sidebar_label:"Register Endpoint",sidebar:"defaultSidebar",previous:{title:"Register Logger",permalink:"/docs/server/register-logger"},next:{title:"Register Service",permalink:"/docs/server/register-service"}},s=[],p={rightToc:s};function d(e){var n=e.components,r=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(t.a)({},p,r,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"For registering endpoint with specified method, endpoint & handler, and also able to apply endpoint level options ( mean only work on the specifed endpoint )."),Object(i.b)("pre",null,Object(i.b)("code",Object(t.a)({parentName:"pre"},{className:"language-go"}),'package oscrud\n\nfunc main() {\n    server := oscrud.NewOscrud()\n    middleware := oscrud.MiddlewareOptions{\n        Before: []oscrud.Handler{\n            func(ctx *oscrud.Context) *oscrud.Context {\n                log.Println("I\'m Before Middleware")\n                return ctx\n            }\n        },\n    }\n    event := oscrud.EventOptions{\n        OnComplete: func(ctx *oscrud.Context) {\n            log.Println("This running from go-routine as event-drive OnComplete().")\n        },\n    }\n\n    // options can be apply in one line also.\n    server.RegisterEndpoint("GET", "/test", func(ctx *oscrud.Context) *oscrud.Context {\n        return ctx.String(200, "Hello World").End()\n    }, event, middleware)\n}\n')))}d.isMDXComponent=!0},209:function(e,n,r){"use strict";r.d(n,"a",(function(){return l})),r.d(n,"b",(function(){return g}));var t=r(0),o=r.n(t);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function s(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=o.a.createContext({}),d=function(e){var n=o.a.useContext(p),r=n;return e&&(r="function"==typeof e?e(n):c(c({},n),e)),r},l=function(e){var n=d(e.components);return o.a.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},f=o.a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,i=e.originalType,a=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),l=d(r),f=t,g=l["".concat(a,".").concat(f)]||l[f]||u[f]||i;return r?o.a.createElement(g,c(c({ref:n},p),{},{components:r})):o.a.createElement(g,c({ref:n},p))}));function g(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var i=r.length,a=new Array(i);a[0]=f;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:t,a[1]=c;for(var p=2;p<i;p++)a[p]=r[p];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);