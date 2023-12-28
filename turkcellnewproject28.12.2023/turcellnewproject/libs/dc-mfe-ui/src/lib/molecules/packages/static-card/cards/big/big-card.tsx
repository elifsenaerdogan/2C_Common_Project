import { AtomButton } from '@atoms';
import styles from './big-card.module.scss';
import classNames from 'classnames';
import { MoleculesStaticCardProps } from '../types/card-interfaces';

export function BigCard (props:MoleculesStaticCardProps) {
    const { staticObject, onClick } = props;
    const staticClasses = classNames(styles['m-trkclStatic']);
    const filterArea = classNames(styles['m-trkclStatic__filterArea']);
    const packageDetail = classNames(styles['m-trkclStatic__packageDetail']);
    const monthly = classNames(styles['m-trkclStatic__monthly']);
    const price = classNames(styles['m-trkclStatic__price']);
    const priceText = classNames(styles['m-trkclStatic__priceText']);
    const maskCopy = classNames(styles['m-trkclStatic__maskCopy']);
    const staticBtn = classNames('text-body-regular',styles['m-trkclStatic__staticBtn']);
    const welcomePackages = classNames(
      'text-head-bold-xs',
      styles['m-trkclStatic__welcome']
    );
  return (
    <div className={staticClasses}>
    <span className={filterArea}>
      <span className={classNames('text-body-small')}>{staticObject?.filterText}</span>
    </span>
    <div className={welcomePackages}>{staticObject?.welcomeText}</div>
    <div className={packageDetail}>
      <div>
        <div className={monthly}>{staticObject?.monthlyTitle}</div>
        <div className={priceText}>
          <div className={price}>{staticObject?.price}</div>{staticObject?.priceText}
        </div>
      </div>
      <div className={maskCopy} />
      <div className={priceText}>
        <div><div className={price}>{staticObject?.gb}</div>{staticObject?.gbText}</div>
      </div>
    </div>
    <AtomButton onClick={onClick} text={staticObject?.btnText} className={staticBtn} />
  </div>
  )
}

export default BigCard;