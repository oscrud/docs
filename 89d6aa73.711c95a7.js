(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{167:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return s}));var n=r(2),a=r(9),o=(r(0),r(194)),c={title:"Defining Data Model"},i={id:"service/data-model",isDocsHomePage:!1,title:"Defining Data Model",description:"Service model is a model struct usually will be a table from database. Service model must have implmenet method from oscrud.DataModel. So when creating own service, we can use method to filter result or returning data even prevent toxic data injection. $id tag will automatically assign input value from endpoint, such as GET /test/:$id for a Get action.",source:"@site/docs/service/data-model.md",permalink:"/docs/service/data-model",lastUpdatedBy:"Oskang09",lastUpdatedAt:1594980638},l=[],u={rightToc:l};function s(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Service model is a model struct usually will be a table from database. Service model must have implmenet method from ",Object(o.b)("inlineCode",{parentName:"p"},"oscrud.DataModel"),". So when creating own service, we can use method to filter result or returning data even prevent toxic data injection. ",Object(o.b)("inlineCode",{parentName:"p"},"$id")," tag will automatically assign input value from endpoint, such as ",Object(o.b)("inlineCode",{parentName:"p"},"GET /test/:$id")," for a ",Object(o.b)("inlineCode",{parentName:"p"},"Get")," action."),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Method"),Object(o.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Usage"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ToQuery() (interface{}, error)"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"For returning query syntax based on service requirement, for sqlike is expr cosntruct from their query builder.")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ToUpdate(ServiceModel) (interface{}, error)"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"For construct model and return for update")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ToPatch(ServiceModel) (interface{}, error)"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"For construct model and return for patch")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ToCreate() (interface{}, error)"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"For construct model and return for create")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ToResult() (interface{}, error)"),Object(o.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"For construct model and return for find / get")))),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-go"}),'// User :\ntype User struct {\n    Key  *types.Key `json:"-"`\n    ID   string     `json:"id" qm:"$id" sqlike:"-"`\n    Name string     `json:"name"`\n}\n\n// ToCreate :\nfunc (user *User) ToCreate() (interface{}, error) {\n    user.Key = types.NewIDKey("User", nil)\n    user.Name += "-" + util.RandomString(6)\n    if len(user.Name) > 20 {\n        return nil, errors.New("username have a maximum length 20")\n    }\n    return user, nil\n}\n\n// ToResult :\nfunc (user *User) ToResult() (interface{}, error) {\n    if user.Key != nil {\n        user.ID = user.Key.ID()\n    }\n\n    return user, nil\n}\n\n// ToQuery :\nfunc (user *User) ToQuery() (interface{}, error) {\n    if user.ID != "" {\n        return expr.Equal("Key", "User,"+user.ID), nil\n    }\n\n    var query interface{}\n    if user.Name != "" {\n        query = expr.Equal("Name", user.Name)\n    }\n    return query, nil\n}\n\n// ToPatch :\nfunc (user *User) ToPatch(incoming oscrud.ServiceModel) (interface{}, error) {\n    incomingUser := incoming.(*User)\n    user.Name = incomingUser.Name\n    return user, nil\n}\n\n// ToUpdate :\nfunc (user *User) ToUpdate(incoming oscrud.ServiceModel) (interface{}, error) {\n    incomingUser := incoming.(*User)\n    user.Name = incomingUser.Name\n    return user, nil\n}\n\n// ToDelete :\nfunc (user *User) ToDelete() (interface{}, error) {\n    return user, nil\n}\n')))}s.isMDXComponent=!0},194:function(e,t,r){"use strict";r.d(t,"a",(function(){return m})),r.d(t,"b",(function(){return p}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=a.a.createContext({}),s=function(e){var t=a.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},m=function(e){var t=s(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=s(r),d=n,p=m["".concat(c,".").concat(d)]||m[d]||b[d]||o;return r?a.a.createElement(p,i(i({ref:t},u),{},{components:r})):a.a.createElement(p,i({ref:t},u))}));function p(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var u=2;u<o;u++)c[u]=r[u];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);