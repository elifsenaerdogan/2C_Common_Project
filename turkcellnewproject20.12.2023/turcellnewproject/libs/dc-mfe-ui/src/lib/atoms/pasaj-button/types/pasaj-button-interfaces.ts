import { ButtonProps } from 'antd/lib/button';

export interface PasajItemProps extends ButtonProps {
  buttonbackground: 'white' | 'shade';
  text?: string;
  imageAlt?: string;
  className?: string;
  link?: string;
}
