import styles from './service.module.scss';
import Card from '../template/card';
import { CardPriceProps, CardProps } from '@others/interfaces';
import { CardTexts } from '@others/enums/cardTypes';
import { serviceCardVariantTypes } from '@others/typeDeclarations/cardTypes';

interface ServiceCardProps extends CardProps {
  serviceData: {
    title: string;
    desc: string;
    freeText?: string;
    price?: CardPriceProps[];
  };
  serviceVariant?: serviceCardVariantTypes;
  header?: React.ReactNode;
  body?: React.ReactNode;
}

const ServiceCard = (props: ServiceCardProps) => {
  const {
    serviceData,
    serviceVariant = 'trkclAppServiceCard_yonlendir',
    header,
    body,
    wrapperClassName,
  } = props;
  let action = [];
  if (!serviceData?.title) return <></>;
  if (!serviceData?.price)
    action = [
      <div key="no-sale">{serviceData?.freeText || CardTexts.FREE}</div>,
    ];
  else
    action = serviceData?.price?.map((price, index) => (
      <div
        className={
          index === 0
            ? styles.trkclAppPriceBlueWrapper
            : styles.trkclAppPriceDarkWrapper
        }
        key={price.id}
      >
        {price.amount}
        <span className={styles.trkclAppPriceCurrency}>{price.currency}</span>
      </div>
    ));

  return (
    <div className={`${styles.trkclAppServiceCardWrapper} ${wrapperClassName}`}>
      <Card actions={action} bodyStyle={{ padding: 0 }} {...props}>
        {header ? (
          header
        ) : (
          <div
            className={`${styles.trkclAppServiceCardHeader} ${styles[serviceVariant]}`}
          >
            {/*TO DO: Should add opitonal icon when icons defined --> <span className={styles.trkclAppServiceCardIcon}>{icon}</span> */}
            <p className={`text-body-bold ${styles.trkclAppServiceCardTitle}`}>
              {serviceData?.title}
            </p>
          </div>
        )}
        {body ? (
          body
        ) : (
          <div className={styles.trkclAppServiceCardBody}>
            <p className="text-body-small">{serviceData?.desc}</p>
          </div>
        )}
      </Card>
    </div>
  );
};

export default ServiceCard;
