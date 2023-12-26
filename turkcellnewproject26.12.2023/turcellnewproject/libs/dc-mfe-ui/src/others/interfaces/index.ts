import { CardProps as AntCardProps } from 'antd/lib/card';

export interface CarouselImagesType {
  src: string;
  alt: string;
  id: number;
}

export interface CardPriceProps {
  amount: string;
  currency: string;
  id: number;
}

export interface CardProps extends AntCardProps {
  actions?: React.ReactNode[];
  redirectUrl?: string;
  className?: string;
  wrapperClassName?: string;
}
