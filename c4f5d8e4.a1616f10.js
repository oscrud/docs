(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{207:function(e,n,t){"use strict";t.r(n);var a=t(2),r=t(0),i=t.n(r),l=t(233),o=t.n(l),c=t(216),u=t(299),s=t(300),m=t(211),d=t(214),p=t(210),g=t(554),E=t(552);var v=function(e){var n=e.snippet;return i.a.createElement(g.a,{language:"go",style:E.a,showLineNumbers:!0},n)},f=t(193),x=t.n(f),b=[{label:"Handler",code:'package main\n\nimport (\n    "github.com/oscrud/oscrud"\n)\n\nfunc Example(ctx *oscrud.Context) *oscrud.Context {\n    return ctx.String(200, "Example Handler")\n}\n\nfunc main() {\n    server := oscrud.NewOscrud()\n    server.RegisterEndpoint("GET", "/example", Example)\n    \n    group := server.Group("/v1")\n    group.RegisterEndpoint("GET", "/example", Example) // registered at /v1/example\n    server.Start()\n}'},{label:"Data Binding",code:'package main\n\nimport (\n    "github.com/oscrud/oscrud"\n)\n\nfunc Example(ctx *oscrud.Context) *oscrud.Context {\n    var i struct {\n        Data string `json:"data"`\n        Data2 string `oscrud:"data2"`\n    }\n\n    if err := ctx.BindAll(&i); err != nil {\n        return ctx.Error(400, err)\n    }\n    return ctx.String(200, "Example Handler")\n}\n\nfunc main() {\n    server := oscrud.NewOscrud()\n    server.RegisterEndpoint("GET", "/example", Example)\n    server.Start()\n}'},{label:"Custom Binder",code:'package main\n\nimport (\n    "github.com/oscrud/oscrud"\n)\n\nfunc main() {\n    server := oscrud.NewOscrud()\n    server.RegisterBinder(\n        string(""),\n        time.Time{},\n        func(raw interface{}) (interface{}, error) {\n            text := raw.(string)\n            return time.Parse("2006-01-02", text)\n        },\n    )\n}'},{label:"Service Model",code:'// User :\ntype User struct {\n    ID   int    `json:"id" oscrud:"id"`\n    Name string `json:"name"`\n}\n\n// ToCreate :\nfunc (user *User) ToCreate(ctx *oscrud.Context) error {\n    if len(user.Name) > 20 {\n        return errors.New("username have a maximum length 20")\n    }\n    return nil\n}\n\n// ToResult :\nfunc (user *User) ToResult(ctx *oscrud.Context, action oscrud.ServiceAction) (interface{}, error) {\n    return user, nil\n}\n\n// ToQuery :\nfunc (user *User) ToQuery(ctx *oscrud.Context, action oscrud.ServiceAction) (interface{}, error) {\n    return user, nil\n}\n\n// ToPatch :\nfunc (user *User) ToPatch(ctx *oscrud.Context, incoming oscrud.ServiceModel) error {\n    incomingUser := incoming.(*User)\n    user.Name = incomingUser.Name\n    return nil\n}\n\n// ToUpdate :\nfunc (user *User) ToUpdate(ctx *oscrud.Context, incoming oscrud.ServiceModel) error {\n    incomingUser := incoming.(*User)\n    user.Name = incomingUser.Name\n    return nil\n}\n\n// ToDelete :\nfunc (user *User) ToDelete(ctx *oscrud.Context) error {\n    return nil\n}'}],N=[{title:i.a.createElement(i.a.Fragment,null,"Lorem Ipsum"),imageUrl:"image/favicon.png",description:i.a.createElement(i.a.Fragment,null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")},{title:i.a.createElement(i.a.Fragment,null,"Lorem Ipsum"),imageUrl:"image/favicon.png",description:i.a.createElement(i.a.Fragment,null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")},{title:i.a.createElement(i.a.Fragment,null,"Lorem Ipsum"),imageUrl:"image/favicon.png",description:i.a.createElement(i.a.Fragment,null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")},{title:i.a.createElement(i.a.Fragment,null,"Lorem Ipsum"),imageUrl:"image/favicon.png",description:i.a.createElement(i.a.Fragment,null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")}];function h(e){var n=e.imageUrl,t=e.title,a=e.description,r=Object(d.a)(n);return i.a.createElement("div",{className:o()("col col--6",x.a.feature)},r&&i.a.createElement("div",{className:"text--center"},i.a.createElement("img",{className:o()("padding-vert--md",x.a.featureImage),src:r,alt:t})),i.a.createElement("h3",null,t),i.a.createElement("p",null,a))}n.default=function(){var e=Object(p.a)().siteConfig,n=[i.a.createElement(i.a.Fragment,null,"Centralized core and shared across components."),i.a.createElement(i.a.Fragment,null,"Easy binding incoming data with single tag."),i.a.createElement(i.a.Fragment,null,"Custom type binding ",i.a.createElement(m.a,{to:Object(d.a)("docs/binder/overview")},"Binder")," and able to use independently."),i.a.createElement(i.a.Fragment,null,"Multiple ",i.a.createElement(m.a,{to:Object(d.a)("docs/transport/overview")},"Transport")," in single oscrud."),i.a.createElement(i.a.Fragment,null,"Register multiple endpoint at once in ",i.a.createElement(m.a,{to:Object(d.a)("docs/service/overview")},"Service"),"."),i.a.createElement(i.a.Fragment,null,"Easy extensible Transport, Handler, Options and Service."),i.a.createElement(i.a.Fragment,null,"Easy logging in everywhere with core."),i.a.createElement(i.a.Fragment,null,"Lots of third party library supported.")];return i.a.createElement(c.a,{title:"Oscrud | Golang Restful API Wrappper",description:"golang resftul api wrapper framework",keywords:["oscrud","golang","framework"]},i.a.createElement("header",{className:o()("hero",x.a.heroBanner)},i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:o()("col col--5 col--offset-1")},i.a.createElement("h1",{className:"hero__title"},e.title),i.a.createElement("p",{className:"hero__subtitle"},e.tagline),i.a.createElement("div",{className:x.a.buttons+" "+x.a.buttonDiv},i.a.createElement(m.a,{className:o()("button button--outline button--secondary button--lg",x.a.getStarted),to:Object(d.a)("docs/introduction")},"Get Started"))),i.a.createElement("div",{className:o()("col col--5")},i.a.createElement("img",{className:x.a.heroImg,src:"image/favicon.png"}))))),i.a.createElement("main",null,i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:o()(x.a.pitch+" col col--6")},i.a.createElement("h2",null,"A wrapper framework, plug and play, more customization"),i.a.createElement("p",null,"Main Features:"),i.a.createElement("ul",null,n.map((function(e){return i.a.createElement("li",null,e)})))),i.a.createElement("div",{className:o()("col col--6")},b&&b.length&&i.a.createElement("section",{className:x.a.configSnippets},i.a.createElement(u.a,{defaultValue:b[0].label,values:b.map((function(e){return{label:e.label,value:e.label}}))},b.map((function(e,n){return i.a.createElement(s.a,{key:n,value:e.label},i.a.createElement(v,{snippet:e.code}))}))))),N&&N.length&&i.a.createElement("section",{className:x.a.features},i.a.createElement("div",{className:"container margin-vert--md"},i.a.createElement("div",{className:"row"},N.map((function(e,n){return i.a.createElement(h,Object(a.a)({key:n},e))})))))))))}}}]);