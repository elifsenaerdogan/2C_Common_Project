import Base from '@others/interfaces/base-props';

export interface PaymentDefaultValues {
  cardHolder?: string;
  cardNumber?: string;
  expiryMonth?: string;
  expiryYear?: string;
  ccv?: string;
  terms?: boolean | null;
  agreement?: boolean | null;
}

export interface PaymentReference {
  current: {
    submitForm: () => void;
  };
}

export interface CardLogos {
  bank?: string;
  cardType?: string;
}

export interface CardCustomTitles {
  fullNameTitle?: string;
  fullNamePlaceholder?: string;
  cardNumberTitle?: string;
  cardNumberPlaceholder?: string;
  cvvTitle?: string;
  cvvPlaceholder?: string;
  expirationDateTitle?: string;
  datePlaceholder?: string;
}

export type PaymentTypes = 'masterpass' | 'paycell'

export interface CardList {
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
}

export interface SavedCardList {
  eulaId: string;
  cardInfoList: CardList[];
}

export interface PaymentProps extends Base {
  defaultValues?: PaymentDefaultValues;
  onSubmit?: (data: PaymentDefaultValues) => void;
  reference?: PaymentReference;
  customLabels?: PaymentDefaultValues;
  onClickTerms?: () => void;
  cardLogos?: CardLogos;
  extraInfoLogos?: string[];
  cardCustomTitles?: CardCustomTitles;
  msisdn?: string;
  cardType?: PaymentTypes;
  agreements: string[];
  handleGetCardNumber?: (cardNumber:string) => void;
}
