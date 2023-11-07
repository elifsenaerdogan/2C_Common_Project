import BaseProps from '@others/interfaces/base-props';
import { PriceBoxData } from '../../../molecules/tl-topup/price-box-container/types/price-box-container-interfaces';

export interface PriceBoxProps extends BaseProps {
  item: PriceBoxData;
  className?: string;
  onClick?: () => void;
}
