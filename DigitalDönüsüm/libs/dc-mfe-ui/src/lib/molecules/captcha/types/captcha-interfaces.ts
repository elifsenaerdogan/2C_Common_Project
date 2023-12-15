import Base from '@others/interfaces/base-props';

export interface Captcha {
  identifier: string;
  image: string;
  sound: string;
}
export interface CaptchaPropTypes extends Base {
  inputLabel: string;
  onClick?: (e:string) => void;
  onChange?: () => void;
  isLoading?: boolean;
  refreshCaptcha?: () => void;
  captcha?: Captcha;
}
