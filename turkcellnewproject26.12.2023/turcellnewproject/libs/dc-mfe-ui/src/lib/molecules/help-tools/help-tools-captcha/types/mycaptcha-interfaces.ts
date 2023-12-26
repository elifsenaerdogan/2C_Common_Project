import Base from '@others/interfaces/base-props';
import {inputStatusTypes} from "@atoms/input/types/input-types";
import {InputProps} from "antd/lib/input";
import {ChangeEvent} from "react";


export interface MyCaptcha {
  imageBase64?: string;
  soundBase64?: string;
  data: MyData;
}

export interface MyData {
  identifier: string;
  image: string;
  sound:string;
  // ... diğer alanlar
}
export interface MyCaptchaPropTypes extends Base {
  inputLabel: string;
  isCaptchaOk: (newVal: boolean) => void;
  text?: string;
  value: string;
  onBlur?: () => void;
  message?: string;
  statusType?: inputStatusTypes;
  onChangee?: (e: ChangeEvent<HTMLInputElement>) => void;
  fetchData?: () => Promise<MyCaptcha>;
}

