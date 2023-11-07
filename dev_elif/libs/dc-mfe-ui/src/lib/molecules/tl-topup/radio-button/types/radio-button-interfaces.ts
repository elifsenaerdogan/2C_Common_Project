import { RadioItemProps } from '../../../../atoms/radio-button/types/radio-button-interfaces';
import { RadioButtonEnum, CurrentSalaryActionName } from './radio-button-enums';

import { CurrencyTypes } from '@others/enums/currency-types';

export interface CreditCartRadioProps extends RadioItemProps {
  type: RadioButtonEnum.CREDITCART;
  creditCartNumber: number;
  onClick: (newVal: object) => void;
}

export interface ComprehensiveRadioProps extends RadioItemProps {
  type: RadioButtonEnum.COMPREHENSIVE;
  actionName: CurrentSalaryActionName;
  actionCurrency: CurrencyTypes;
  actionPrice: string | number;
  onClick?: (newVal: object) => void;
}
