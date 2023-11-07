import styles from './atom-avatar.module.scss';
import classnames from 'classnames';
import { AtomImage } from '@atoms';
import { AvatarProps } from './types/avatar-interfaces';

export const AtomAvatar = (props: AvatarProps) => {
  const {
    userName,
    avatarImage,
    className,
    notificationCount,
    avatarBgColor = 'default',
    displayImage = false,
    size = 'medium',
    ...rest
  } = props;

  const AvatarClasses = classnames(
    'text-captions-bold',
    [styles['a-trkclAppAvatar']],
    {
      [styles[`a-trkclAppAvatar__${avatarBgColor}`]]: avatarBgColor,
      [styles[`a-trkclAppAvatar__${size}`]]: size,
    },
    className
  );

  const imageClasses = classnames([styles['a-trkclAppAvatar__image']], {
    [styles['a-trkclAppAvatar__image--border']]: notificationCount !== 0,
  });

  return (
    <div className={AvatarClasses} {...rest}>
      {avatarImage && displayImage ? (
        <AtomImage
          src={avatarImage}
          alt="user-image"
          width={48}
          height={48}
          className={imageClasses}
        />
      ) : (
        <div>{userName.charAt(0).toUpperCase()}</div>
      )}
      {notificationCount ? (
        <div className={classnames([styles['a-trkclAppAvatar__notification']])}>
          {notificationCount.toString().padStart(2, '0')}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default AtomAvatar;
