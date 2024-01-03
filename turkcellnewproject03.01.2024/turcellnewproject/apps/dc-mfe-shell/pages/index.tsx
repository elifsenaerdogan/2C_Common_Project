// import RouteWrapper, {
//   getServerSideProps as getServerSidePropsSlug,
// } from './[...slug]';

// export default RouteWrapper;

// export const getServerSideProps = getServerSidePropsSlug;

import React from 'react';
import { MenuService } from '../services/api/use-menu-items-data';
import { PagemanagerService } from '../services/api/use-pagemanager-data';
import { QueryClient, dehydrate } from '@tanstack/react-query';
import QueryKeyEnums from '../enums/query-keys';

export const Shell = () => {
  return <></>;
};
export default Shell;

export async function getServerSideProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: [QueryKeyEnums.HEADER_ITEMS],
    queryFn: () => MenuService('GetMenuList'),
  });

  await queryClient.prefetchQuery({
    queryKey: [QueryKeyEnums.FOOTER_ITEMS],
    queryFn: () => MenuService('GetFooterMenuList'),
  });

  await queryClient.prefetchQuery({
    queryKey: [QueryKeyEnums.NAVIGATION_PM],
    queryFn: () => PagemanagerService('dc-mfe-navigation-pagemanager'),
  });

  await queryClient.prefetchQuery({
    queryKey: [QueryKeyEnums.HELPRIBBON_PM],
    queryFn: () => PagemanagerService('redesignSupportPageManager'),
  });

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}
