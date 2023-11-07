import styles from './atom-avatar-user-info.module.scss';
import classnames from 'classnames';
import { ArrowLarge } from '@others/icons';
import { AtomIcon } from '@atoms';
import { AvatarUserInfoProps } from './types/avatar-user-info-interfaces';

export const AtomAvatarUserInfo = (props: AvatarUserInfoProps) => {
  const { userName, userNumber, className, icon, onClick, ...rest } = props;

  const { name, nameColor = 'dark', nameFontSize = 'medium' } = userName;

  const {
    number,
    numberColor = 'dark ',
    numberFontSize = 'small',
  } = userNumber;

  const {
    visibility = true,
    rotateDeg = 90,
    size = 18,
    onClick: iconClick,
    color,
  } = icon;

  const handleOnClick = (event: React.MouseEvent<HTMLDivElement>) =>
    onClick && onClick(event);

  const splittedName = name
    .split(' ')
    .map((item, i) => {
      if (i === 0)
        return `${item.charAt(0).toUpperCase()}${item.slice(1).toLowerCase()}`;
      else return `${item.charAt(0).toUpperCase()}.`;
    })
    .join(' ');

  const userInfoClasses = classnames(
    'text-captions-bold',
    [styles['a-trkclAppUserInfo']],
    className
  );

  const userInfoNameClasses = classnames(
    {
      [styles[`a-trkclAppUserInfo__color--${nameColor}`]]: nameColor,
    },
    {
      [styles[`a-trkclAppUserInfo__size--${nameFontSize}`]]: nameFontSize,
    }
  );

  const userInfoNumberClasses = classnames(
    'text-captions-regular',
    {
      [styles[`a-trkclAppUserInfo__color--${numberColor}`]]: numberColor,
    },
    {
      [styles[`a-trkclAppUserInfo__size--${numberFontSize}`]]: numberFontSize,
    }
  );

  return (
    <div className={userInfoClasses} {...rest} onClick={handleOnClick}>
      <div>
        <div className={userInfoNameClasses}>{splittedName}</div>
        <div className={userInfoNumberClasses}>{number}</div>
      </div>
      {visibility ? (
        <AtomIcon
          icon={
            <ArrowLarge
              width={size}
              height={size}
              transform={`rotate(-${rotateDeg})`}
              color={color}
            />
          }
          onClick={() => iconClick && iconClick()}
        />
      ) : (
        <></>
      )}
    </div>
  );
};

export default AtomAvatarUserInfo;
