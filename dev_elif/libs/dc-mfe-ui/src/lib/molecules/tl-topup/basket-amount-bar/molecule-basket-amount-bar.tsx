import styles from './molecule-basket-amount-bar.module.scss';
import classNames from 'classnames';
import { AtomButton } from '@atoms';
import { useMobile } from 'libs/dc-mfe-ui/src/others/hooks';
import { BasketAmountBarProps } from './types/basket-amount-bar-interfaces';
import { PageTypes } from '@others/enums/pageTypes';

export function MoleculeBasketAmountBar(props: BasketAmountBarProps) {
  const {
    className,
    paymentTotal,
    desc,
    onClick,
    type,
    balance,
    reference,
    basketContainerClasses,
  } = props;
  const isMobile = useMobile();
  const isLogin = false; //Bu işlem yerine authenticaton helperi kullanılacak.

  const handleOnClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    onClick && onClick(event);
    // submit payment form
    reference && reference.current?.submitForm();
  };

  const ifIsMobileAndPackage = () => {
    if (isMobile && type == PageTypes.TL) {
      return isLogin ? (
        <div
          className={classNames(styles['m-trkclApp-basketAmountBar__userInfo'])}
        >
          <span
            className={classNames(
              'text-body-small',
              styles[
                'm-trkclApp-basketAmountBar__userInfo--currentSelectedType'
              ]
            )}
          >
            Bakiyeniz
          </span>
          <span
            className={classNames(
              'text-body-small-bold',
              styles['m-trkclApp-basketAmountBar__userInfo--currenBalance']
            )}
          >
            {balance} TL
          </span>
        </div>
      ) : paymentTotal ? (
        <div
          className={classNames(styles['m-trkclApp-basketAmountBar__userInfo'])}
        >
          <span
            className={classNames(
              'text-body-small',
              styles[
                'm-trkclApp-basketAmountBar__userInfo--currentSelectedType'
              ]
            )}
          >
            Yüklenecek Tutar
          </span>
          <span
            className={classNames(
              'text-body-small-bold',
              styles['m-trkclApp-basketAmountBar__userInfo--currenBalance']
            )}
          >
            {paymentTotal} TL
          </span>
        </div>
      ) : (
        ''
      );
    }
  };

  const basketAmountWrapper = classNames(
    styles['m-trkclApp-basketAmountBar__paymentSection'],
    className
  );

  return (
    <div className={classNames(styles['m-trkclApp-basketAmountBar'])}>
      {ifIsMobileAndPackage()}

      <div className={basketAmountWrapper}>
        <div
          className={classNames(
            styles['m-trkclApp-basketAmountBar__paymentSection--container'],
            basketContainerClasses
          )}
        >
          <div
            className={classNames(
              styles['m-trkclApp-basketAmountBar__paymentSection--paymentInfo']
            )}
          >
            <span
              className={classNames(
                isMobile ? 'text-body-small' : 'text-body-regular',
                styles[
                  'm-trkclApp-basketAmountBar__paymentSection--paymentInfo-title'
                ]
              )}
            >
              {type == PageTypes.PACKAGE ? 'Paket Tutarı' : 'Ödeme Tutarı'}
            </span>
            {paymentTotal ? (
              <span
                className={classNames(
                  isMobile ? 'text-body-small-bold' : 'text-head-bold-s',
                  styles[
                    'm-trkclApp-basketAmountBar__paymentSection--paymentInfo-price'
                  ]
                )}
              >
                {paymentTotal}
                <span
                  className={classNames(
                    'text-body-small-bold',

                    styles[
                      'm-trkclApp-basketAmountBar__paymentSection--paymentInfo-price-type'
                    ]
                  )}
                >
                  TL
                </span>
              </span>
            ) : (
              <span
                className={classNames(
                  isMobile ? 'text-body-small-bold' : 'text-body-bold',
                  styles[
                    'm-trkclApp-basketAmountBar__paymentSection--paymentInfo-desc'
                  ]
                )}
              >
                {desc}
              </span>
            )}
          </div>
          <div>
            <AtomButton
              text={'Devam Et'}
              variant="secondary"
              className={classNames(
                'text-body-regular',
                styles['m-trkclApp-basketAmountBar__button']
              )}
              disabled={paymentTotal ? false : true}
              onClick={(event) => handleOnClick(event)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MoleculeBasketAmountBar;
