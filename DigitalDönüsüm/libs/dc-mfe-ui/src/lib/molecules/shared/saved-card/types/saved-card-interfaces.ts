import Base from '@others/interfaces/base-props';
import { RadioChangeEvent } from 'antd';
import { RadioButtonEnum } from '../../../tl-topup/radio-button/types/radio-button-enums';

export interface SavedCard {
  cardId: string;
  maskedCardNo: string;
  alias: string;
  cardBrand: string;
  cardDefault: boolean;
  expired: boolean;
  showEulaId: boolean;
  threeDValidated: boolean;
  otpValidated: boolean;
  activationDate: string;
  eulaId?: string;
  msisdn?: string;
  balance?:string | number;
}

export interface MoleculeSavedCardProps extends Base {
  className?: string;
  onChange?: (e: RadioChangeEvent) => void;
  value?: string;
  data: SavedCard[];
  outClickStatus?: (newVal: any) => void;
  onClick?: (newVal: any) => void;
  type: RadioButtonEnum;
}
