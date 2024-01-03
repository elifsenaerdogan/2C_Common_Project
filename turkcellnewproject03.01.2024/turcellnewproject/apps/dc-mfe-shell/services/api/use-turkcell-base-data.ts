import Error from 'next/error';
import { turkcellBaseService } from '../base/services';
import { useQuery } from '@tanstack/react-query';

export const usePasajBasketCount = () => {
  return useQuery<number, Error>({
    queryKey: ['pasaj-basket-count'],
    queryFn: async () => {
      const { data } = await turkcellBaseService.post(
        'pasaj/basket-items-count'
      );
      return data;
    },
    retry: false,
  });
};
