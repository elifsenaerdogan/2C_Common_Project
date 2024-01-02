import { useMutation } from '@tanstack/react-query';
import { pukHeaders} from "../base/headers";
import { byPukService } from "../base/services";


export interface ByTcNumberServices {
  data: {
    pukNumber: string;
    puk2Number: string;
    simNumber: string;
  },
    errorDetail:string;
}

 const getPukWithTc = async (gsmno: string, tckn: string, birthDay: string, birthMonth: string, birthYear: string, identifier: string, inputValue: string): Promise<ByTcNumberServices> => {
    try {
        const customHeaders = {
            ...pukHeaders,
        };
        return await byPukService.post( '/puk/by-tckn', {
            gsmno:gsmno,
            tckn:tckn,
            birthDay:birthDay,
            birthMonth:birthMonth,
            birthYear:birthYear,
            identifier:identifier,

        },
            {
            headers: customHeaders,
            withCredentials: true,
            params: {
            captcha: inputValue
    }
    });
    } catch {
        console.log("hata")
    }
};

export const useGetPukWithTc = (gsmno: string, tckn: string,birthDay: string,birthMonth: string ,birthYear: string,identifier: string, inputValue: string) => {

    return useMutation<ByTcNumberServices, Error>({
       mutationFn: () => getPukWithTc(gsmno, tckn, birthDay, birthMonth, birthYear, identifier,inputValue),
        onSuccess: (data, context) => {
          return data;
        },
            onError: (error) => {
          return (
            console.log("")

          );
    },
       retry: false
    });
};
