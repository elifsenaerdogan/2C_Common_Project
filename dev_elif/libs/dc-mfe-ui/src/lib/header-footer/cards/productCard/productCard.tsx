import styles from './product.module.scss';
import Carousel from '../../carousel/carousel';
import Card from '../template/card';
import IconsFavorite from '@others/icons/IconsFavorite';
import { Popover } from 'antd';
import {
  CardPriceProps,
  CardProps,
  CarouselImagesType,
} from '@others/interfaces';
import { CardTexts, CardType } from '@others/enums/cardTypes';
import { cardType } from '@others/typeDeclarations/cardTypes';

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

const ProductCard = (props: ProductCardProps) => {
  const {
    productData,
    cardType = CardType.VERTICAL,
    wrapperClassName = '',
  } = props;
  const isVertical = cardType === CardType.VERTICAL;
  const bodyStyle = {
    padding: isVertical ? '2.75rem 1rem 0' : '1rem 1rem 0.5625rem 0',
    height: isVertical ? '20.875rem' : 'auto',
  };
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
        className={`${isVertical ? 'text-body-large-bold' : 'text-body-bold'} ${
          index === 0
            ? styles.trkclAppPriceBlueWrapper
            : styles.trkclAppPriceDarkWrapper
        } ${!isVertical ? styles.trkclAppProductCardHorizontalPrice : ''}`}
        key={price?.id}
      >
        {price?.amount}
        <span className={styles.trkclAppPriceCurrency}>{price?.currency}</span>
      </div>
    ));

  const content = (
    <p className={styles.trkclAppProductCardPopoverContent}>
      {productData?.favPopoverText || CardTexts.ADD_TO_FAVORITE}
    </p>
  );

  return (
    <Card
      className={`${styles.trkclAppProductCard} ${wrapperClassName}`}
      actions={action}
      bodyStyle={bodyStyle || props.bodyStyle}
      {...props}
    >
      {isVertical ? (
        <>
          <span className={styles.trkclAppProductCardHeader}>
            {/* TO DO: Should add fav icon with yellow padding && isFav condition */}
            <Popover trigger="hover" content={content} placement="bottom">
              <IconsFavorite
                className={styles.trkclAppProductCardFavIcon}
                width={30}
                height={30}
              />
            </Popover>
          </span>
          <div className={styles.trkclAppProductCardContent}>
            <Carousel images={productData?.images || []} />
          </div>
          <div
            className={`text-body-large-bold ${styles.trkclAppProductCardTitle}`}
          >
            {productData?.title}
          </div>
        </>
      ) : (
        <div className={styles.trkclAppProductCardHorizontalWrapper}>
          <div className={styles.trkclAppProductCardImage}>
            <img
              src={productData?.image}
              className={styles.trkclAppProductCardImage}
            />
          </div>
          <div
            className={`text-captions-bold ${styles.trkclAppProductCardHorizontalTitle}`}
          >
            {productData?.title}
          </div>
          <span className={styles.trkclAppProductCardFavIconWrapper}>
            {/* TO DO: Should add fav icon with yellow padding && isFav condition */}
            <Popover trigger="hover" content={content} placement="bottom">
              <IconsFavorite
                className={styles.trkclAppProductCardFavIcon}
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

export default ProductCard;
