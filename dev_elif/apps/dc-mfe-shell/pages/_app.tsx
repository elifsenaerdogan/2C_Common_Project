//test7
import { AppProps } from 'next/app';
import { lazy, useEffect } from 'react';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { Button, ConfigProvider, Space } from 'antd';

import { Provider } from 'react-redux';

import AppLayout from '../layout';

console.log(process.env.REMOTES, 'remotes++++++');
const { injectScript } = require('@module-federation/nextjs-mf/utils');
import './styles.scss';
import { deneme } from './../store/index';

import theme from '@dc-mfe-ui';
const staticReducers = {
  deneme: deneme.reducer,
};

export const store = configureStore({
  reducer: staticReducers,
});

function createReducer(asyncReducers: any) {
  return combineReducers({
    ...staticReducers,
    ...asyncReducers,
  });
}

function camelCase(str: string): string {
  return str
    .replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
      return index == 0 ? word.toLowerCase() : word.toUpperCase();
    })
    .replace(/\s+/g, '')
    .replace(/[^a-zA-Z0-9]/g, '');
}

function capitalizeFLetter(str: string): string {
  return str.replace(/^./, str[0].toUpperCase());
}

const remoteNames = Object.keys(process.env.REMOTES);
const remoteReducersApply = async () => {
  let asyncReducers = {};
  await Promise.all(
    remoteNames.map(async (remoteName) => {
      const foundContainer = await injectScript(remoteName);
      const container = await foundContainer.get('./store');

      const reducers = Object.keys(container());
      reducers.map((reducer) => {
        asyncReducers = {
          ...asyncReducers,
          [`${camelCase(remoteName)}${capitalizeFLetter(reducer)}`]:
            container()[reducer].reducer,
        };
      });
    })
  );
  /* @ts-ignore */
  store.replaceReducer(createReducer(asyncReducers));
};

function CustomApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    remoteReducersApply();
  }, []);

  return (
    <ConfigProvider theme={theme}>
      <Head>
        <title>Welcome to shell!</title>
      </Head>
      <main className="app">
        <Provider store={store}>
          <AppLayout>
            <Component {...pageProps} />
          </AppLayout>
        </Provider>
      </main>
    </ConfigProvider>
  );
}

CustomApp.getInitialProps = async (appContext) => {
  //remoteReducersApply();
  return {};
};

export default CustomApp;
