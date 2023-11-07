import { useState } from 'react';
import styles from './molecule-price-box-container.module.scss';
import classNames from 'classnames';
import { AtomPriceBox } from '@atoms';
import {
  PriceBoxData,
  PriceBoxContainerProps,
} from './types/price-box-container-interfaces';

export const PriceBoxContainer = (props: PriceBoxContainerProps) => {
  const {
    wrapperClassName,
    data,
    title = 'Yüklemek istediğiniz tutarı seçin',
    onClick,
  } = props;

  const [priceList, setPriceList] = useState<PriceBoxData[]>(data);

  const handleBoxOnClick = (id: number, item: object) => {
    const newList = priceList.map((item) => {
      item.id === id ? (item.isActive = true) : (item.isActive = false);
      return item;
    });

    setPriceList(newList);

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

  if (!data) return <></>;

  return (
    <div className={priceBoxContainer}>
      <div className={priceBoxContainerTitle}>{title}</div>
      <div className={priceBoxContainerBoxes}>
        {data?.map((item) => (
          <AtomPriceBox
            key={item.id}
            item={item}
            onClick={() => handleBoxOnClick(item.id, item)}
          />
        ))}
      </div>
    </div>
  );
};

export default PriceBoxContainer;
