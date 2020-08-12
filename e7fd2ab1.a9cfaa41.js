(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{197:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return i})),t.d(r,"metadata",(function(){return c})),t.d(r,"rightToc",(function(){return p})),t.d(r,"default",(function(){return u}));var n=t(2),o=t(9),a=(t(0),t(209)),i={title:"Creating Own Oscrud Transport",sidebar_label:"Creating Own Oscrud Transport",keywords:["documentation","oscrud","transport","customization"],description:"custom transport for oscrud server"},c={id:"transport/create-own-transport",isDocsHomePage:!1,title:"Creating Own Oscrud Transport",description:"custom transport for oscrud server",source:"@site/docs/transport/create-own-transport.md",permalink:"/docs/transport/create-own-transport",lastUpdatedBy:"Oskang09",lastUpdatedAt:1596030521,sidebar_label:"Creating Own Oscrud Transport",sidebar:"defaultSidebar",previous:{title:"Overview",permalink:"/docs/transport/overview"},next:{title:"Overview",permalink:"/docs/binder/overview"}},p=[],s={rightToc:p};function u(e){var r=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},s,t,{components:r,mdxType:"MDXLayout"}),Object(a.b)("p",null,"For creating own transport, you have to implement method from ",Object(a.b)("inlineCode",{parentName:"p"},"oscrud.Transport"),". Basically have 2 type registraion way. Way 1 is in ",Object(a.b)("inlineCode",{parentName:"p"},"Register")," for those transport which support endpoint routing like Echo. Way 2 is in ",Object(a.b)("inlineCode",{parentName:"p"},"Start")," for those transport doesn't have a router support like ",Object(a.b)("inlineCode",{parentName:"p"},"net/http")," package."),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-go"}),'type Transport struct {}\n\nconst (\n    TransportName oscrud.TransportID = "TransportName"\n)\n\nfunc (t *Transport) Name() oscrud.TransportID {\n    return TransportName\n}\n\nfunc (t *Transport) Register(method string, endpoint string, handler oscrud.TransportHandler) {\n    // Every endpoint registration will call this method.\n}\n\nfunc (t *Transport) Start() error {\n    // Transport start receiving request\n}\n')))}u.isMDXComponent=!0},209:function(e,r,t){"use strict";t.d(r,"a",(function(){return l})),t.d(r,"b",(function(){return m}));var n=t(0),o=t.n(n);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=o.a.createContext({}),u=function(e){var r=o.a.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},l=function(e){var r=u(e.components);return o.a.createElement(s.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},f=o.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),l=u(t),f=n,m=l["".concat(i,".").concat(f)]||l[f]||d[f]||a;return t?o.a.createElement(m,c(c({ref:r},s),{},{components:t})):o.a.createElement(m,c({ref:r},s))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,i=new Array(a);i[0]=f;var c={};for(var p in r)hasOwnProperty.call(r,p)&&(c[p]=r[p]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var s=2;s<a;s++)i[s]=t[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"}}]);