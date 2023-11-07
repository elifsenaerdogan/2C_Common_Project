import styles from './atom-price-box.module.scss';
import classNames from 'classnames';
import { PageTypes } from '@others/enums/pageTypes';
import { PriceBoxProps } from './types/price-box-interfaces';

export function AtomPriceBox(props: PriceBoxProps) {
  const { className, item } = props;

  const priceBoxClasses = classNames(
    styles[`a-trkclApp-price-box`],
    {
      [styles['a-trkclApp-price-box--active']]: item.isActive,
    },
    className
  );
  return (
    <div className={priceBoxClasses} {...props}>
      {item.price ? (
        <p className={classNames('text-head-bold-xs')}>
          {item.price}
          <sub className={classNames('text-legal-bold')}>{PageTypes.TL}</sub>
        </p>
      ) : (
        <></>
      )}
    </div>
  );
}
export default AtomPriceBox;
