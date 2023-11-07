import { CardProps } from 'antd/lib';

export interface ICardExtraInfo extends CardProps {
  bankLogo?: string[];
  text: string;
  wrapperClassName?: string;
  cardTitle?: string;
}
