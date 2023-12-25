import classNames from 'classnames';
import styles from './molecules-aside-box.module.scss';
import { MoleculesAsideBoxProps } from './types/aside-box-interfaces';
import { AtomButton, AtomImage } from '@atoms';
import cardTypeLogo from '@others/assets/images/masterpass-black.svg';

export function MoleculesAsideBox(props: MoleculesAsideBoxProps) {
  const {
    icon = cardTypeLogo,
    text = 'Sisteme kayıtlı masterpass kartınız bulunmaktadır. Kullanmak ister misiniz?',
    buttonText='Görüntüle',
    onClick,
  } = props;
  const asideBoxClassNames = classNames('m-aside-box', styles['m-aside-box']);
  const asideBoxTextClassNames = classNames(
    'm-aside-box',
    'text-body-small',
    styles['m-aside-box__text']
  );
  return (
    <div className={asideBoxClassNames}>
      {icon && <AtomImage src={icon} width={103} height={18} alt="logo" />}
      {text && <span className={asideBoxTextClassNames}>{text}</span>}
      {buttonText && (
        <AtomButton
          text={buttonText}
          onClick={onClick && onClick}
          variant="primary-outlined"
        />
      )}
    </div>
  );
}

export default MoleculesAsideBox;
