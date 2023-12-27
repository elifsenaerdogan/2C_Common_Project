//test7
import { AppProps } from 'next/app';
import React, { useEffect } from 'react';
import Head from 'next/head';
import {
  configureStore,
  combineReducers,
  applyMiddleware,
} from '@reduxjs/toolkit';
import { ConfigProvider } from 'antd';

import { Provider } from 'react-redux';

import AppLayout from '../layout';
import {
  HydrationBoundary,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { injectScript } = require('@module-federation/nextjs-mf/utils');
import './styles.scss';
import theme from '@dc-mfe-ui';
import ErrorBoundary from '../common/ErrorBoundary';
import { userSlice } from '../store';

import { useRouter } from 'next/router';

const staticReducers = {
  user: userSlice.reducer,
};

export const store = configureStore({
  reducer: staticReducers,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;

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
  // store.replaceReducer(createReducer(asyncReducers)); // TODO
};

function CustomApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = () => {
      window.gtag('config', `${process.env.NEXT_PUBLIC_GTM_ID}`, {
        page_path: router.asPath ?? '',
      });
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router]);

  useEffect(() => {
    remoteReducersApply();
  }, []);

  const [queryClient] = React.useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 60 * 1000,
          },
        },
      })
  );
  return (
    <ConfigProvider theme={theme}>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, minimum-scale=1"
      />
      <main className="app">
        <Provider store={store}>
          <ErrorBoundary statusCode={pageProps?.errorCode}>
            <QueryClientProvider client={queryClient}>
              <HydrationBoundary state={pageProps?.dehydratedState}>
                <AppLayout isHide={!!pageProps?.query?.isHide}>
                  <Component {...pageProps}></Component>
                </AppLayout>
              </HydrationBoundary>
              <ReactQueryDevtools />
            </QueryClientProvider>
          </ErrorBoundary>
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
