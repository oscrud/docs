(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{203:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return c})),t.d(r,"metadata",(function(){return o})),t.d(r,"rightToc",(function(){return i})),t.d(r,"default",(function(){return u}));var n=t(2),a=t(9),l=(t(0),t(210)),c={title:"GraphQL Handler",sidebar_label:"GraphQL Handler",keywords:["documentation","oscrud","graphql","handler","third party"],description:"graphql handler for oscrud handler"},o={id:"package/general/graphql-handler",isDocsHomePage:!1,title:"GraphQL Handler",description:"graphql handler for oscrud handler",source:"@site/docs/package/general/graphql-handler.md",permalink:"/docs/package/general/graphql-handler",lastUpdatedBy:"Oskang09",lastUpdatedAt:1599024591,sidebar_label:"GraphQL Handler",sidebar:"defaultSidebar",previous:{title:"Request Lifecycle",permalink:"/docs/reference/request-lifecycle"},next:{title:"Overview",permalink:"/docs/package/service/postgres/overview"}},i=[{value:"Usage",id:"usage",children:[]},{value:"Installation",id:"installation",children:[]},{value:"Example",id:"example",children:[]}],p={rightToc:i};function u(e){var r=e.components,t=Object(a.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},p,t,{components:r,mdxType:"MDXLayout"}),Object(l.b)("p",null,"graphQL handler for oscrud and build using ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/graphql-go/graphql"}),"graphql-go"),"."),Object(l.b)("h3",{id:"usage"},"Usage"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Method"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Usage"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Handler(schema, options...) *Handler"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Default constructor for initialization")))),Object(l.b)("h3",{id:"installation"},"Installation"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{}),"$ go get github.com/oscrud/graphql-handler\n")),Object(l.b)("h3",{id:"example"},"Example"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-go"}),'package main\n\nimport (\n    graphql "github.com/graphql-go/graphql"\n    gh "github.com/oscrud/graphql-handler"\n)\n\nfunc main() {\n    schema := // graphql schema\n    server := oscrud.NewServer()\n    server.RegisterEndpoint("GET", "/graphql", gh.Handler(schema))\n    server.Start()\n}\n\n')))}u.isMDXComponent=!0},210:function(e,r,t){"use strict";t.d(r,"a",(function(){return d})),t.d(r,"b",(function(){return g}));var n=t(0),a=t.n(n);function l(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){l(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=a.a.createContext({}),u=function(e){var r=a.a.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},d=function(e){var r=u(e.components);return a.a.createElement(p.Provider,{value:r},e.children)},b={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},s=a.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,l=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(t),s=n,g=d["".concat(c,".").concat(s)]||d[s]||b[s]||l;return t?a.a.createElement(g,o(o({ref:r},p),{},{components:t})):a.a.createElement(g,o({ref:r},p))}));function g(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var l=t.length,c=new Array(l);c[0]=s;var o={};for(var i in r)hasOwnProperty.call(r,i)&&(o[i]=r[i]);o.originalType=e,o.mdxType="string"==typeof e?e:n,c[1]=o;for(var p=2;p<l;p++)c[p]=t[p];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,t)}s.displayName="MDXCreateElement"}}]);