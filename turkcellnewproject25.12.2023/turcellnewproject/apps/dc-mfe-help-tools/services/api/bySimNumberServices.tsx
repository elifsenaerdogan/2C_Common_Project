import { useQuery } from '@tanstack/react-query';
import {defaultHeaders, pukHeaders} from "../base/headers";
import { bySimNumberService } from "../base/services";

export interface BySimNumberServices {
    puk1: string;
    puk2: string;
    simNumber: string;
    errorDetail:string;

}

export const getPukWithSim = async (headers, body): Promise<BySimNumberServices> => {
    try {
        const { data } = await bySimNumberService.post("", body, {
            headers: pukHeaders,
            withCredentials: true,
        });
        console.log("data", data);
        return data;
    } catch (error) {
        throw new Error("Hata");
    }
};

export const useBySimNumberService =  (gsmno, simno,identifier, inputValue) => {
    const body = {
        gsmno: gsmno,
        simno: simno,
        identifier: identifier,
        inputValue:inputValue

    };
    const headers = {
        ...pukHeaders,
    };

    return useQuery<BySimNumberServices>({
        queryKey: ['getPukWithSim'],
        queryFn: () => getPukWithSim(headers, body),
        enabled: true
    });
};
