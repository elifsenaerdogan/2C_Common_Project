import {useQuery} from "@tanstack/react-query";
import {defaultHeaders} from "../base/headers";
import {byPageManagerService, captchaService} from "../base/services";
import {PagemanagerService} from "../../../dc-mfe-shell/services/api/use-pagemanager-data";

export interface PageManagerServices {
  labelDTOList:  {
    "helpService.captcha.error":string;
    "helptools.pukcode.title.page":string;
    "helptools.pukcode.label.title":string;
    "helptools.pukcode.title.simcard":string;
    "helptools.pukcode.label.simcard":string;
    "helptools.pukcode.title.tcno":string;
    "helptools.pukcode.withsim.input.phonenumber":string;
    "helptools.pukcode.withsim.input.simcard":string;
    "helptools.pukcode.withsim.label.simcard":string;
    "helptools.pukcode.withsim.label.captcha":string;
    "helptools.pukcode.withıdnumber.label.phonenumber":string;
    "helptools.pukcode.withidnumber.input.idnumber":string;
    "helptools.pukcode.withidnumber.label.idnumber":string;
    "helptools.pukcode.withidnumber.birdhdate":string;
    "helptools.pukcode.withidnumber.label.birdhdate":string;
    "helptools.pukcode.withıdnumber.label.captcha":string;
    "helptools.pukcode.withidnumber.label.securitycode":string;
    "helptools.pukcode.label.button":string;
    "helptools.pukcode.erroremptymessage.input.phonenumber":string;
    "helptools.pukcode.erroremptymessage.input.tckimlikno": string;
    "helptools.pukcode.failmessage.input.phonenumber":string;
    "helptools.pukcode.erroremptymessage.input.simcard":string;
    "helptools.pukcode.failmessage.input.tcno":string;
    "helptools.pukcode.erroremptymessage.input.captcha":string;
    "helptools.pukcode.failmessage.input.captcha":string;
    "helptools.pukcode.label.withidnumber":string;
    "helptools.pukcode.response.label":string;
    "helptools.pukcode.response.puk1":string;
    "helptools.pukcode.response.puk1.label":string;
    "helptools.pukcode.response.puk2":string;
    "helptools.pukcode.response.puk2.label":string;
    "helptools.pukcode.response.button":string;

};
}

  export const getPageManager = async(headers, body ):Promise<PageManagerServices> => {
    try {
      const {data} = await byPageManagerService.get(" ", {
        headers: headers,
        withCredentials: true,

      });
      console.log(data,data)
      return data;
    }
    catch (error) {
      console.log(error)
    }
}
export const  usePageManagerService = () => {
  const body = {};
  const headers = {
    ...defaultHeaders,
  };
  return useQuery<PageManagerServices>({
    queryKey: ['getPageManager'],
    queryFn: () => getPageManager(headers,body),
    enabled: true
  })
}



