# authing-spa-auth-sdk-demo

基于 SPA 场景的认证 SDK，快速集成 SSO。

## 场景

- 有业务网站 website1，地址为：https://localhost:8000
- 有业务网站 website2，地址为：https://localhost:8001
- 浏览器禁用了三方 Cookie


## 目标效果

用户在 website1 登录后，在同一浏览器另一个标签页访问 website2 的时候，能够直接获取到用户信息，实现单点登录效果。


## Demo 使用方法

按照 [website1](./website1/README.md)、[website2](./website2/README.md) 的引导，将两个项目都启动起来

在 website1 启动，正常登录之后，通过 website1 里的链接直接跳转到 website2，就可以发现，website2 可以直接取到用户信息了。


## 开发教程

开发教程请参考：[使用 Authing 实现单点登录](https://docs.authing.cn/v2/reference/sdk-for-sso-spa.html)。
