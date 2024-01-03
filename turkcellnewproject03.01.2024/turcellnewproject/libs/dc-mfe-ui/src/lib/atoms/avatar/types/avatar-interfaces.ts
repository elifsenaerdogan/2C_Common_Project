import Base from '@others/interfaces/base-props';
import { StaticImageData } from 'next/image';
import { MouseEventHandler } from 'react';

export interface AvatarProps extends Base {
  userName: string;
  size?: 'xsmall' | 'small' | 'medium' | 'large';
  notificationCount?: number;
  avatarImage?: string | StaticImageData;
  border?: boolean;
  displayImage?: boolean;
  avatarBgColor?: 'default' | 'yellow';
  onClick?: MouseEventHandler<HTMLDivElement>;
}
