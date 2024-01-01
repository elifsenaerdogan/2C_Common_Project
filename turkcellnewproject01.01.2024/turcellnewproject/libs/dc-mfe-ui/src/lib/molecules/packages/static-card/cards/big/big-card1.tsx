import { AtomButton } from '@atoms';
import styles from './big-card.module.scss';
import classNames from 'classnames';
import { MoleculesStaticCardProps } from '../types/card-interfaces';

export function BigCard1(props: MoleculesStaticCardProps) {
  const { staticObject, onClick } = props;
  const staticClasses = classNames(styles['m-trkclStatic1']);
  const filterArea = classNames(styles['m-trkclStatic1__filterArea']);
  const packageDetail = classNames(styles['m-trkclStatic1__packageDetail']);
  const monthly = classNames(
    'text-head-bold-xl',
    styles['m-trkclStatic1__monthly']
  );
  const priceText = classNames(
    'text-body-large-regular',
    styles['m-trkclStatic1__priceText']
  );
  const staticBtn = classNames(
    'text-body-regular',
    styles['m-trkclStatic1__staticBtn']
  );
  const welcomePackages = classNames(
    'text-head-bold-xs',
    styles['m-trkclStatic1__welcome']
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
          <div className={monthly}>
            {staticObject?.gb}
            <span className={classNames('text-body-large-regular')}>{staticObject?.gbText}</span>
          </div>
          <div className={priceText}>{staticObject?.gbText1}</div>
        </div>
      </div>
      <AtomButton
        onClick={onClick}
        text={staticObject?.btnText}
        className={staticBtn}
      />
    </div>
  );
}

export default BigCard1;
