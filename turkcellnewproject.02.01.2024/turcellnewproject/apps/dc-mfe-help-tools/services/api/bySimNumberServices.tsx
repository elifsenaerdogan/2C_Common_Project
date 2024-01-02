import { byPukService } from '../base/services';
import { useMutation } from '@tanstack/react-query';
import { pukHeaders } from '../base/headers';

export interface BySimNumberServices {
  data: {
    pukNumber:string;
    puk2Number:string;
    simNumber:string;

  },
  errorDetail:string;
}

const getPukWithSim = async (gsmno: string, simNumber: string, identifier: string, inputValue: string): Promise<BySimNumberServices> => {
  try {
    const customHeaders = {
      ...pukHeaders,
    };
    return await byPukService.post('/by-sim-number', {
      gsmno: gsmno,
      simNumber: simNumber,
      identifier: identifier,
    }, {
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

export const useGetPukWithSc = (gsmno: string, simNumber: string, identifier: string, inputValue: string) => {
  return useMutation<BySimNumberServices, Error>({
    mutationFn: () => getPukWithSim(gsmno, simNumber, identifier, inputValue),
    onSuccess: (data, context) => {
      return data;
    },
    onError:(error)=>{
      return (error);
    },
    retry: false
  });

};
