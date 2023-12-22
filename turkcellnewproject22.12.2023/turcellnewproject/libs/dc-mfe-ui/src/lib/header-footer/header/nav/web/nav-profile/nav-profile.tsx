import React from 'react';
import styles from './nav-profile.module.scss';
import { AtomAvatar, AtomAvatarUserInfo } from '@atoms';
import classnames from 'classnames';
import { NavProfileWebProps } from './types/nav-profile-interfaces';

export const NavProfileWeb = (props: NavProfileWebProps) => {
  const {
    size,
    notificationCount,
    avatarImage,
    avatarBgColor,
    displayImage,
    userName,
    userNumber,
    icon,
    onClick,
    profileRef,
  } = props;

  const handleOnClick = (event: React.MouseEvent<HTMLDivElement>) =>
    onClick && onClick(event);

  const navProfileWebAvatarClasses = classnames('', [
    styles['trkclAppNavProfileAvatar'],
  ]);

  return (
    <div
      className={navProfileWebAvatarClasses}
      onClick={handleOnClick}
      ref={profileRef}
    >
      <AtomAvatar
        userName={userName.name}
        size={size}
        notificationCount={notificationCount}
        avatarBgColor={avatarBgColor}
        avatarImage={avatarImage}
        displayImage={displayImage}
      />
      <AtomAvatarUserInfo
        userName={userName}
        userNumber={userNumber}
        icon={{
          ...icon,
          iconClassname: classnames([
            styles['trkclAppNavProfileAvatar__userInfo--icon'],
          ]),
        }}
        className={classnames([styles['trkclAppNavProfileAvatar__userInfo']])}
      />
    </div>
  );
};

export default NavProfileWeb;
