import Base from '@others/interfaces/base-props';

export interface AvatarProps extends Base {
  userName: string;
  size?: string;
  notificationCount?: number;
  avatarImage?: string;
  displayImage?: boolean;
  avatarBgColor?: string;
}
