import { AppProps } from 'next/app';
import Head from 'next/head';
import './styles.css';
import { QueryClient, QueryClientProvider} from "@tanstack/react-query";


function CustomApp({ Component, pageProps }: AppProps) {
    const queryClient = new QueryClient();
  return (
    <>
        <QueryClientProvider client={queryClient} >
      <Head>
        <title>Welcome to dc-mfe-help-tools!</title>
      </Head>
      <main className="app">
        <Component {...pageProps} />
      </main>
        </QueryClientProvider>
    </>
  );
}

export default CustomApp;
