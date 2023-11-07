import styles from './atom-pasaj-button.module.scss';
import classNames from 'classnames';
import { Button } from 'antd';
import ArrowRight from '@others/icons/IconArrowRight';
import pasajImg from '@others/assets/images/header/pasajBtn.webp';
import { PasajItemProps } from './types/pasaj-button-interfaces';
import { AtomIcon, AtomImage } from '@atoms';
import { PasajText } from './types/pasaj-button-enum';

export function AtomPasajButton(props: PasajItemProps) {
  const {
    text = PasajText.PASAJA_GIT,
    variant = 'primary',
    imageAlt = PasajText.PASAJ_IMG,
    disabled,
    className,
    type,
    onClick,
    ...rest
  } = props;

  const handleOnClick = (event: React.MouseEvent<HTMLButtonElement>) =>
    onClick && onClick(event);

  const pasaJbuttonClasses = classNames(
    'text-body-regular',
    styles['a-trkclAppPasajBtn'],
    {
      [styles[`a-trkclAppPasajBtn--${variant}`]]: variant,
    },
    className
  );
  const pasajText = classNames(
    'text-body-regular',
    styles['a-trkclAppPasajBtn__pasajText']
  );

  return (
    <Button
      className={pasaJbuttonClasses}
      onClick={handleOnClick}
      disabled={disabled}
      {...rest}
    >
      <div className={styles['a-trkclAppPasajBtn__context']}>
        <div>
          <div>
            <AtomImage
              src={pasajImg}
              width={32}
              height={32}
              alt={imageAlt}
              className={styles['a-trkclAppPasajBtn__pasajImg']}
            />
          </div>

          <div className={pasajText}>{text}</div>
        </div>

        <div>
          <AtomIcon
            className={styles['a-trkclAppPasajBtn__iconsArrow-Large_right']}
            icon={<ArrowRight />}
          />
        </div>
      </div>
    </Button>
  );
}

export default AtomPasajButton;
