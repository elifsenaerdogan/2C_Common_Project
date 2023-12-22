import { updateUser } from '../../store/user-slice';
import { AxiosInstance } from 'axios';
import { Dispatch } from 'react';
import { AnyAction } from '@reduxjs/toolkit';

let currentUser;
let dispatch: Dispatch<AnyAction>;

export const useInjectStore = (_dispatch: Dispatch<AnyAction>, userState) => {
  currentUser = userState;
  dispatch = _dispatch;
};

// Token gerektiren istekler
export function setupInterceptorWithToken(services: AxiosInstance[]) {
  services.forEach((service) => {
    service.interceptors.request.use(
      async (config) => {
        const token = currentUser.token;

        if (isTokenExpired(currentUser.expireTime)) {
          // Token süresi dolmuşsa refreshToken işlemini başlat
          try {
            const newUser = await refreshToken();
            dispatch(updateUser(newUser));
            // Yeni token'ı kullanarak isteği güncelle
            config.headers['Authorization'] = `Bearer ${newUser.token}`;
          } catch (error) {
            // refreshToken başarısızsa, kullanıcıya logout() yaptır
            console.error('Token refresh failed:', error);
          }
        } else if (token) {
          config.headers['Authorization'] = `Bearer ${token}`;
        }
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
  });
}

// Token gerektirmeyen istekler
export function setupInterceptorNonToken(services: AxiosInstance[]) {
  services.forEach((service) => {
    service.interceptors.request.use(
      (config) => {
        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
  });
}

// Token'ın süresi dolup dolmadığını kontrol et
function isTokenExpired(expireTime: number): boolean {
  return expireTime && expireTime <= Date.now(); // Örnek olarak her zaman token'ın süresi doldu olarak kabul ediyoruz.
}

// refreshToken işlemini gerçekleştirip, yeni token'ı döndür
async function refreshToken() {
  return {
    token: 'REFRESH_TOKEN',
    expireTime: Date.now() + 10,
  }; // Örnek olarak sabit bir yeni token döndürüyoruz.
}
