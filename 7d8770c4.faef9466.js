(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{164:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return d}));var r=n(2),c=n(9),o=(n(0),n(194)),a={title:"Creating Own Oscrud Service"},i={id:"service/create-own-service",isDocsHomePage:!1,title:"Creating Own Oscrud Service",description:"For creating own service, you must have implement methods based on oscrud.Service interface. There built in have 2 Query Struct ( oscrud.Query, oscrud.QueryOne ) for bind data from incoming requests, mainly for standardize query naming.",source:"@site/docs/service/create-own-service.md",permalink:"/docs/service/create-own-service",lastUpdatedBy:"Oskang09",lastUpdatedAt:1594980638},u=[],s={rightToc:u};function d(e){var t=e.components,n=Object(c.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"For creating own service, you must have implement methods based on ",Object(o.b)("inlineCode",{parentName:"p"},"oscrud.Service")," interface. There built in have 2 Query Struct ( ",Object(o.b)("inlineCode",{parentName:"p"},"oscrud.Query"),", ",Object(o.b)("inlineCode",{parentName:"p"},"oscrud.QueryOne")," ) for ",Object(o.b)("inlineCode",{parentName:"p"},"bind")," data from incoming requests, mainly for standardize query naming."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-go"}),"type Service struct {}\nfunc (service Service) Create(ctx oscrud.Context) oscrud.Context {\n    // Createing data\n}\n\nfunc (service Service) Find(ctx oscrud.Context) oscrud.Context {\n    // List data\n}\n\nfunc (service Service) Get(ctx oscrud.Context) oscrud.Context {\n    // Get data ( should be one result always )\n}\n\nfunc (service Service) Update(ctx oscrud.Context) oscrud.Context {\n    // update data\n}\n\nfunc (service Service) Patch(ctx oscrud.Context) oscrud.Context {\n    // patch data\n}\n\nfunc (service Service) Delete(ctx oscrud.Context) oscrud.Context {\n    // delete data\n}\n")))}d.isMDXComponent=!0},194:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var r=n(0),c=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var s=c.a.createContext({}),d=function(e){var t=c.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return c.a.createElement(s.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},f=c.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),p=d(n),f=r,m=p["".concat(a,".").concat(f)]||p[f]||l[f]||o;return n?c.a.createElement(m,i(i({ref:t},s),{},{components:n})):c.a.createElement(m,i({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=f;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,a[1]=i;for(var s=2;s<o;s++)a[s]=n[s];return c.a.createElement.apply(null,a)}return c.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);