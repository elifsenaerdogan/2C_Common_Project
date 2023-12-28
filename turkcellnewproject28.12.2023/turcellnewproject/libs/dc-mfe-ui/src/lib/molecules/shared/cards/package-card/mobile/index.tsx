import React from 'react';
import classNames from 'classnames';
import styles from './index.module.scss';
import { MobileCardProps } from './mobileCard-interfaces';
import { Card, Col, Row } from 'antd';
import { AtomImage } from '@atoms';
import { createStyleObject } from '@others/helpers';
import {
  Benefits,
  Companies,
  PackageCardData,
} from '../types/package-card-interfaces';
import Bip from '@others/assets/images/package-card/bip.webp';
import Fizy from '@others/assets/images/package-card/muzik.webp';
import Abroad from '@others/assets/images/package-card/yurtdisi.webp';
import LifeBox from '@others/assets/images/package-card/akilli-depo.webp';
import Tv from '@others/assets/images/package-card/tv.webp';
import Turkcell from '@others/assets/images/package-card/platin.webp';

const PackageCardMobile = (props: MobileCardProps) => {
  const { item, className, key } = props;

  const dynamicCompanyIcons = {
    BIP: Bip,
    'TV+': Tv,
    ABROAD: Abroad,
    FIZY: Fizy,
    LIFEBOX: LifeBox,
    TURKCELL: Turkcell,
  };

  const getFilteredBenefits = (card: PackageCardData) => {
    // "INTERNET", "VOICE", "SMS" olanları filtrele
    const filteredBenefits = card?.benefits?.filter((benefit) => {
      return (
        benefit.type === 'INTERNET' ||
        benefit.type === 'VOICE' ||
        benefit.type === 'SMS'
      );
    });
    // Eğer 3'te yoksa "AVANTAJ" olanı ekle
    const avantajBenefit = card?.benefits?.find(
      (benefit) => benefit.type === 'OTHER'
    );
    if (filteredBenefits && filteredBenefits?.length < 1 && avantajBenefit) {
      filteredBenefits.push(avantajBenefit);
    }
    // Sonuçları döndür
    const result = filteredBenefits?.map((benefit, i) => {
      if (benefit.type === 'OTHER') {
        return null;
      } else {
        return (
          <span key={i} className={classNames('text-body-small-bold')}>
            {benefit?.value}
            {'  '}
            {benefit?.unitValue}
            {'  '}
            <span
              className={classNames(
                'text-body-small',
                styles['m-trkclApp-packageCardMobile__mobileContent--desc-type']
              )}
            >
              {benefit?.name.charAt(0).toUpperCase() +
                benefit?.name.slice(1).toLowerCase()}
            </span>
            {'  '}
          </span>
        );
      }
    });

    return result;
  };

  const cardMobileHeadLinear = classNames(
    styles['m-trkclApp-packageCardMobile__headBackground']
  );
  return (
    <Card
      key={key}
      className={classNames(styles['m-trkclApp-packageCardMobile'], className)}
    >
      <div
        className={cardMobileHeadLinear}
        style={createStyleObject(item?.style)}
      ></div>
      <div
        className={classNames(
          styles['m-trkclApp-packageCardMobile__mobileContent']
        )}
      >
        <Row
          className={classNames(
            '.text-body-small-bold',

            styles['m-trkclApp-packageCardMobile__mobileContent--title']
          )}
        >
          <Col span={12}>{item?.packageName}</Col>
          <Col span={12} style={{ textAlign: 'end' }}>
            {item?.companies &&
              item?.companies?.length > 0 &&
              item?.companies?.map((item: Companies, key: number) => (
                <AtomImage
                  className={classNames(
                    styles[
                      'm-trkclApp-packageCardMobile__mobileContent--title-images'
                    ]
                  )}
                  width={28}
                  height={28}
                  key={key}
                  src={dynamicCompanyIcons[item?.companyName]}
                  alt={item?.companyName}
                />
              ))}
          </Col>
        </Row>
        <div
          className={classNames(
            styles['m-trkclApp-packageCardMobile__mobileContent--desc']
          )}
        >
          {item?.benefits?.find(
            (benefit: Benefits) => benefit.type === 'OTHER'
          ) ? (
            <div className="text-body-small">
              {
                item?.benefits?.find(
                  (benefit: Benefits) => benefit.type === 'OTHER'
                )?.value
              }
            </div>
          ) : (
            getFilteredBenefits(item)
          )}
        </div>
        <div
          className={classNames(
            styles['m-trkclApp-packageCardMobile__mobileContent--footer']
          )}
        >
          <span className={classNames('text-body-large-bold')}>
            {item?.price}{' '}
            <span
              className={classNames(
                'text-legal-bold',
                styles[
                  'm-trkclApp-packageCardMobile__mobileContent--footer-count'
                ]
              )}
            >
              {item?.priceUnit}
              {item?.priceTime && `/${item?.priceTime} ${item?.priceTimeUnit}`}
            </span>
          </span>
        </div>
      </div>
    </Card>
  );
};

export default PackageCardMobile;
