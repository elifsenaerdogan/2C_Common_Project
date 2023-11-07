import { ButtonProps } from 'antd/lib/button';
import { buttonType } from '../../button/types/button-types';
import { MouseEventHandler } from 'react';

export interface PasajItemProps extends ButtonProps {
    variant?: buttonType;
    text: string;
    imageAlt: string;
    className?: string;
    onClick?: MouseEventHandler<HTMLButtonElement>;
  }
