import styles from './package.module.scss';
import Card from '../template/card';
import { CardProps } from '@others/interfaces';
import { Progress } from 'antd';
import { CardTexts } from '@others/enums/cardTypes';
import { AtomButton } from '@atoms';
import { packageCardVariantTypes } from '@others/typeDeclarations/cardTypes';
import { getStrokeColor } from '@others/helpers';

interface PackageCardsProps extends CardProps {
  packageData: {
    headerTitles: string[];
    bodyTitle: string;
    bodyDesc: string;
    progressContent: {
      upperText: string;
      rate: number;
      midText: string;
      lowerText: string;
      size?: number;
      width?: number;
    };
    footerUpperText: string;
    footerLowerText: string;
    noPackageText?: string;
    noPackageButton?: string;
  };
  packageVariant?: packageCardVariantTypes;
  header?: React.ReactNode;
  body?: React.ReactNode;
  footer?: React.ReactNode;
  progressChildren?: React.ReactNode;
}

const PackageCard = (props: PackageCardsProps) => {
  const {
    packageData,
    packageVariant = 'trkclAppPackageCard_MB',
    header,
    body,
    footer,
    wrapperClassName,
    progressChildren,
  } = props;
  const variantColor = getStrokeColor(packageVariant);

  return (
    <div className={`${styles.trkclAppPackageCardWrapper} ${wrapperClassName}`}>
      <Card bodyStyle={{ padding: 0 }} {...props}>
        {!packageData?.progressContent?.rate ? (
          <div className={styles.trkclAppNoPackageCardWrapper}>
            <p
              className={`text-body-bold ${styles.trkclAppNoPackageCardTitle}`}
            >
              {packageData?.noPackageText || CardTexts.NO_PACKAGE}
            </p>
            <AtomButton
              variant="secondary"
              text={packageData?.noPackageButton || CardTexts.BUY_PACKAGE}
            ></AtomButton>
          </div>
        ) : (
          <>
            {header ? (
              header
            ) : (
              <div
                className={`${styles.trkclAppPackageCardHeader} ${styles[packageVariant]}`}
              >
                {packageData?.headerTitles?.map((title, index) => (
                  <div
                    className={`text-body-regular ${styles.trkclAppPackageCardTitle}`}
                    key={index}
                  >
                    {title}
                  </div>
                ))}
              </div>
            )}
            {body ? (
              body
            ) : (
              <div className={styles.trkclAppPackageCardBody}>
                <p
                  className={`text-captions-bold ${styles.trkclAppPackageCardPackageName}`}
                >
                  {packageData?.bodyTitle}
                </p>
                <Progress
                  size={packageData?.progressContent?.size || 110}
                  type="circle"
                  strokeWidth={packageData?.progressContent?.width || 8}
                  percent={packageData?.progressContent?.rate}
                  format={() =>
                    progressChildren ? (
                      progressChildren
                    ) : (
                      <div className={`${styles.trkclAppProgressContent}`}>
                        <p
                          className={`text-captions-bold ${styles.trkclAppProgressInfo}`}
                        >
                          {packageData?.progressContent?.upperText}
                        </p>
                        <span
                          className={`text-head-bold-s ${styles.trkclAppProgressRate}`}
                        >
                          {packageData?.progressContent?.midText}
                        </span>
                        <p
                          className={`text-captions-bold ${styles.trkclAppProgressInfo}`}
                        >
                          {packageData?.progressContent?.lowerText}
                        </p>
                      </div>
                    )
                  }
                  strokeColor={variantColor}
                />
                <p
                  className={`text-captions-regular ${styles.trkclAppPackageCardDesc}`}
                >
                  {packageData?.bodyDesc}
                </p>
              </div>
            )}
            {footer ? (
              footer
            ) : (
              <div className={styles.trkclAppPackageCardFooter}>
                <div
                  className={`text-legal-regular ${styles.trkclAppPackageCardDate}`}
                >
                  {packageData?.footerUpperText}
                </div>
                <div className="text-captions-bold">
                  {packageData?.footerLowerText}
                </div>
              </div>
            )}
          </>
        )}
      </Card>
    </div>
  );
};

export default PackageCard;
