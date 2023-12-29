import Base from "@others/interfaces/base-props";

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

export interface CardProps extends Base {
  fullName: string;
  cardNumber: string;
  cvv?: string;
  month: string;
  year: string;
  backActive: boolean;
  bankLogo?: string;
  cardTypeLogo?: string;
  customTitles?: CardCustomTitles;
}