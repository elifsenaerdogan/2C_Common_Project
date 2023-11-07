import { AtomAvatar, AtomAvatarUserInfo } from '@atoms';
import styles from './atom-nav-profile.module.scss';
import classnames from 'classnames';
import { AtomNavProfileProps } from './types/nav-profile-interfaces';

export function AtomNavProfileMobile(props: AtomNavProfileProps) {
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
  } = props;

  const navProfileAvatarClasses = classnames('', [
    styles['trkclAppNavProfileAvatar'],
  ]);

  return (
    <div
      className={navProfileAvatarClasses}
      onClick={() => onClick && onClick()}
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
        icon={icon}
        className={classnames([styles['trkclAppNavProfileAvatar__userInfo']])}
      />
    </div>
  );
}

export default AtomNavProfileMobile;
