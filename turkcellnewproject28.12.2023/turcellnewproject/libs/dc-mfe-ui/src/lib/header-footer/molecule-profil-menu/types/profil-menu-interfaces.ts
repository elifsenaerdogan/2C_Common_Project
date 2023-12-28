import { ProfileMenuCardProps } from '../../../atoms/profile-menu-cart/types/profile-menu-cart-interfaces';
import { AvatarProps } from '../../../atoms/avatar/types/avatar-interfaces';
import { AvatarUserInfoProps } from '../../../atoms/avatar-user-info/types/avatar-user-info-interfaces';
export interface MenuActionLinkObject {
  url: string;
  text: string;
}

export interface MoleculeProfilMenuProps {
  className?: string;
  name: string;
  profilAction: MenuActionLinkObject[];
  profilCart: ProfileMenuCardProps[];
  avatar: AvatarProps;
  avatarUser: AvatarUserInfoProps;
  onLogout: () => void;
  closeProfileMenuVisibility: (val: boolean) => void;
}
