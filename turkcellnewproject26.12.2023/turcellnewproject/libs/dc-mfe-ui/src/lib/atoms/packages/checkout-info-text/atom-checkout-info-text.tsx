import styles from './atom-checkout-info-text.module.scss';
import classNames from 'classnames';
import { useMobile } from '@others/hooks';
import { AtomButton } from '../../button/atom-button';
import { AtomCheckoutProps } from './types/checkout-interfaces';


export function AtomCheckoutInfoText(props: AtomCheckoutProps) {
  const {checkoutElement, onClick} = props;
  const isMobile = useMobile();
  const checkoutClasses = classNames(styles['a-trkclCheckout']);
  const checkoutMobileClasses = classNames(styles['a-trkclCheckoutMobile'])
  const btnClasses = classNames(styles['a-trkclCheckout__btnClasses']);
  const firstMonth = classNames(
    'text-body-regular',
    styles['a-trkclCheckout__firstMonth']
  );
  const secondDiv = classNames(styles['a-trkclCheckout__secondDiv']);
  const firstDiv = classNames(styles['a-trkclCheckout__firstDiv']);
  const firstPrice = classNames(
    'text-head-bold-l',
    styles['a-trkclCheckout__firstPrice']
  );
  const nextPrice = classNames(
    'text-body-bold',
    styles['a-trkclCheckout__nextPrice']
  );
  const tl = classNames('text-captions-bold', styles['a-trkclCheckout__tl']);
  const textPriceDiv = classNames(styles['a-trkclCheckoutMobile__textPriceDiv'])
  return (
    <div>
      {isMobile ? (
        <div className={checkoutMobileClasses}>
          <div className={textPriceDiv}>
            <div className={firstDiv}>
              <span className={firstMonth}>{checkoutElement?.firstMonth}</span>
              <span className={firstPrice}>{checkoutElement?.firstMonthPrice}</span>
              <span className={tl}>{'TL'}</span>
            </div>
            <div className={secondDiv}>
              <span className={firstMonth}>{checkoutElement?.nextMonth}</span>
              <span className={nextPrice}>{`${checkoutElement?.nextMonthPrice} TL`}</span>
            </div>
          </div>
          <AtomButton text="Hemen Al" className={btnClasses} onClick={onClick} />
        </div>
      ) : (
        <div className={checkoutClasses}>
          <div>
            <div className={firstDiv}>
              <span className={firstMonth}>{checkoutElement?.firstMonth}</span>
              <span className={firstPrice}>{checkoutElement?.firstMonthPrice}</span>
              <span className={tl}>{'TL'}</span>
            </div>
            <div className={secondDiv}>
              <span className={firstMonth}>{checkoutElement?.nextMonth}</span>
              <span className={nextPrice}>{`${checkoutElement?.nextMonthPrice} TL`}</span>
            </div>
          </div>
          <AtomButton text="Hemen Al" className={btnClasses} onClick={onClick} />
        </div>
      )}
    </div>
  );
}

export default AtomCheckoutInfoText;
