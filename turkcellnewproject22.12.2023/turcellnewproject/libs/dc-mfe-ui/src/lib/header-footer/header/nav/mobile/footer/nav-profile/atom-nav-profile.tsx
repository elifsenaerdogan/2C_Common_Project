import { AtomAvatar, AtomAvatarUserInfo } from '@atoms';
import styles from './atom-nav-profile.module.scss';
import classnames from 'classnames';
import { AtomNavProfileProps } from './types/nav-profile-interfaces';
import Link from 'next/link';

export function AtomNavProfileMobile(props: AtomNavProfileProps) {
  const {
    size,
    border,
    notificationCount,
    avatarImage,
    avatarBgColor,
    displayImage,
    userName,
    userNumber,
    icon,
    link,
  } = props;

  const navProfileAvatarClasses = classnames('', [
    styles['trkclAppNavProfileAvatar'],
  ]);

  return (
    <Link href={link} className={navProfileAvatarClasses}>
      <AtomAvatar
        userName={userName.name}
        size={size}
        border={border}
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
    </Link>
  );
}

export default AtomNavProfileMobile;
