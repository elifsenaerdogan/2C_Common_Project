import axios from 'axios';
import { setupInterceptorNonToken, setupInterceptorWithToken } from '.';

const contentService = axios.create({
  baseURL:
    //'http://dc-content-service-develop-digitalchannels.apps.tocpt2.tcs.turkcell.tgc',
    process.env.NEXT_PUBLIC_CONTENT_SERVICE_BASE_URL,
});

const turkcellBaseService = axios.create({
  // baseURL: 'https://www.turkcell.com.tr',
  baseURL: process.env.NEXT_PUBLIC_TURKCELL_BASE_URL,
});

setupInterceptorNonToken([contentService, turkcellBaseService]);

export { contentService, turkcellBaseService };
