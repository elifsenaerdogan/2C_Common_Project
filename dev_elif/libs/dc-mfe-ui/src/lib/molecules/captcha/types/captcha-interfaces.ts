import Base from '@others/interfaces/base-props';

export interface Captcha {
  imageBase64?: string;
  soundBase64?: string;
}
export interface CaptchaPropTypes extends Base {
  inputLabel: string;
  isCaptchaOk: (newVal: boolean) => void;
}
