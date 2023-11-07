import classNames from 'classnames';
import styles from './molecule-credit-card.module.scss';
import { Card, Col, Row } from 'antd';
import { AtomImage } from '../../../atoms';
import { CardProps } from './types/credit-card-interface';
import constants from './types/credit-card-constants';

export function CreditCard(props: CardProps) {
  const {
    fullName,
    cardNumber,
    cvv,
    month,
    year,
    backActive,
    bankLogo,
    cardTypeLogo,
    customTitles,
  } = props;

  const {
    fullNameTitle = constants.FULL_NAME,
    fullNamePlaceholder = constants.PLACEHOLDER,
    cardNumberTitle = constants.CARD_NUMBER,
    cardNumberPlaceholder = constants.CARD_NUMBER_PLACEHOLDER,
    cvvPlaceholder = constants.CVV_PLACEHOLDER,
    expirationDateTitle = constants.DATE,
    datePlaceholder = constants.DATE_PLACEHOLDER,
    cvvTitle = constants.CVV,
  } = customTitles || {};

  const bodyStyle = {
    padding: '0',
    border: 'none',
    height: '100%',
  };
  const WrapperClassNames = classNames(styles['m-credit-card']);
  const ContentClassNames = classNames(styles['m-credit-card__content'], {
    [styles['m-credit-card__content-dark']]: cardNumber?.length > 7,
  });
  const FrontSideClassNames = classNames(
    styles['m-credit-card__content--front']
  );
  const CardInformationsClassNames = classNames(
    styles['m-credit-card__content--front-card-information-container']
  );
  const CardHolderRowClassNames = classNames(
    styles['m-credit-card__content--front-information'],
    styles['m-credit-card__content--front-information--l-margin']
  );
  const CardNumberRowClassNames = classNames(
    styles['m-credit-card__content--front-information'],
    styles['m-credit-card__content--front-information--md-margin']
  );
  const TitlesClassNames = classNames(
    'text-legal-regular',
    styles['m-credit-card__content--front-information--title']
  );
  const CardTextClassNames = classNames(
    'text-body-small-bold',
    styles['m-credit-card__content--front-information--text']
  );
  const CardNumberTextClassNames = classNames(
    'text-body-large-bold',
    styles['m-credit-card__content--front-information--text']
  );
  const IconSectionClassNames = classNames(
    styles['m-credit-card__content--front-icons']
  );
  const BankIconClassNames = classNames(
    styles['m-credit-card__content--front-icons--bank-icon']
  );
  const CardTypeIconClassNames = classNames(
    styles['m-credit-card__content--front-icons--card-type-icon']
  );
  const BackSideClassNames = classNames(styles['m-credit-card__content--back']);
  const BlackRectangleClassNames = classNames(
    styles['m-credit-card__content--back-dark-rectangle']
  );
  const WhiteRectangleClassNames = classNames(
    styles['m-credit-card__content--back-white-rectangle']
  );
  const CvvLabelClassNames = classNames(
    'text-legal-regular',
    styles['m-credit-card__content--back-cvv-label']
  );
  const CvvValueClassNames = classNames(
    'text-body-small-bold',
    styles['m-credit-card__content--back-cvv-value']
  );

  const cardClasses = classNames(WrapperClassNames, {
    [styles['hover-on']]: backActive,
    [styles['hover-off']]: !backActive,
  });

  return (
    <Card bodyStyle={bodyStyle} className={cardClasses}>
      <div className={ContentClassNames}>
        <Row className={FrontSideClassNames}>
          <Col span={16} className={CardInformationsClassNames}>
            <Row className={CardHolderRowClassNames}>
              <label className={TitlesClassNames}>{fullNameTitle}</label>
              <div className={CardTextClassNames}>
                {fullName || fullNamePlaceholder}
              </div>
            </Row>
            <Row className={CardNumberRowClassNames}>
              <label className={TitlesClassNames}>{cardNumberTitle}</label>
              <div className={CardNumberTextClassNames}>
                {cardNumber || cardNumberPlaceholder}
              </div>
            </Row>
            <Row className={CardNumberRowClassNames}>
              <label className={TitlesClassNames}>{expirationDateTitle}</label>
              <div className={CardTextClassNames}>
                {month || year ? `${month} / ${year}` : datePlaceholder}
              </div>
            </Row>
          </Col>
          <Col span={8} className={IconSectionClassNames}>
            <Row justify="end">
              {bankLogo && (
                <AtomImage
                  src={bankLogo}
                  className={BankIconClassNames}
                  alt="bank-logo"
                  width={85}
                  height={24}
                />
              )}
            </Row>
            <Row justify="end">
              {cardTypeLogo && (
                <AtomImage
                  src={cardTypeLogo}
                  className={CardTypeIconClassNames}
                  alt="card-type-logo"
                  width={100}
                  height={28}
                />
              )}
            </Row>
          </Col>
        </Row>
        <div className={BackSideClassNames}>
          <Row className={BlackRectangleClassNames}></Row>
          <Row>
            <Col span={16} className={WhiteRectangleClassNames}></Col>
            <Col span={7} offset={1}>
              <div className={CvvLabelClassNames}>{cvvTitle}</div>
              <div className={CvvValueClassNames}>{cvv || cvvPlaceholder}</div>
            </Col>
          </Row>
        </div>
      </div>
    </Card>
  );
}

export default CreditCard;
