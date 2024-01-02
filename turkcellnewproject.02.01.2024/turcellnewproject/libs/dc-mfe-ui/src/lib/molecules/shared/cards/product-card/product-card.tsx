import styles from './product-card.module.scss';
import Card from '../template/card';
import IconsFavorite from '@others/icons/IconsFavorite';
import { Popover } from 'antd';
import {
  CardPriceProps,
  CardProps,
  CarouselImagesType,
} from '@others/interfaces';
import classNames from 'classnames';
import Carousel from '../../../../header-footer/carousel/carousel';
import { cardType } from '@others/typeDeclarations/cardTypes';
import { CardTexts, CardType } from '@others/enums/cardTypes';

interface ProductCardProps extends CardProps {
  productData: {
    title: string;
    desc: string;
    images: CarouselImagesType[];
    image: string;
    noPriceText?: string;
    favPopoverText?: string;
    price?: CardPriceProps[];
  };
  cardType?: cardType;
  header?: React.ReactNode;
  body?: React.ReactNode;
  footer?: React.ReactNode[];
}

export const MoleculeProductCard = (props: ProductCardProps) => {
  const {
    productData,
    cardType = CardType.VERTICAL,
    wrapperClassName = '',
  } = props;
  console.log('productData', productData);
  const isVertical = cardType === CardType.VERTICAL;
  const bodyStyle = {
    padding: isVertical ? '2.75rem 1rem 0' : '1rem 1rem 0.5625rem 0',
    height: isVertical ? '20.875rem' : 'auto',
  };

  const productCardWrapperClasses = classNames(
    styles['m-trkclAppProductCard'],
    `${wrapperClassName}`
  );
  const productCardHeaderClasses = classNames(
    styles['m-trkclAppProductCard__header']
  );
  const productCardFavIconClasses = classNames(
    styles['m-trkclAppProductCard__favIcon']
  );
  const productCardContentClasses = classNames(
    styles['m-trkclAppProductCard__content']
  );
  const productCardTitleClasses = classNames(
    'text-body-large-bold',
    styles['m-trkclAppProductCard__title']
  );
  const productCardHorizontalWrapperClasses = classNames(
    styles['m-trkclAppProductCard__horizontalWrapper']
  );
  const productCardImageClasses = classNames(
    styles['m-trkclAppProductCard__image']
  );
  const productCardHorizontalTitleClasses = classNames(
    'text-captions-bold ',
    styles['m-trkclAppProductCard__horizontalWrapper--title']
  );
  const productCardFavIconWrapperClasses = classNames(
    'text-captions-bold ',
    styles['m-trkclAppProductCard__horizontalWrapper--favIconWrapper']
  );
  const productCardPriceCurrencyClasses = classNames(
    styles['m-trkclAppPriceCurrency']
  );
  const productCardTextForVerticalClasses = isVertical
    ? classNames('text-body-large-bold')
    : classNames('text-body-bold');
  const productCardPriceForHorizontalClasses = !isVertical
    ? classNames(
        styles['m-trkclAppProductCard__horizontalWrapper--horizontalPrice']
      )
    : classNames('');

  let action = [];
  if (!productData?.title) return <></>;
  if (!productData?.price)
    action = [
      <div key="no-sale">
        {productData?.noPriceText || CardTexts.PRODUCT_NOPRICE}
      </div>,
    ];
  else
    action = productData?.price?.map((price, index) => (
      <div
        className={`${productCardTextForVerticalClasses} ${
          index === 0
            ? styles.trkclAppPriceBlueWrapper
            : styles.trkclAppPriceDarkWrapper
        } ${productCardPriceForHorizontalClasses}`}
        key={price?.id}
      >
        {price?.amount}
        <span className={productCardPriceCurrencyClasses}>
          {price?.currency}
        </span>
      </div>
    ));

  const content = (
    <p className={styles.trkclAppProductCardPopoverContent}>
      {productData?.favPopoverText || CardTexts.ADD_TO_FAVORITE}
    </p>
  );

  return (
    <Card
      className={productCardWrapperClasses}
      actions={action}
      bodyStyle={bodyStyle || props.bodyStyle}
      {...props}
    >
      {isVertical ? (
        <>
          <span className={productCardHeaderClasses}>
            {/* TO DO: Should add fav icon with yellow padding && isFav condition */}
            <Popover trigger="hover" content={content} placement="bottom">
              <IconsFavorite
                className={productCardFavIconClasses}
                width={30}
                height={30}
              />
            </Popover>
          </span>
          <div className={productCardContentClasses}>
            <Carousel images={productData?.images || []} />
          </div>
          <div className={productCardTitleClasses}>{productData?.title}</div>
        </>
      ) : (
        <div className={productCardHorizontalWrapperClasses}>
          <div className={productCardImageClasses}>
            <img src={productData?.image} className={productCardImageClasses} />
          </div>
          <div className={productCardHorizontalTitleClasses}>
            {productData?.title}
          </div>
          <span className={productCardFavIconWrapperClasses}>
            {/* TO DO: Should add fav icon with yellow padding && isFav condition */}
            <Popover trigger="hover" content={content} placement="bottom">
              <IconsFavorite
                className={productCardFavIconClasses}
                width={30}
                height={30}
              />
            </Popover>
          </span>
        </div>
      )}
    </Card>
  );
};

export default MoleculeProductCard;
