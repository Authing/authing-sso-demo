## 确认配置信息

首先需要在 Authing 控制台创建`自建应用`，假定叫 `website1`，并将创建好的名为 `website1` 的应用加入到`单点登录`面板，最后需要确认这几个信息：

- 应用 `website1` 的 `App ID`
- 单点登录的`应用面板地址`，需要在控制台『单点登录 - 配置』中获取
- 登录回调地址，需要在控制台『自建应用 - `website1` 应用配置 - 登录回调 URL』中指定为 `https://localhost:8000`
- **授权配置**：`授权模式`开启 `authorization_code`、`refresh_token`
- **授权配置**：`返回类型`开启 `code`
- **授权配置**：`id_token 签名算法`选择 `HS256`
- **授权配置**：`换取 token 身份验证方式`选择 `none`
- **授权配置**：`检验 token 身份验证方式`选择 `none`
- **授权配置**：`撤回 token 身份验证方式`选择 `none`

## 更新 Demo 配置

接着需要更新 App.tsx 里的配置信息为你自己建立的应用信息：

- domain：上一步获取到的应用面板地址
- appId：上一步获取到的 App ID
- redirectUri：上一步确认的 `https://localhost:8000`

## 运行此程序

``` shell

# 安装依赖
yarn install

# 启动服务
yarn start
```

服务启动后，浏览器打开 https://localhost:8000 即可