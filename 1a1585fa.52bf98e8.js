(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{138:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"rightToc",(function(){return s})),t.d(n,"default",(function(){return u}));var r=t(2),a=t(9),o=(t(0),t(194)),i={title:"Another Golang Framework - Oscrud",author:"Oska Ng",author_title:"Maintainer of Oscrud",author_image_url:"https://avatars3.githubusercontent.com/u/15674107?s=400&u=1a548a4df62740cde8c27ad823a3c5851b6b6984&v=4",author_url:"https://github.com/Oskang09",tags:["oscrud"]},c={permalink:"/blog/2020/07/28/20200608-another-golang-framework-oscrud",source:"@site/blog/20200608-another-golang-framework-oscrud.md",description:"Oscrud is a golang resftul api wrapper framework. The purpose of the framework is make everything independent like transport, authentication, middleware and parser. So we can change the component to what we want anytime without changing code. This framework is inspired from FeathersJS. Mainly the framework is able to work with different library & services. Most of the part can be customizable are transports, service, logger, binder and option for now.",date:"2020-07-28T05:32:21.621Z",tags:[{label:"oscrud",permalink:"/blog/tags/oscrud"}],title:"Another Golang Framework - Oscrud",readingTime:6.77,truncated:!1},s=[{value:"Table Of Contents",id:"table-of-contents",children:[{value:"Transport",id:"transport",children:[]},{value:"Service",id:"service",children:[]},{value:"Logger",id:"logger",children:[]},{value:"Binder",id:"binder",children:[]},{value:"Options",id:"options",children:[]}]}],l={rightToc:s};function u(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Oscrud is a golang resftul api wrapper framework. The purpose of the framework is make everything independent like transport, authentication, middleware and parser. So we can change the component to what we want anytime without changing code. This framework is inspired from ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://feathersjs.com/"}),"FeathersJS"),". Mainly the framework is able to work with different library & services. Most of the part can be customizable are transports, service, logger, binder and option for now."),Object(o.b)("h2",{id:"table-of-contents"},"Table Of Contents"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"#transport"}),"Transport")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"#service"}),"Service")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"#logger"}),"Logger")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"#binder"}),"Binder")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"#options"}),"Options"))),Object(o.b)("h3",{id:"transport"},"Transport"),Object(o.b)("p",null,"Transport part in oscrud is about the way for framework receiving request and response to request like http and websockets. Currently only support ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/oscrud/echo"}),"Echo")," which done by myself. Transport is an interface, its have only three method that must implement. ",Object(o.b)("inlineCode",{parentName:"p"},"Name()")," to declare transport name to whether know the request come from which transport. ",Object(o.b)("inlineCode",{parentName:"p"},"Register()")," will called everytime register endpoint have been called at core struct. ",Object(o.b)("inlineCode",{parentName:"p"},"Start()")," will just been called once when core struct have fired start."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-go"}),'type Transport struct {}\n\nfunc (t *Transport) Name() string {\n    return "TransportName"\n}\n\nfunc (t *Transport) Register(method string, endpoint string, handler oscrud.TransportHandler) {\n    // Every endpoint registration will call this method.\n}\n\nfunc (t *Transport) Start() error {\n    // Transport start receiving request\n}\n')),Object(o.b)("h3",{id:"service"},"Service"),Object(o.b)("p",null,"Service part in oscrud is expect to be support ORM and expose CRUD endpoints with a single model definition. Service by default come with 6 actions following ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Create,_read,_update_and_delete"}),"CRUD")," standard. Currently customizing a service may required some basic knowledge on ",Object(o.b)("inlineCode",{parentName:"p"},"reflect")," package, but we trying to minimize usage of ",Object(o.b)("inlineCode",{parentName:"p"},"reflect")," when creating own services and we also only supported one of the ORM only for now ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/oscrud/sqlike"}),"Sqlike"),". Here the list of endpoint will be registered."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{}),"GET /basePath - Service.Find\nPOST /basePath - Service.Create\nGET /basePath/:$id - Service.Get\nPUT /basePath/:$id - Service.Update\nPATCH /basePath/:$id - Service.Patch\nDELETE /basePath/:$id - Service.Delete\n")),Object(o.b)("p",null,"For creating own service, must implement the interface have been defined in ",Object(o.b)("inlineCode",{parentName:"p"},"oscrud"),". And there also come with 2 built in ",Object(o.b)("inlineCode",{parentName:"p"},"Query")," objects, ",Object(o.b)("inlineCode",{parentName:"p"},"oscrud.Query")," and ",Object(o.b)("inlineCode",{parentName:"p"},"oscrud.QueryOne")," for bind data from requests and standardize query naming for all services. Example of built-in query for ",Object(o.b)("inlineCode",{parentName:"p"},"oscrud.QueryOne")," is just ",Object(o.b)("inlineCode",{parentName:"p"},"$select")," for ORM to know selecting which field only. And ",Object(o.b)("inlineCode",{parentName:"p"},"oscrud.Query")," have ",Object(o.b)("inlineCode",{parentName:"p"},"$select"),", ",Object(o.b)("inlineCode",{parentName:"p"},"$order")," to defined ascending or descending, and some pagination keyword ( ",Object(o.b)("inlineCode",{parentName:"p"},"$cursor"),", ",Object(o.b)("inlineCode",{parentName:"p"},"$offset"),", ",Object(o.b)("inlineCode",{parentName:"p"},"$page"),", ",Object(o.b)("inlineCode",{parentName:"p"},"$limit")," )."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-go"}),"type Service struct {}\nfunc (service Service) Create(ctx oscrud.Context) oscrud.Context {\n    // Createing data\n}\n\nfunc (service Service) Find(ctx oscrud.Context) oscrud.Context {\n    // List data\n}\n\nfunc (service Service) Get(ctx oscrud.Context) oscrud.Context {\n    // Get data ( should be one result always )\n}\n\nfunc (service Service) Update(ctx oscrud.Context) oscrud.Context {\n    // update data\n}\n\nfunc (service Service) Patch(ctx oscrud.Context) oscrud.Context {\n    // patch data\n}\n\nfunc (service Service) Delete(ctx oscrud.Context) oscrud.Context {\n    // delete data\n}\n")),Object(o.b)("p",null,"For work with the service, need a service model. Service Model is a struct usually will be a table in database. So when work with service, we can use method to filter result or returning data even prevent toxic data injection. $id tag will automatically assign input value from endpoint, such as GET /test/:$id for a Get action."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-go"}),'// User :\ntype User struct {\n    Key  *types.Key `json:"-"`\n    ID   string     `json:"id" qm:"$id" sqlike:"-"`\n    Name string     `json:"name"`\n}\n\n// ToCreate :\nfunc (user *User) ToCreate() (interface{}, error) {\n    user.Key = types.NewIDKey("User", nil)\n    user.Name += "-" + util.RandomString(6)\n    if len(user.Name) > 20 {\n        return nil, errors.New("username have a maximum length 20")\n    }\n    return user, nil\n}\n\n// ToResult :\nfunc (user *User) ToResult() (interface{}, error) {\n    if user.Key != nil {\n        user.ID = user.Key.ID()\n    }\n\n    return user, nil\n}\n\n// ToQuery :\nfunc (user *User) ToQuery() (interface{}, error) {\n    if user.ID != "" {\n        return expr.Equal("Key", "User,"+user.ID), nil\n    }\n\n    var query interface{}\n    if user.Name != "" {\n        query = expr.Equal("Name", user.Name)\n    }\n    return query, nil\n}\n\n// ToPatch :\nfunc (user *User) ToPatch(incoming oscrud.ServiceModel) (interface{}, error) {\n    incomingUser := incoming.(*User)\n    user.Name = incomingUser.Name\n    return user, nil\n}\n\n// ToUpdate :\nfunc (user *User) ToUpdate(incoming oscrud.ServiceModel) (interface{}, error) {\n    incomingUser := incoming.(*User)\n    user.Name = incomingUser.Name\n    return user, nil\n}\n\n// ToDelete :\nfunc (user *User) ToDelete() (interface{}, error) {\n    return user, nil\n}\n')),Object(o.b)("h3",{id:"logger"},"Logger"),Object(o.b)("p",null,"Logger is an important part for every library, framework to track down any issues or bug in the code. So logger will be track down when incoming request & outgoing response, also when doing API user can also log down the operation, content with the core struct. All of the logger method will run in goroutine to prevent slowing down when processing request."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-go"}),'// Logger :\ntype Logger struct {}\n\n// Log :\nfunc (l Logger) Log(operation string, content string) {\n    log.Println("Operation - ", operation)\n    log.Println("Content - ", content)\n}\n\n// StartRequest :\nfunc (l Logger) StartRequest(ctx oscrud.Context) {\n    log.Println("**************************************")\n    log.Println("RequestID - ", ctx.RequestID())\n    log.Println("Method - ", ctx.Method())\n    log.Println("Path - ", ctx.Path())\n    log.Println("State - ", ctx.State())\n    log.Println("Header - ", ctx.Headers())\n    log.Println("Query - ", ctx.Query())\n    log.Println("Body - ", ctx.Body())\n    log.Println("**************************************")\n}\n\n// EndRequest :\nfunc (l Logger) EndRequest(ctx oscrud.Context) {\n    log.Println("**************************************")\n    log.Println("RequestID - ", ctx.RequestID())\n    log.Println("Method - ", ctx.Method())\n    log.Println("Path - ", ctx.Path())\n    log.Println("State - ", ctx.State())\n    log.Println("Header - ", ctx.Headers())\n    log.Println("Query - ", ctx.Query())\n    log.Println("Body - ", ctx.Body())\n    log.Println("**************************************")\n}\n\nfunc main() {\n    server := oscrud.NewOscrud()\n    server.RegisterLogger(Logger{})\n    server.Log("Action", "Content")\n}\n')),Object(o.b)("h3",{id:"binder"},"Binder"),Object(o.b)("p",null,"Binder is a serialize & deserialize library to easily customize serialize / deserialize from Type A to Type B. Binder will be default binder for oscrud framework but you can make your own binder also ( but not recommended ). Every type have default binding method included primitive types, slice, array and struct. By default, primitive types will convert to string and ",Object(o.b)("inlineCode",{parentName:"p"},"reflect.Set()")," to field. For slice, struct, array will be check ",Object(o.b)("inlineCode",{parentName:"p"},"assignableTo")," only ",Object(o.b)("inlineCode",{parentName:"p"},"reflect.Set()")," to field. You can still customize all of the binder method, registered method will have higher priority than default method. This binder is another package under Oscrud also so you can use it standalone without the framework. ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/oscrud/binder"}),"Oscrud Binder")),Object(o.b)("p",null,"With Default Method ( for primitive types only )"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-go"}),'package main\n\nimport (\n    "log"\n    "github.com/oscrud/oscrud-binder"\n)\n\nfunc main() {\n    binder := binder.NewBinder()\n    \n    var data int32\n    \n    if err := binder.Bind(&data, "30"); err != nil {\n        log.Println(err)\n    }\n    log.Println(data) // 30\n\n    if err := binder.Bind(&data, int64(10)); err != nil {\n        log.Println(err)\n    }\n    log.Println(data) // 10\n\n    if err := binder.Bind(&data, "20.5"); err != nil {\n        log.Println(err) // trying to convert 20.5 to int32\n    }\n}\n')),Object(o.b)("p",null,"With Custom Method ( Registered to Binder before use )"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-go"}),'package main\n\nimport (\n    "log"\n    "fmt"\n    "github.com/oscrud/oscrud-binder"\n)\n\ntype AnyStruct struct {\n    Data string\n}\n\nfunc main() {\n    binder := binder.NewBinder()\n    \n    // register from string to AnyStruct\n    binder.Register(string(""), AnyStruct{}, func(raw interface{}) (interface{}, error) {\n        return AnyStruct{fmt.Sprintf(raw)}\n    })\n\n    // register from AnyStruct to string\n    // without this will will parse automatically with fmt.Sprintf("%v", raw)\n    binder.Register(AnyStruct{}, string(""), func(raw interface{}) (interface{}, error) {\n        strct := raw.(AnyStruct)\n        return strct.Data\n    })\n\n    strct := new(AnyStruct)\n    if err := binder.Bind(&strct, "will set to data"); err != nil {\n        log.Println(err)\n    }\n    log.Println(strct.Data) // will set to data\n\n    var str string\n    if err := binder.Bind(&str, strct); err != nil {\n        log.Println(err)\n    }\n    log.Println(str) // will set to data\n\n    if err := binder.Bind(&strct, 10); err != nil {\n        log.Println(err) // Trying to convert 10 to struct AnyStruct\n    }\n}\n')),Object(o.b)("h3",{id:"options"},"Options"),Object(o.b)("p",null,"Options will be like middleware at other framework. Currently only supported ",Object(o.b)("inlineCode",{parentName:"p"},"TimeoutOptions"),", ",Object(o.b)("inlineCode",{parentName:"p"},"EventOptions")," and ",Object(o.b)("inlineCode",{parentName:"p"},"MiddlewareOption"),". It can be under server level or endpoint level."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-go"}),'package oscrud\n\nserver := oscrud.NewOscrud()\nmiddleware := oscrud.MiddlewareOptions{\n    Before: []oscrud.Handler{\n        func(ctx oscrud.Context) oscrud.Context {\n            log.Println("I\'m Before Middleware")\n            return ctx\n        }\n    },\n}\nevent := oscrud.EventOptions{\n    OnComplete: func(ctx oscrud.Context) {\n        log.Println("This running from go-routine as event-drive OnComplete().")\n    },\n}\n\n// You can just apply all in one line.\nserver.UseOptions(middleware, event)\n\n// Also work with endpoint only\nserver.RegisterEndpoint("GET", "/test", func(ctx oscrud.Context) oscrud.Context {\n        return ctx.String(200, "Hello World").End()\n}, middleware, event)\n')),Object(o.b)("p",null,"Lastly, this framework is still under development so not suggested to use in production. There also come with an ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/oscrud/example"}),"example")," about all current features and ",Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/oscrud/oscrud"}),"documentation")," is under main repository will be expose soon with the github templates. Any suggestions would be greatly appreciated. "))}u.isMDXComponent=!0},194:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return g}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=a.a.createContext({}),u=function(e){var n=a.a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},d=function(e){var n=u(e.components);return a.a.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},b=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(t),b=r,g=d["".concat(i,".").concat(b)]||d[b]||p[b]||o;return t?a.a.createElement(g,c(c({ref:n},l),{},{components:t})):a.a.createElement(g,c({ref:n},l))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=b;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=t[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);