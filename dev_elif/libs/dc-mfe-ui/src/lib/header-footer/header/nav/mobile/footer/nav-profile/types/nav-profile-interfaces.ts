import { AvatarUserInfoProps } from '../../../../../../../atoms/avatar-user-info/types/avatar-user-info-interfaces';
import { AvatarProps } from '../../../../../../../atoms/avatar/types/avatar-interfaces';

export interface AtomNavProfileProps
  extends AvatarUserInfoProps,
    Omit<AvatarProps, 'userName'> {
  onClick?: () => void;
}
