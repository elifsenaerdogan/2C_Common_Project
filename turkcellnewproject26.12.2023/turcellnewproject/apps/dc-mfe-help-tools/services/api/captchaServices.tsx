import {captchaService} from '../base/services';
import { useQuery } from '@tanstack/react-query';
import {defaultHeaders} from "../base/headers";
export interface Captcha {
    image: string;
    sound: string;
    identifier: string;
}
export const getCaptcha = async (headers,body):Promise<Captcha>=>{
    try {
        const { data } = await captchaService.post("" ,body, {
            headers: headers,
            withCredentials: true,
        });
        console.log("data",data)
        return data;
    } catch (error) {
        throw new Error("Hata");
    }
}
export const useCaptchaService =  () => {
    const body = {};
    const headers = {
        ...defaultHeaders,
    };
    return useQuery<Captcha>({
        queryKey: ['getCaptcha'],
        queryFn: () =>  getCaptcha(headers, body),
        enabled:true
    });
};
