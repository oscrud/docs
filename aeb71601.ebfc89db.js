(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{176:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return o})),r.d(n,"metadata",(function(){return c})),r.d(n,"rightToc",(function(){return l})),r.d(n,"default",(function(){return s}));var t=r(2),i=r(9),a=(r(0),r(194)),o={title:"Registering New Binder"},c={id:"binder/register-new-binder",isDocsHomePage:!1,title:"Registering New Binder",description:"Registering new binder for sepcific type ( struct, array or slice ), primitive not supported yet.",source:"@site/docs/binder/register-new-binder.md",permalink:"/docs/docs/binder/register-new-binder",lastUpdatedBy:"Oskang09",lastUpdatedAt:1594980638},l=[],p={rightToc:l};function s(e){var n=e.components,r=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(t.a)({},p,r,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Registering new binder for sepcific type ( struct, array or slice ), primitive not supported yet. "),Object(a.b)("pre",null,Object(a.b)("code",Object(t.a)({parentName:"pre"},{className:"language-go"}),'type Example struct {\n    Line1 string\n    Line2 string\n}\n\nfunc main() {\n    // You use binder independently also\n    binder := oscrud.NewBinder()\n    binder.Register(new(Example), func(raw interface{}) (interface{}, error) {\n        str := fmt.Sprintf("%v", raw)\n        if strings.Contains(raw, ",") { \n            split := strings.Split(raw, ",")\n            return Example{raw[0], raw[1]}, nil\n        }\n        return nil, fmt.Errorf("Invalid data "%v" for deserialize to Example", raw)\n    })\n\n    example := new(Example)\n    err := binder.Bind(&example, "line1,line2")\n    log.Println(example, err) // { line1, line2 }, <nil>\n\n\n    err := binder.Bind(&example, "line1-line2")\n    log.Println(example, err) // nil, "Invalid data line-line2 for deserialize to Example"\n}\n')))}s.isMDXComponent=!0},194:function(e,n,r){"use strict";r.d(n,"a",(function(){return u})),r.d(n,"b",(function(){return m}));var t=r(0),i=r.n(t);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=i.a.createContext({}),s=function(e){var n=i.a.useContext(p),r=n;return e&&(r="function"==typeof e?e(n):c(c({},n),e)),r},u=function(e){var n=s(e.components);return i.a.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},f=i.a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,a=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(r),f=t,m=u["".concat(o,".").concat(f)]||u[f]||d[f]||a;return r?i.a.createElement(m,c(c({ref:n},p),{},{components:r})):i.a.createElement(m,c({ref:n},p))}));function m(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var a=r.length,o=new Array(a);o[0]=f;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:t,o[1]=c;for(var p=2;p<a;p++)o[p]=r[p];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);