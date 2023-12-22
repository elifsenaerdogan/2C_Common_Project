import Base from '@others/interfaces/base-props';

export type IconTypes = 'cellular' | 'mail' | 'telephone';
export type CompanyTypes =
  | 'BIP'
  | 'TV+'
  | 'ABROAD'
  | 'FIZY'
  | 'LIFEBOX'
  | 'TURKCELL';

export interface Benefits {
  name: string;
  value: string;
  unitValue: string;
  type: string;
  icon?: IconTypes;
}

export interface Companies {
  companyId: string;
  companyName: CompanyTypes;
}
export interface PackageCardData {
  aeOfferId?: number;
  benefits?: Benefits[];
  campaignName: string;
  categoryName: string;
  companies?: Companies[];
  offerId: number;
  offerName: string;
  packageDescription: string;
  packageId: number;
  packageName: string;
  paymentTypes?: string[];
  price: string;
  priceTime: string;
  priceTimeUnit: string;
  priceUnit: string;
  productType: string;
  style: string;
  value?: string;
}
export interface PackageCardProps extends Base {
  className?: string;
  outClickStatus: (newVal: PackageCardData) => void;
  wrapperClassName?: string;
  dataList: PackageCardData[];
  defaultValue: number | string;
}
