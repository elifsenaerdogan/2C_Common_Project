import { useQuery } from '@tanstack/react-query';
import { pukHeaders} from "../base/headers";
import { byTCNumberService } from "../base/services";

export interface ByTcNumberServices {
    pukNumber: string;
  puk2Number: string;
    simNumber: string;
    errorDetail:string;
}

export const getPukWithTc = async (headers, body): Promise<ByTcNumberServices> => {
    try {
        const { data } = await byTCNumberService.post("", body, {
            headers: pukHeaders,
            withCredentials: true,
        });
        console.log("data", data);
        return data;
    } catch (error) {
        throw new Error("Hata");
    }
};

export const useByTcNumberService = (gsmno, tckn,birthDay,birthMonth,birthYear,identifier, inputValue) => {
    const body = {
        gsmno:gsmno,
        tckn:tckn,
        birthDay:birthDay,
        birthMonth:birthMonth,
        birthYear:birthYear,
        identifier:identifier,
        inputValue: inputValue
    };
    const headers = {
        ...pukHeaders,
    };
    return useQuery<ByTcNumberServices>({
        queryKey: ['getPukWithTc'],
        queryFn: () => getPukWithTc(headers, body),
        enabled: true
    });
};
