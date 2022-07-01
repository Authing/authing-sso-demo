import React, { useEffect, useMemo, useState } from 'react';
import { AuthingSPA } from '@authing/spa-auth-sdk';
import type { LoginState } from '@authing/spa-auth-sdk/dist/types/global';

function App() {
  const sdk = useMemo(() => {
    return new AuthingSPA({
      // 很重要，请仔细填写！
      // 如果应用开启 SSO，这儿就要写单点登录的“应用面板地址”；否则填写应用的“认证地址”。
      domain: 'bazooka.pre.authing.cn',

      // 应用 ID
      appId: '6258260e54e2afc798bc3147',

      // 登录回调地址，需要在控制台『应用配置 - 登录回调 URL』中指定
      redirectUri: 'https://localhost:80001',

      // 登出回调地址，需要在控制台『应用配置 - 登出回调 URL』中指定
      logoutRedirectUri: 'https://localhost:80001',
    });
  }, []);

  const [loginState, setLoginState] = useState<LoginState | null>();

  useEffect(() => {
    if (sdk.isRedirectCallback()) {
      console.log('redirect');
      sdk.handleRedirectCallback().then((res) => {
        setLoginState(res);
      });
    } else {
      console.log('normal');

      sdk.getLoginState().then((res) => {
        if (res) {
          setLoginState(res);
        } else {
          sdk.loginWithRedirect({
            redirectUri: 'https://localhost:8001',
            originalUri: 'https://localhost:8001',
            forced: false,
          });
        }
      });
    }
  }, [sdk]);

  return (
    <div className="App">
      <h2>Website 2</h2>
      <div>
        <p>
          Access Token: <code>{loginState?.accessToken}</code>
        </p>
        <p>
          User Info: <code>{JSON.stringify(loginState?.parsedIdToken)}</code>
        </p>
        <p>
          Access Token Info:
          <code>{JSON.stringify(loginState?.parsedAccessToken)}</code>
        </p>
        <p>
          Expire At: <code>{loginState?.expireAt}</code>
        </p>
      </div>
    </div>
  );
}

export default App;
