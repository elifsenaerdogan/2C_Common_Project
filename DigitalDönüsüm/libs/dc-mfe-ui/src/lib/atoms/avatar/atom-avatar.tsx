import styles from './atom-avatar.module.scss';
import classnames from 'classnames';
import { AtomImage } from '@atoms';
import { AvatarProps } from './types/avatar-interfaces';

export const AtomAvatar = (props: AvatarProps) => {
  const {
    userName,
    avatarImage,
    className,
    border,
    notificationCount,
    avatarBgColor = 'default',
    displayImage = false,
    size = 'medium',
    onClick,
    ...rest
  } = props;

  const handleOnClick = (event: React.MouseEvent<HTMLDivElement>) =>
    onClick && onClick(event);

  const AvatarClasses = classnames(
    [styles['a-trkclAppAvatar']],
    {
      [styles['a-trkclAppAvatar__border']]: border,
    },
    className
  );

  const imageClasses = classnames([styles['a-trkclAppAvatar__image']]);

  const avatarLetterClasses = classnames(
    'text-captions-bold',
    [styles['a-trkclAppAvatar']],
    {
      [styles[`a-trkclAppAvatar__${avatarBgColor}`]]: avatarBgColor,
      [styles[`a-trkclAppAvatar__${size}`]]: size,
    }
  );

  return (
    <div className={AvatarClasses} onClick={handleOnClick} {...rest}>
      {avatarImage && displayImage ? (
        <AtomImage
          src={avatarImage}
          alt="user-image"
          width={48}
          height={48}
          className={imageClasses}
        />
      ) : (
        <div className={avatarLetterClasses}>
          {userName.charAt(0).toUpperCase()}
        </div>
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
