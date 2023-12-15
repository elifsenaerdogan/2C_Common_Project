import Base from '@others/interfaces/base-props';

export interface OrderBoxProps extends Base {
  className?: string;
  packageName?: string;
  price: string;
  phone: string;
  type?: string;
  productTitle?: string;
  phoneTitle: string;
  packageAmountTitle?: string;
}
