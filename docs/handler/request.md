---
title: Request Context
sidebar_label: Request Context
keywords:
- documentation
- oscrud
- handler
- request
description: oscrud request context object
---

| Method                                      | Description                                                                                                                                            |
| ------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Method() string                             | Return request method, default to be smaller case `get`, `post`.                                                                                       |
| Get(key string) interface{}                 | Get value by key from  `param`, `query`, `body`, `header`, order respectively.                                                                         |
| GetState(key string) interface{}            | Get request level state by key if not exists will fallback server state                                                                                |
| Context() context.Context                   | Get request context                                                                                                                                    |
| Transport() TransportID                     | Get transport name                                                                                                                                     |
| Path() string                               | Return request path                                                                                                                                    |
| Host() string                               | Return request host                                                                                                                                    |
| RequestID() string                          | Return request id                                                                                                                                      |
| State() map[string]interface{}              | Return request state                                                                                                                                   |
| Headers() map[string]string                 | Return request headers                                                                                                                                 |
| Query() map[string]interface{}              | Return request queries                                                                                                                                 |
| Params() map[string]string                  | Return request params                                                                                                                                  |
| Body() map[string]interface{}               | Return request body                                                                                                                                    |
| Bind(src interface{}) error                 | Bind data from `map` specify by `reflect.Tag`. More information please look at [Specific Binding](#specific-binding).                                  |
| BindAll(src interface{}) error              | Bind data from `param`, `query`, `body`, `header`, `state` based on `json` and `qm` tag. More information please look at [All Binding](#all-binding).  |
| SetState(key string, value interface{})     | Set data to request level state                                                                                                                        |
| ParseForm(mutlipart bool)                   | Parse Form must be called before accessing form data, may not supported in some transport. will throwing error if not supported `ErrFormNotSupported`. |
| Task(func() error) *Context                 | Run a function in go routine with error handling                                                                                                       |
| GetTransport(TransportID) (Transport, bool) | Get a transport from core context                                                                                                                      |
