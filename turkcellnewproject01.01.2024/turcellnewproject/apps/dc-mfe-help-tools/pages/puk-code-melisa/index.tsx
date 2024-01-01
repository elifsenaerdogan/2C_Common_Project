import React from 'react';
import styles from './index.module.scss';
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import Layout from "../../layout";

const PukCodePagesPrivate = () => {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Layout/>

      </QueryClientProvider>
    </>
  );
};

export default PukCodePagesPrivate;
