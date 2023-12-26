import { useMutation, MutationFunction } from '@tanstack/react-query';
import { pukHeaders } from "../base/headers";
import { bySimNumberService } from "../base/services";

export interface UpdateBySimNumberVariables {
    gsmno: string;
    simNumber: string;
    identifier: string;
    inputValue: string;
}

export interface BySimNumberServices {
    pukNumber: string;
    puk2Number: string;
    simNumber: string;
    errorDetail: string;
}

export const updatePukWithSim: MutationFunction<BySimNumberServices, UpdateBySimNumberVariables> = async (headers, variables) => {
    try {
        const { data } = await bySimNumberService.put("", variables, {
            headers: pukHeaders,
            withCredentials: true,
        });
        console.log("data", data);
        return data;
    } catch (error) {
        console.error('Service error:', error);
        throw new Error('An error occurred while updating by sim number.');
    }

};

export const useUpdateBySimNumberService = () => {
    const headers = {
        ...pukHeaders,
    };

    return useMutation<BySimNumberServices, Error, UpdateBySimNumberVariables>(

        (variables: UpdateBySimNumberVariables) => updatePukWithSim(headers, variables),
        {
            onSuccess: (data: BySimNumberServices) => {
                console.log('Veri güncellendi:', data);
            },
            onError: (error: Error) => {
                console.error('Mutasyon hatası:', error);
            },
        }

    );
};
