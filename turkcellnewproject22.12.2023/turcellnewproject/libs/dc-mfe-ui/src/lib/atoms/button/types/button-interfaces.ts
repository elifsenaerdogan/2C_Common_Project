import { ButtonProps } from 'antd/lib/button';
import { buttonType } from './button-types';
import { MouseEventHandler } from 'react';

export interface MyBaseButtonProps extends ButtonProps {
  variant?: buttonType;
  text: string;
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  icon?: React.ReactNode | null;
}

