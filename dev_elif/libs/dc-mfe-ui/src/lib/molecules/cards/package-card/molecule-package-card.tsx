import styles from './molecule-package-card.module.scss';
import { RadioButtonEnum } from '../../../molecules/tl-topup/radio-button/types/radio-button-enums';
import { AtomRadioButtonCartType } from '@atoms';
import { PackageCardProps } from './types/package-card-interfaces';
import classNames from 'classnames';
import { Card, Radio } from 'antd';
import useMobile from '@others/hooks/useMobile';
import { AtomImage } from '@atoms';
import AdvantageImages from '@others/assets/images/contents-copy.png';
import { AtomIcon } from '@atoms';
import { PackageDetails } from './enums/package-card-enums';
import { useState } from 'react';

export function MoleculePackageCard(props: PackageCardProps) {
  const {
    onChange,
    packageList,
    className,
    outClickStatus,
    wrapperClassName,
    headerVariant,
  } = props;
  const [selectedValue, setSelectedValue] = useState('');

  const handleOnChange = (e: any) => {
    onChange && onChange(e.target.value);
    setSelectedValue(e.target.value);
  };

  const onClick = (item: object) => {
    outClickStatus && outClickStatus(item);
  };

  const isMobile = useMobile();
  const cardHeadLinear = classNames(
    styles[`m-trkclApp-packageCard__desktop--headBackground-${headerVariant}`]
  );
  const packageConstContent = (item: any, key: number) => {
    return (
      <>
        {isMobile ? (
          <Card
            key={key}
            className={classNames(
              styles['m-trkclApp-packageCardMobile'],
              className
            )}
          >
            <div
              className={classNames(
                styles['m-trkclApp-packageCardMobile__headBackground']
              )}
            ></div>
            <div
              className={classNames(
                styles['m-trkclApp-packageCardMobile__mobileContent']
              )}
            >
              <div
                className={classNames(
                  'text-body-large-bold',
                  styles['m-trkclApp-packageCardMobile__mobileContent--title']
                )}
              >
                <span>{item.title}</span>
                <AtomImage src={AdvantageImages} alt="" />
              </div>
              <div
                className={classNames(
                  styles['m-trkclApp-packageCardMobile__mobileContent--desc']
                )}
              >
                {item.packageProduct.map((packageItem: any, index: number) => (
                  <span
                    className={classNames('text-body-small-bold')}
                    key={index}
                  >
                    {packageItem.packageTotal}&nbsp;
                    {packageItem.packageDetail}&nbsp;
                    <span
                      className={classNames(
                        'text-body-small',
                        styles[
                          'm-trkclApp-packageCardMobile__mobileContent--desc-type'
                        ]
                      )}
                    >
                      {packageItem.packageType}
                    </span>
                    &nbsp;
                  </span>
                ))}
              </div>
              <div
                className={classNames(
                  styles['m-trkclApp-packageCardMobile__mobileContent--footer']
                )}
              >
                <span className={classNames('text-body-large-bold')}>
                  {item.price}{' '}
                  <span
                    className={classNames(
                      'text-legal-bold',
                      styles[
                        'm-trkclApp-packageCardMobile__mobileContent--footer-count'
                      ]
                    )}
                  >
                    {PackageDetails.TL_AY}
                  </span>
                </span>
              </div>
            </div>
          </Card>
        ) : (
          <Card
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
              >
                <div className={cardHeadLinear}></div>
              </div>
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
                  <span>{item.title}</span>
                </div>
                <div
                  className={classNames(
                    styles['m-trkclApp-packageCard__desktop--content-desc']
                  )}
                >
                  {item.packageProduct.map((productItem: any, key: number) => (
                    <div key={key}>
                      <AtomIcon
                        style={{ fontSize: '24px' }}
                        icon={productItem.icon}
                      />
                      <span
                        className={classNames(
                          'text-head-bold-s',
                          styles[
                            'm-trkclApp-packageCard__desktop--content-desc-detail'
                          ]
                        )}
                      >
                        {productItem.packageTotal}
                        <span className={classNames('text-legal-bold')}>
                          {productItem.packageDetail}
                        </span>
                      </span>

                      <span
                        className={classNames(
                          'text-captions-regular',
                          styles[
                            'm-trkclApp-packageCard__desktop--content-desc-type'
                          ]
                        )}
                      >
                        {productItem.packageType}
                      </span>
                    </div>
                  ))}
                </div>
                <div
                  className={classNames(
                    styles['m-trkclApp-packageCard__desktop--content-images']
                  )}
                >
                  {item.advantages.map((item: any, key: number) => (
                    <div
                      className={classNames(
                        styles[
                          'm-trkclApp-packageCard__desktop--content-images-image'
                        ]
                      )}
                    >
                      <AtomImage src={item.icon} alt="xx" />
                    </div>
                  ))}
                </div>

                <div
                  className={classNames(
                    styles['m-trkclApp-packageCard__desktop--content-footer']
                  )}
                >
                  <span className={classNames('text-head-bold-xs')}>
                    {item.price}
                    <span
                      className={classNames(
                        'text-legal-bold',
                        styles[
                          'm-trkclApp-packageCard__desktop--content-footer-type'
                        ]
                      )}
                    >
                      {PackageDetails.TL_AY}
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </Card>
        )}
      </>
    );
  };

  return (
    <Radio.Group onChange={(e) => handleOnChange(e)} value={selectedValue}>
      {packageList.map((item: any, key: number) => (
        <>
          <AtomRadioButtonCartType
            key={key}
            type={RadioButtonEnum.CART}
            value={item.value}
            cart={packageConstContent(item, key)}
            onClick={() => onClick(item)}
            currentCheckedValue={selectedValue}
            yellowBackgroundCircle={true}
            position="top-right"
            wrapperClassName={
              !isMobile
                ? classNames(styles['desktopShadow'], wrapperClassName)
                : classNames(styles['mobileShadow'], wrapperClassName)
            }
          />
        </>
      ))}
    </Radio.Group>
  );
}

export default MoleculePackageCard;
