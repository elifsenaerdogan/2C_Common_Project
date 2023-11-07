import Base from '@others/interfaces/base-props';
import { PageTypes } from '@others/enums/pageTypes';
import { PaymentReference } from '../../../shared/payment/types/payment-interfaces';

export interface BasketAmountBarProps extends Base {
  className?: string;
  paymentTotal: number;
  desc?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  type: PageTypes;
  reference?: PaymentReference;
  balance?: number;
  basketContainerClasses: string;
}
