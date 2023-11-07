import Base from '@others/interfaces/base-props';

export interface PriceBoxData {
  id: number;
  price: number;
  isActive: boolean;
}

export interface PriceBoxContainerProps extends Base {
  data: PriceBoxData[];
  title?: string;
  wrapperClassName?: string;
  onClick: (newVal: any) => void;
}
