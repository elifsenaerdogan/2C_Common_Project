import { LegacyRef } from 'react';
import { AvatarUserInfoProps } from '../../../../../../atoms/avatar-user-info/types/avatar-user-info-interfaces';
import { AvatarProps } from '../../../../../../atoms/avatar/types/avatar-interfaces';
import { MouseEventHandler } from 'react';

export interface NavProfileWebProps
  extends AvatarUserInfoProps,
    Omit<AvatarProps, 'userName'> {
  onClick?: MouseEventHandler<HTMLDivElement>;
  profileRef?: LegacyRef<HTMLDivElement> | undefined;
}
