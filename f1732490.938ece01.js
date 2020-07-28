(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{188:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return l})),r.d(t,"rightToc",(function(){return i})),r.d(t,"default",(function(){return s}));var n=r(2),o=r(9),a=(r(0),r(194)),c={title:"Request Lifecycle"},l={id:"reference/request-lifecycle",isDocsHomePage:!1,title:"Request Lifecycle",description:"Basically a request firstly will come to Transport. Transport will do the basic handling to construct a oscrud.Request and only bring request to oscrud.",source:"@site/docs/reference/request-lifecycle.md",permalink:"/docs/reference/request-lifecycle",lastUpdatedBy:"Oskang09",lastUpdatedAt:1594980638},i=[],u={rightToc:i};function s(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Basically a request firstly will come to Transport. Transport will do the basic handling to construct a ",Object(a.b)("inlineCode",{parentName:"p"},"oscrud.Request")," and only bring request to ",Object(a.b)("inlineCode",{parentName:"p"},"oscrud"),". "),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Transport")),Object(a.b)("p",null,"Usually process incoming request and construct request for pass to handler."),Object(a.b)("ol",{start:2},Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Start Request Logger")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},"Timeout Handler"))),Object(a.b)("p",null,"Construct timeout handler & run handler using go-routine. When timeout reach will just return timeout error."),Object(a.b)("ol",{start:4},Object(a.b)("li",{parentName:"ol"},"Oscrud")),Object(a.b)("p",null,"Lookup route, if exists construct middleware handler & main handler which required for the route."),Object(a.b)("ol",{start:5},Object(a.b)("li",{parentName:"ol"},"Before Middleware Handler"),Object(a.b)("li",{parentName:"ol"},"Main Handler"),Object(a.b)("li",{parentName:"ol"},"After Middleware Handler"),Object(a.b)("li",{parentName:"ol"},"Event onComplete()"),Object(a.b)("li",{parentName:"ol"},"End Request Logger")))}s.isMDXComponent=!0},194:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return f}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=o.a.createContext({}),s=function(e){var t=o.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=s(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=s(r),d=n,f=p["".concat(c,".").concat(d)]||p[d]||b[d]||a;return r?o.a.createElement(f,l(l({ref:t},u),{},{components:r})):o.a.createElement(f,l({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,c=new Array(a);c[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,c[1]=l;for(var u=2;u<a;u++)c[u]=r[u];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);