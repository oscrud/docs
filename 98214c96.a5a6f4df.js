(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{174:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(2),o=n(9),a=(n(0),n(209)),c={title:"Getting Started",sidebar_label:"Getting Started",keywords:["documentation","oscrud","getting start","example"],description:"getting start and example of oscrud server"},i={id:"getting-start",isDocsHomePage:!1,title:"Getting Started",description:"getting start and example of oscrud server",source:"@site/docs/getting-start.md",permalink:"/docs/getting-start",lastUpdatedBy:"Oskang09",lastUpdatedAt:1598346779,sidebar_label:"Getting Started",sidebar:"defaultSidebar",previous:{title:"Introduction",permalink:"/docs/introduction"},next:{title:"Overview",permalink:"/docs/server/overview"}},l=[],s={rightToc:l};function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"If you doesn't have ",Object(a.b)("em",{parentName:"p"},"Go")," installed on your pc. You can get it ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://golang.org/doc/install"}),"here"),"."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{}),"$ go get -u github.com/oscrud/oscrud\n")),Object(a.b)("p",null,"After complete installation, you can Go with your beloved framework and here an hello world example. You can choose your own transport from lists, currently only supported Echo. For future will implement ",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/hashicorp/mdns"}),"service discovery")," by default."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-go"}),'package oscrud\n\nimport (\n    "github.com/oscrud/oscrud"\n)\n\nfunc main() {\n    server := oscrud.NewOscrud()\n    server.RegisterTransport(e.NewEcho(echo.New()).UsePort(3000))\n    server.RegisterEndpoint("GET", "/test", func(ctx *oscrud.Context) *oscrud.Context {\n        return ctx.String(200, "Hello World").End()\n    })\n    server.Start()\n}\n\n$ curl -v localhost:3000/test\n\n> GET /test HTTP/1.1\n> Host: localhost:3000\n> User-Agent: curl/7.58.0\n> Accept: */*\n> \n< HTTP/1.1 200 OK\n< Content-Type: text/plain; charset=UTF-8\n< Date: Fri, 31 Jan 2020 16:04:49 GMT\n< Content-Length: 11\n< \n* Connection #0 to host localhost left intact\nHello World\n')))}u.isMDXComponent=!0},209:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),u=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(n),b=r,f=p["".concat(c,".").concat(b)]||p[b]||d[b]||a;return n?o.a.createElement(f,i(i({ref:t},s),{},{components:n})):o.a.createElement(f,i({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=b;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var s=2;s<a;s++)c[s]=n[s];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);