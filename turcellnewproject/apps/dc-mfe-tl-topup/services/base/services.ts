import axios from "axios";
import { setupInterceptorNonToken, setupInterceptorWithToken } from ".";

const productService=axios.create({
    baseURL:"https://dummyjson.com/products",
})


const publicService=axios.create({
    baseURL:"https://dummyjson.com/users"
})


// Birden fazla servisi array içine geçebiliriz
setupInterceptorWithToken([productService])
setupInterceptorNonToken([publicService])

export {productService,publicService}