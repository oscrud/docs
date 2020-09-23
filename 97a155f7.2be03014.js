(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{174:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return c})),t.d(r,"metadata",(function(){return a})),t.d(r,"rightToc",(function(){return i})),t.d(r,"default",(function(){return u}));var n=t(2),o=t(9),s=(t(0),t(210)),c={title:"Customize Response",sidebar_label:"Customize Response",keywords:["documentation","oscrud","service","postgres"],description:"oscrud go-pg service customize response"},a={id:"package/service/postgres/custom-response",isDocsHomePage:!1,title:"Customize Response",description:"oscrud go-pg service customize response",source:"@site/docs/package/service/postgres/custom-response.md",permalink:"/docs/package/service/postgres/custom-response",lastUpdatedBy:"Oskang09",lastUpdatedAt:1598346779,sidebar_label:"Customize Response",sidebar:"defaultSidebar",previous:{title:"Pagination Setting",permalink:"/docs/package/service/postgres/pagination"},next:{title:"Override Primary Key",permalink:"/docs/package/service/postgres/override-pk"}},i=[{value:"Example",id:"example",children:[]}],p={rightToc:i};function u(e){var r=e.components,t=Object(o.a)(e,["components"]);return Object(s.b)("wrapper",Object(n.a)({},p,t,{components:r,mdxType:"MDXLayout"}),Object(s.b)("p",null,"customizing response will be just easy by passing a function. return will under your control so you need return using context ",Object(s.b)("inlineCode",{parentName:"p"},"ctx"),"."),Object(s.b)("h3",{id:"example"},"Example"),Object(s.b)("pre",null,Object(s.b)("code",Object(n.a)({parentName:"pre"},{className:"language-go"}),'package main\n\nimport (\n    "github.com/go-pg/pg"\n    "github.com/go-pg/pg/orm"\n    "github.com/oscrud/oscrud"\n    "github.com/oscrud/postgres"\n)\n\nfunc main() {\n    db := // go-pg database client\n    model := // oscrud service model\n    server := oscrud.NewOscrud()\n    \n    pg := postgres.New()\n    pg.UseCustomResponse(customResponse)\n\n    // Service Definition\n    server.RegisterService("/user", pg.ToService(db, model), new(oscrud.ServiceOptions))\n\n    // Everything done? Start the server.\n    server.Start()\n}\n\nfunc customResponse(ctx *oscrud.Context, result *postgres.ServiceResult, err error) *oscrud.Context {\n    if err != nil {\n        return ctx.Error(http.StatusBadRequest, err)\n    }\n    return ctx.JSON(http.StatusOK, result)\n}\n')))}u.isMDXComponent=!0},210:function(e,r,t){"use strict";t.d(r,"a",(function(){return l})),t.d(r,"b",(function(){return g}));var n=t(0),o=t.n(n);function s(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){s(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=o.a.createContext({}),u=function(e){var r=o.a.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},l=function(e){var r=u(e.components);return o.a.createElement(p.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},m=o.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,s=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),l=u(t),m=n,g=l["".concat(c,".").concat(m)]||l[m]||d[m]||s;return t?o.a.createElement(g,a(a({ref:r},p),{},{components:t})):o.a.createElement(g,a({ref:r},p))}));function g(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var s=t.length,c=new Array(s);c[0]=m;var a={};for(var i in r)hasOwnProperty.call(r,i)&&(a[i]=r[i]);a.originalType=e,a.mdxType="string"==typeof e?e:n,c[1]=a;for(var p=2;p<s;p++)c[p]=t[p];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);