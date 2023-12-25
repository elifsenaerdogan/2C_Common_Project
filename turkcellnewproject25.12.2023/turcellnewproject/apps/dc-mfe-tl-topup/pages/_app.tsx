import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.scss';
import React from 'react';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      <Head>
        <title>Welcome to dc-mfe-tl-topup!</title>
      </Head>
      <main className="app">
        <Component {...pageProps} />
      </main>
    </React.Fragment>
  );
}

export default CustomApp;
