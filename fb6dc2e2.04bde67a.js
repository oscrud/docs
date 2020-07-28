(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{189:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return o})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return u}));var n=r(2),a=r(9),i=(r(0),r(194)),c={title:"Registering Services"},o={id:"server/register-service",isDocsHomePage:!1,title:"Registering Services",description:"For registering service on a specified path, basically service would includes 6 endpoints. It's have same registering strategy with endpoint.",source:"@site/docs/server/register-service.md",permalink:"/docs/docs/server/register-service",lastUpdatedBy:"Oskang09",lastUpdatedAt:1594980638},s=[],l={rightToc:s};function u(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"For registering service on a specified path, basically service would includes 6 endpoints. It's have same registering strategy with endpoint."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"GET /basePath - Service.Find"),Object(i.b)("li",{parentName:"ul"},"GET /basePath/:$id - Service.Get"),Object(i.b)("li",{parentName:"ul"},"POST /basePath - Service.Create"),Object(i.b)("li",{parentName:"ul"},"PUT /basePath/:$id - Service.Update"),Object(i.b)("li",{parentName:"ul"},"PATCH /basePath/:$id - Service.Patch"),Object(i.b)("li",{parentName:"ul"},"DELETE /basePath/:$id - Service.Delete")),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-go"}),'package oscrud\n\nfunc main() {\n    server := oscrud.NewOscrud()\n    middleware := oscrud.MiddlewareOptions{\n        Before: []oscrud.Handler{\n            func(ctx oscrud.Context) oscrud.Context {\n                log.Println("I\'m Before Middleware")\n                return ctx\n            }\n        },\n    }\n\n    // Sqlike database conn initialize\n    client := sql.MustConnect("mysql",\n        options.Connect().\n            SetHost("localhost").\n            SetPort("3306").\n            SetUsername("root").\n            SetPassword("test"),\n    )\n    client.SetPrimaryKey("Key")\n\n    // Service Definition\n    service := sqlike.NewService(client).Database("test")\n\n    // User is a query model struct based on oscrud.DataModel interface\n    server.RegisterService("test", service.ToService("user", new(User)), middleware)\n}\n')))}u.isMDXComponent=!0},194:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(r),b=n,f=p["".concat(c,".").concat(b)]||p[b]||d[b]||i;return r?a.a.createElement(f,o(o({ref:t},l),{},{components:r})):a.a.createElement(f,o({ref:t},l))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,c=new Array(i);c[0]=b;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,c[1]=o;for(var l=2;l<i;l++)c[l]=r[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);