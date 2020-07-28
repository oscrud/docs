(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{174:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return i})),r.d(n,"metadata",(function(){return c})),r.d(n,"rightToc",(function(){return p})),r.d(n,"default",(function(){return d}));var t=r(2),o=r(9),a=(r(0),r(194)),i={title:"Middleware Options"},c={id:"options/middleware",isDocsHomePage:!1,title:"Middleware Options",description:"Middleware options is for applying before and after lifecycle to endpoint or server. So if both server and endpoint middleware specified, will run based on : Incoming Request --\x3e server.Before -> endpoint.Before -> Main handler -> endpoint.After -> server.After -> Outgoing Response.",source:"@site/docs/options/middleware.md",permalink:"/docs/options/middleware",lastUpdatedBy:"Oskang09",lastUpdatedAt:1594980638},p=[],l={rightToc:p};function d(e){var n=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(t.a)({},l,r,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Middleware options is for applying ",Object(a.b)("inlineCode",{parentName:"p"},"before")," and ",Object(a.b)("inlineCode",{parentName:"p"},"after")," lifecycle to endpoint or server. So if both server and endpoint middleware specified, will run based on : ",Object(a.b)("strong",{parentName:"p"},Object(a.b)("em",{parentName:"strong"},"Incoming Request --\x3e ",Object(a.b)("inlineCode",{parentName:"em"},"server.Before")," -> ",Object(a.b)("inlineCode",{parentName:"em"},"endpoint.Before")," -> Main handler -> ",Object(a.b)("inlineCode",{parentName:"em"},"endpoint.After")," -> ",Object(a.b)("inlineCode",{parentName:"em"},"server.After")," -> Outgoing Response")),"."),Object(a.b)("pre",null,Object(a.b)("code",Object(t.a)({parentName:"pre"},{className:"language-go"}),"// MiddlewareOptions :\ntype MiddlewareOptions struct {\n    Before []Handler\n    After  []Handler\n}\n")))}d.isMDXComponent=!0},194:function(e,n,r){"use strict";r.d(n,"a",(function(){return s})),r.d(n,"b",(function(){return b}));var t=r(0),o=r.n(t);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function p(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),d=function(e){var n=o.a.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):c(c({},n),e)),r},s=function(e){var n=d(e.components);return o.a.createElement(l.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},u=o.a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,a=e.originalType,i=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),s=d(r),u=t,b=s["".concat(i,".").concat(u)]||s[u]||f[u]||a;return r?o.a.createElement(b,c(c({ref:n},l),{},{components:r})):o.a.createElement(b,c({ref:n},l))}));function b(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var a=r.length,i=new Array(a);i[0]=u;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c.mdxType="string"==typeof e?e:t,i[1]=c;for(var l=2;l<a;l++)i[l]=r[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"}}]);