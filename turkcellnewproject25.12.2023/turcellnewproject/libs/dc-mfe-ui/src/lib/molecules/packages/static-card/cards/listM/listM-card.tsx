import { AtomButton } from '@atoms';
import styles from './listM-card.module.scss';
import classNames from 'classnames';
import { MoleculesStaticCardProps } from '../types/card-interfaces';

export function ListMCard(props: MoleculesStaticCardProps) {
  const { staticObject, onClick } = props;
  const staticClasses = classNames(styles['m-trkclStatic']);
  const filterArea = classNames(styles['m-trkclStatic__filterArea']);
  const packageDetail = classNames(styles['m-trkclStatic__packageDetail']);
  const monthly = classNames(styles['m-trkclStatic__monthly']);
  const price = classNames('text-head-bold-l',styles['m-trkclStatic__price']);
  const gb = classNames('text-head-bold-l',styles['m-trkclStatic__gb']);
  const priceText = classNames(styles['m-trkclStatic__priceText']);
  const priceText1 = classNames(styles['m-trkclStatic__priceText1']);
  const priceDiv = classNames(styles['m-trkclStatic__priceDiv']);
  const staticBtn = classNames(
    'text-body-regular',
    styles['m-trkclStatic__staticBtn']
  );
  const welcomePackages = classNames(
    'text-head-bold-xs',
    styles['m-trkclStatic__welcome']
  );
  return (
    <div className={staticClasses}>
      <span className={filterArea}>
        <span className={classNames('text-body-small')}>
          {staticObject?.filterText}
        </span>
      </span>
      <div className={welcomePackages}>{staticObject?.welcomeText}</div>
      <div className={packageDetail}>
        <div>
          <div className={monthly}>{staticObject?.monthlyTitle}</div>
          <div className={priceText}>
            <div className={price}>{staticObject?.price}</div><span className={classNames('text-body-large-regular')}>TL’den</span>
            <div className={priceDiv}>{staticObject?.priceText}</div>
          </div>
        </div>
        <div className={priceText1}>
          <div>
            <div className={gb}>{staticObject?.gb}</div>
            <div>{staticObject?.gbText}</div>
          </div>
        </div>
      </div>
      {/* <AtomButton
        onClick={onClick}
        text={staticObject?.btnText}
        className={staticBtn}
      /> */}
    </div>
  );
}

export default ListMCard;
