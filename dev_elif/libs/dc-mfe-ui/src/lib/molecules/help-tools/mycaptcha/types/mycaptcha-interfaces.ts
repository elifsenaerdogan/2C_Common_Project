import Base from '@others/interfaces/base-props';

export interface MyCaptcha {
  imageBase64?: string;
  soundBase64?: string;
}
export interface MyCaptchaPropTypes extends Base {
  inputLabel: string;
  isCaptchaOk: (newVal: boolean) => void;
  text?:string;
}
