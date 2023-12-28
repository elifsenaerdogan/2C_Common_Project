import Base from '@others/interfaces/base-props';
import { MouseEventHandler } from 'react';

export interface AvatarUserInfoProps extends Base {
  userName: {
    name: string;
    nameColor?: 'dark' | 'bluey-grey' | 'white';
    nameFontSize?: 'small' | 'medium' | 'large';
  };
  userNumber: {
    number: string;
    numberColor?: 'dark' | 'bluey-grey' | 'white';
    numberFontSize?: 'small' | 'medium' | 'large';
  };
  icon: {
    visibility: boolean;
    size?: number;
    rotateDeg?: 90 | 180;
    onClick?: () => void;
    color?: string;
    iconClassname?: string;
  };
  onClick?: MouseEventHandler<HTMLDivElement>;
}
