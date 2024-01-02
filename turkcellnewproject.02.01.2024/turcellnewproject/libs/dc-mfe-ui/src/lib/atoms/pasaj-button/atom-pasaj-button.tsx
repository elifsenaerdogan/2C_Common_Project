import styles from './atom-pasaj-button.module.scss';
import classNames from 'classnames';
import pasajImg from '@others/assets/images/header/pasajBtn.webp';
import { PasajItemProps } from './types/pasaj-button-interfaces';
import { AtomIcon, AtomImage } from '@atoms';
import { PasajText } from './types/pasaj-button-enum';
import Link from 'next/link';
import { IconArrowRight } from '@others/icons';

export function AtomPasajButton(props: PasajItemProps) {
  const {
    text = PasajText.PASAJA_GIT,
    imageAlt = PasajText.PASAJ_IMG,
    className,
    buttonbackground = 'shade',
    link = '/pasaj',
  } = props;

  const pasaJbuttonClasses = classNames(
    'text-body-regular',
    styles['a-trkclAppPasajBtn'],
    buttonbackground && {
      [styles[`a-trkclAppPasajBtn__bgcolor--${buttonbackground}`]]:
        buttonbackground,
    },
    className
  );
  const pasajText = classNames('text-body-regular');

  return (
    <Link href={link} className={pasaJbuttonClasses}>
      <div>
        <AtomImage src={pasajImg} width={32} height={32} alt={imageAlt} />
        <span className={pasajText}>{text}</span>
      </div>
      <div>
        <AtomIcon icon={<IconArrowRight />} />
      </div>
    </Link>
  );
}

export default AtomPasajButton;
