import React from 'react';
import classNames from 'classnames';
import styles from './molecule-card-extra-info.module.scss';
import { Card, Divider } from 'antd';
import { useMobile } from '@others/hooks';
import { AtomImage } from '@atoms';
import { ICardExtraInfo } from './types/card-extra-info-interfaces';

export function MoleculeCardExtraInfo(props: ICardExtraInfo) {
  const { bankLogo, text, cardTitle, className, ...rest } = props;

  const isMobile = useMobile();

  const cardClassNames = classNames(
    styles['m-card-extra-info'],
    {
      [styles['m-card-extra-info--vertical']]: isMobile,
    },
    className
  );
  const bodyStyle = {
    display: 'flex',
    justifyContent: 'start',
    flexDirection: isMobile ? ('column' as const) : ('row' as const),
    alignItems: isMobile ? 'start' : 'center',
    padding: isMobile ? '0' : '.5rem .9rem',
  };

  // TODO: This class should be edited when the logos are added
  const imgClassNames = classNames(styles['m-card-extra-info__image'], {
    [styles['m-card-extra-info__image--mobile']]: isMobile,
  });
  const titleClassNames = classNames(styles['m-card-extra-info__title']);
  const textClassNames = classNames(styles['m-card-extra-info__text']);
  const cardImgWrapperClassNames = classNames(
    styles['m-card-extra-info__img-wrapper'],
    {
      [styles['m-card-extra-info__img-wrapper--vertical']]: isMobile,
    }
  );
  const imgDividerClassNames = classNames(styles['m-card-extra-info__divider']);

  return (
    <Card className={cardClassNames} bodyStyle={bodyStyle} {...rest}>
      <div className={cardImgWrapperClassNames}>
        {bankLogo?.map((item, index) => (
          <React.Fragment key={index}>
            {index >= 1 && !isMobile && (
              <Divider type="vertical" className={imgDividerClassNames} />
            )}
            <AtomImage
              className={imgClassNames}
              key={index}
              src={item}
              alt="bank-logo"
              width={45}
              height={24}
            />
          </React.Fragment>
        ))}
      </div>
      {isMobile ? <h3 className={titleClassNames}>{cardTitle}</h3> : <></>}
      <div className={textClassNames}>{text}</div>
    </Card>
  );
}

export default MoleculeCardExtraInfo;
