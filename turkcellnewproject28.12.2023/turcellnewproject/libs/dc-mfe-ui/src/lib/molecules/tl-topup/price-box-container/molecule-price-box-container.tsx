import { useState } from 'react';
import styles from './molecule-price-box-container.module.scss';
import classNames from 'classnames';
import { AtomPriceBox } from '@atoms';
import {
  PriceBoxContainerProps,
} from './types/price-box-container-interfaces';
import { PackageCardData } from '../../shared/cards/package-card/types/package-card-interfaces';

export const PriceBoxContainer = (props: PriceBoxContainerProps) => {
  const {
    wrapperClassName,
    data,
    title = 'Yüklemek istediğiniz tutarı seçin',
    onClick,
    defaultId
  } = props;

  const [activeId, setActiveId] = useState<number>(0);
  const handleBoxOnClick = (item: PackageCardData) => {
    setActiveId(item?.packageId);
    onClick && onClick(item);
  };

  const priceBoxContainer = classNames(
    'text-body-bold',
    [styles['m-priceboxContainer']],
    wrapperClassName
  );

  const priceBoxContainerTitle = classNames([
    styles['m-priceboxContainer__title'],
  ]);

  const priceBoxContainerBoxes = classNames([
    styles['m-priceboxContainer__boxes'],
  ]);

  const priceBoxClasses = classNames(styles['m-priceboxContainer__boxes--box']);

  if (!data) return <></>;

  return (
    <div className={priceBoxContainer}>
      <div className={priceBoxContainerTitle}>{title}</div>
      <div className={priceBoxContainerBoxes}>
        {data?.map((item) => (
          <AtomPriceBox
            className={priceBoxClasses}
            key={item.packageId}
            item={item}
            onClick={() => handleBoxOnClick(item)}
            activeId={activeId || defaultId}
          />
        ))}
      </div>
    </div>
  );
};

export default PriceBoxContainer;
