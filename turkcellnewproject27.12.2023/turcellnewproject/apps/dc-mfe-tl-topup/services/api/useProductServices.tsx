import Error from 'next/error';
import { productService } from '../base/services';
import { useQuery } from 'react-query';


export interface Products {
    products: Product[]
    total: number
    skip: number
    limit: number
  }
  
  export interface Product {
    id: number
    title: string
    description: string
    price: number
    discountPercentage: number
    rating: number
    stock: number
    brand: string
    category: string
    thumbnail: string
    images: string[]
  }


export const useProductService = () => {
  return useQuery<Products,Error>('products', async () => {
    const { data } = await productService.get("");
    return data;
  });
};
