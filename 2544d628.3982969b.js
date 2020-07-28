(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{149:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return p})),t.d(n,"default",(function(){return s}));var r=t(2),o=t(9),i=(t(0),t(194)),a={title:"Registering Endpoints"},c={id:"server/register-endpoint",isDocsHomePage:!1,title:"Registering Endpoints",description:"For registering endpoint with specified method, endpoint & handler, and also able to apply endpoint level options ( mean only work on the specifed endpoint ).",source:"@site/docs/server/register-endpoint.md",permalink:"/docs/server/register-endpoint",lastUpdatedBy:"Oskang09",lastUpdatedAt:1594980638},p=[],l={rightToc:p};function s(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"For registering endpoint with specified method, endpoint & handler, and also able to apply endpoint level options ( mean only work on the specifed endpoint )."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-go"}),'package oscrud\n\nfunc main() {\n    server := oscrud.NewOscrud()\n    middleware := oscrud.MiddlewareOptions{\n        Before: []oscrud.Handler{\n            func(ctx oscrud.Context) oscrud.Context {\n                log.Println("I\'m Before Middleware")\n                return ctx\n            }\n        },\n    }\n    event := oscrud.EventOptions{\n        OnComplete: func(ctx oscrud.Context) {\n            log.Println("This running from go-routine as event-drive OnComplete().")\n        },\n    }\n\n    // options can be apply in one line also.\n    server.RegisterEndpoint("GET", "/test", func(ctx oscrud.Context) oscrud.Context {\n        return ctx.String(200, "Hello World").End()\n    }, event, middleware)\n}\n')))}s.isMDXComponent=!0},194:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return m}));var r=t(0),o=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=o.a.createContext({}),s=function(e){var n=o.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=s(e.components);return o.a.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},f=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=s(t),f=r,m=u["".concat(a,".").concat(f)]||u[f]||d[f]||i;return t?o.a.createElement(m,c(c({ref:n},l),{},{components:t})):o.a.createElement(m,c({ref:n},l))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=f;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var l=2;l<i;l++)a[l]=t[l];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"}}]);