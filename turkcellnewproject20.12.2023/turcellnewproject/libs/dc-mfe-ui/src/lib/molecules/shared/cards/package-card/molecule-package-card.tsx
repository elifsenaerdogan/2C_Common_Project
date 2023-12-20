import styles from './molecule-package-card.module.scss';
import { RadioButtonEnum } from '../../../tl-topup/radio-button/types/radio-button-enums';
import { AtomRadioButtonCartType, AtomImage, AtomIcon } from '@atoms';
import {
  Companies,
  PackageCardData,
  PackageCardProps,
} from './types/package-card-interfaces';
import classNames from 'classnames';
import { Card, Col, Radio, Row } from 'antd';
import useMobile from '@others/hooks/useMobile';
import { useState } from 'react';
import { IconsCellular, IconsMail, IconsTelephone } from '@others/icons';
import PackageCardMobile from './mobile';
import { createStyleObject } from '@others/helpers';
import Bip from '@others/assets/images/package-card/bip.webp';
import Fizy from '@others/assets/images/package-card/muzik.webp';
import Abroad from '@others/assets/images/package-card/yurtdisi.webp';
import LifeBox from '@others/assets/images/package-card/akilli-depo.webp';
import Tv from '@others/assets/images/package-card/tv.webp';
import Turkcell from '@others/assets/images/package-card/platin.webp';

export interface BenefitIcons {
  [key: string]: JSX.Element;
}

export interface CompanyIcons {
  [key: string]: any;
}

export function MoleculePackageCard(props: PackageCardProps) {
  const {
    className,
    outClickStatus,
    wrapperClassName,
    dataList,
    defaultValue,
  } = props;
  const [selectedValue, setSelectedValue] = useState<number>(0);
  const isMobile = useMobile();

  const dynamicBenefitIcons: BenefitIcons = {
    cellular: <IconsCellular />,
    mail: <IconsMail />,
    telephone: <IconsTelephone />,
  };

  const dynamicCompanyIcons: CompanyIcons = {
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
          <Col span={24 / filteredBenefits?.length} key={i}>
            {benefit?.icon && (
              <AtomIcon
                style={{ fontSize: '1.25rem' }}
                icon={dynamicBenefitIcons[benefit?.icon]}
              />
            )}
            <div
              className={classNames(
                'text-head-bold-s',
                styles['m-trkclApp-packageCard__desktop--content-desc-detail']
              )}
            >
              {benefit?.value}
              <div className={classNames('text-legal-bold')}>
                {benefit?.unitValue}
              </div>
            </div>

            <div
              className={classNames(
                'text-captions-regular',
                styles['m-trkclApp-packageCard__desktop--content-desc-type']
              )}
            >
              {benefit?.name.charAt(0).toUpperCase() +
                benefit?.name.slice(1).toLowerCase()}
            </div>
          </Col>
        );
      }
    });

    return result;
  };

  const onClick = (item: PackageCardData) => {
    outClickStatus && outClickStatus(item);
    setSelectedValue(item?.packageId);
  };

  const dynamicCard = (item: PackageCardData, key: number) => {
    return (
      <div>
        {isMobile ? (
          <PackageCardMobile item={item} key={key} />
        ) : (
          <Card
            bodyStyle={{ height: '100%' }}
            key={key}
            className={classNames(styles['m-trkclApp-packageCard'], className)}
          >
            <div
              className={classNames(styles['m-trkclApp-packageCard__desktop'])}
            >
              <div
                className={classNames(
                  styles['m-trkclApp-packageCard__desktop--headBackground']
                )}
                style={createStyleObject(item?.style)}
              ></div>
              <div
                className={classNames(
                  styles['m-trkclApp-packageCard__desktop--content']
                )}
              >
                <div
                  className={classNames(
                    'text-body-large-bold',
                    styles['m-trkclApp-packageCard__desktop--content-title']
                  )}
                >
                  <span>{item.packageName}</span>
                </div>
                <div
                  className={classNames(
                    styles['m-trkclApp-packageCard__desktop--content-desc']
                  )}
                >
                  {item?.benefits?.find(
                    (benefit) => benefit.type === 'OTHER'
                  ) ? (
                    <div className="text-body-small">
                      {
                        item?.benefits?.find(
                          (benefit) => benefit.type === 'OTHER'
                        )?.value
                      }
                    </div>
                  ) : (
                    <Row>{getFilteredBenefits(item)}</Row>
                  )}
                </div>
                <div
                  className={classNames(
                    styles['m-trkclApp-packageCard__desktop--content-images']
                  )}
                >
                  {item?.companies?.map((item: Companies, key: number) => (
                    <div
                      className={classNames(
                        styles[
                          'm-trkclApp-packageCard__desktop--content-images-image'
                        ]
                      )}
                      key={key}
                    >
                      <AtomImage
                        key={key}
                        src={dynamicCompanyIcons[item?.companyName]}
                        alt={item?.companyName}
                        width={20}
                        height={20}
                      />
                    </div>
                  ))}
                </div>

                <div
                  className={classNames(
                    styles['m-trkclApp-packageCard__desktop--content-footer']
                  )}
                >
                  <span className={classNames('text-head-bold-xs')}>
                    {item?.price}
                    <span
                      className={classNames(
                        'text-legal-bold',
                        styles[
                          'm-trkclApp-packageCard__desktop--content-footer-type'
                        ]
                      )}
                    >
                      {item?.priceUnit}
                      {item?.priceTime &&
                        `/${item?.priceTime} ${item?.priceTimeUnit}`}
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </Card>
        )}
      </div>
    );
  };

  return (
    <Radio.Group style={{ width: '100%' }} defaultValue={defaultValue}>
      <Row
        gutter={!isMobile ? [28, 8] : [0, 0]}
        justify="space-between"
        className={classNames(styles['rowClassNames'])}
      >
        {dataList?.map((product: PackageCardData, index: number) => {
          return (
            <Col
              md={12}
              lg={8}
              className={classNames(styles['colClassName'])}
              key={index}
            >
              <AtomRadioButtonCartType
                key={index}
                type={RadioButtonEnum.CART}
                value={product.packageId}
                cart={dynamicCard(product, index)}
                onClick={() => onClick(product)}
                currentCheckedValue={selectedValue || defaultValue}
                yellowBackgroundCircle={true}
                position="top-right"
                wrapperClassName={
                  !isMobile
                    ? classNames(styles['desktopShadow'], wrapperClassName)
                    : classNames(styles['mobileShadow'], wrapperClassName)
                }
              />
            </Col>
          );
        })}
      </Row>
    </Radio.Group>
  );
}

export default MoleculePackageCard;
