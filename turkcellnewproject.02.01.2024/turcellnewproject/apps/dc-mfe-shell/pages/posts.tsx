import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { turkcellBaseService } from '../services/base/services';

export const Posts = () => {
  // const { data, isPending, isFetching } = useQuery<number, Error>({
  //   queryKey: ['beni-dene'],
  //   queryFn: async () => {
  //     const { data } = await turkcellBaseService.post(
  //       '/pasaj/basket-items-count'
  //     );
  //     return data;
  //   },
  //   staleTime: 2000,
  //   refetchOnWindowFocus: true,
  //   gcTime: 10000,
  // });

  return (
    <>
      <div style={{ height: '100vh' }}>AA</div>
    </>
  );
};
export default Posts;
