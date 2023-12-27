import styles from './molecule-order-box.module.scss';
import classNames from 'classnames';
import IconCircle from '@others/icons/IconCircle';
import {AtomIcon} from '@atoms';
import useMobile from '@others/hooks/useMobile';
import { OrderBoxProps } from './types/order-box-interfaces';

export function MoleculeOrderBox(props: OrderBoxProps) {
  const {
    className,
    packageName,
    packageAmountTitle,
    phone,
    price,
    productTitle,
    phoneTitle,
    type,
  } = props;

  const isMobile = useMobile();

  return (
    <div className={classNames(styles['m-trkclApp-orderBox'], className)}>
      <div className={classNames(styles['m-trkclApp-orderBox__orderBox'])}>
        <span
          className={classNames(
            'text-body-small',
            styles['m-trkclApp-orderBox__orderBox--title']
          )}
        >
          {productTitle}
        </span>
        <span
          className={classNames(
            'text-body-large-regular',
            styles['m-trkclApp-orderBox__orderBox--content']
          )}
        >
          {packageName}
        </span>
      </div>
      {type == 'TL' && (
        <div className={classNames(styles['m-trkclApp-orderBox__orderBox'])}>
          <span
            className={classNames(
              'text-body-small',
              styles['m-trkclApp-orderBox__orderBox--title']
            )}
          >
            {packageAmountTitle}
          </span>
          <div
            className={classNames(
              'text-body-large-regular',
              styles['m-trkclApp-orderBox__orderBox--content']
            )}
          >
            {!isMobile ? (
              <span
                className={classNames(
                  styles['m-trkclApp-orderBox__orderBox--content-icon']
                )}
              >
                <AtomIcon className={classNames('')} icon={<IconCircle />} />
              </span>
            ) : (
              ''
            )}

            <span
              className={classNames(
                styles['m-trkclApp-orderBox__orderBox--content-price']
              )}
            >
              {price}
            </span>
            <span>{type}</span>
          </div>
        </div>
      )}
      <div className={classNames(styles['m-trkclApp-orderBox__orderBox'])}>
        <span
          className={classNames(
            'text-body-small',
            styles['m-trkclApp-orderBox__orderBox--title']
          )}
        >
          {phoneTitle}
        </span>
        <span
          className={classNames(
            'text-body-large-regular',
            styles['m-trkclApp-orderBox__orderBox--content']
          )}
        >
          {phone}
        </span>
      </div>
    </div>
  );
}

export default MoleculeOrderBox;
