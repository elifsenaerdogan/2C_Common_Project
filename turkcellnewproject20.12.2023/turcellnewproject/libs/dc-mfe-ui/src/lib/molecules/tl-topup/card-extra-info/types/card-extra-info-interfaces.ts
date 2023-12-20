import { CardProps } from 'antd/lib';
import { StaticImageData } from 'next/image';

export interface ICardExtraInfo extends CardProps {
  bankLogo?: StaticImageData[] | string[];
  text: string;
  wrapperClassName?: string;
  cardTitle?: string;
}
