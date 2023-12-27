import React, { useImperativeHandle } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { AtomButton, AtomInput, AtomTermsRegistrationCheckbox } from '@atoms';
import { Col, Modal, Popover, Row } from 'antd';
import { PaymentProps } from './types/payment-interfaces';
import {
  MoleculeSelectBox,
  CreditCard,
  MoleculeCardExtraInfo,
  MoleculeAgreementCheckbox,
} from '@molecules';
import styles from './molecule-payment.module.scss';
import classNames from 'classnames';
import { generateMaskedNumberRegex } from '@others/utils/mask';
import { IconsFaq } from '@others/icons';
import {
  PaymentAgreementTexts,
  PaymentCardExtraInfoTexts,
  PaymentFormElements,
  PaymentInputStatus,
  PaymentInputTypes,
  PaymentLabels,
  PaymentMasterPassRegisterTexts,
  PaymentPopoverMessages,
  PaymentPaycellRegisterTexts,
} from './types/payment-enums';
import { useMobile } from '@others/hooks';
import { paymentSchema } from '@others/schemas';
import MasterpassBlackLogo from '@others/assets/images/masterpass-black.svg';
import { getMonthsAndYears, getPaymentInputMasks } from '@others/helpers';
import MasterpassLogo from '@others/assets/images/logo-masterpass.webp';
import PaycellLogo from '@others/assets/images/paycell-logo.webp';
import VisaLogo from '@others/assets/images/logo-visa.webp';

export function MoleculePaymentForm(props: PaymentProps) {
  const {
    onSubmit,
    reference,
    defaultValues,
    customLabels,
    onClickTerms,
    cardLogos,
    cardType = 'masterpass',
    agreements,
    className,
    msisdn = '',
    handleGetCardNumber,
  } = props;
  const [isBackActive, setIsBackActive] = React.useState(false);
  const [modalIsOpen, setModalIsOpen] = React.useState(false);
  const [selectedAgreement, setSelectedAgreement] = React.useState({
    agreement: '',
    id: null,
  });
  const extraInfoLogos = {
    masterpass: [VisaLogo, MasterpassLogo],
    paycell: [VisaLogo, PaycellLogo],
  };
  const extraInfoText =
    cardType === 'masterpass'
      ? PaymentCardExtraInfoTexts.MasterpassText
      : PaymentCardExtraInfoTexts.PaycellText;
  const registrationTexts =
    cardType === 'masterpass'
      ? PaymentMasterPassRegisterTexts
      : PaymentPaycellRegisterTexts;
  const agreementTitles = [
    'Ön bilgilendirme formu',
    'Bilgilendirme Formu',
    'Mesafeli Satış Sözleşmesi',
  ];
  const isMobile = useMobile();
  const months = getMonthsAndYears()?.months;
  const years = getMonthsAndYears()?.years;

  // CSS Classes
  const formWrapperClassNames = classNames(
    styles['m-trkclAppPayment'],
    className
  );
  const rowClassNames = classNames(styles['m-trkclAppPayment__Row']);
  const popoverContentClassNames = classNames(
    'text-body-small',
    styles['m-trkclAppPayment__Popover--Content']
  );
  const bottomColumnClassNames = classNames(
    'text-body-small',
    styles['m-trkclAppPayment__BottomColumns']
  );
  const agreementText = classNames(styles['m-trkclAppPayment__Aggrement']);
  const agreementLink = classNames(
    'text-body-small-bold',
    styles['m-trkclAppPayment__Aggrement--Link']
  );
  const agreementModal = classNames(
    styles['m-trkclAppPayment__Aggrement-Modal']
  );
  const agreementModalFooter = classNames(
    styles['m-trkclAppPayment__Aggrement-Modal-Footer']
  );
  const agreementModalButton = classNames(
    'text-body-small',
    styles['m-trkclAppPayment__Aggrement-Modal-Footer--Button']
  );

  const {
    handleSubmit,
    control,
    formState: { errors },
    watch,
    setValue,
  } = useForm({
    resolver: yupResolver(paymentSchema),
    defaultValues: {
      expiryMonth: defaultValues?.expiryMonth || '',
      expiryYear: defaultValues?.expiryYear || '',
      ccv: defaultValues?.ccv || '',
      cardHolder: defaultValues?.cardHolder || '',
      cardNumber: generateMaskedNumberRegex(
        defaultValues?.cardNumber || '',
        'card'
      ),
      agreement: !!defaultValues?.agreement,
      terms: !!defaultValues?.terms,
    },
  });

  const watchFormValues = watch([
    PaymentFormElements.CardHolder,
    PaymentFormElements.CardNumber,
    PaymentFormElements.ExpiryMonth,
    PaymentFormElements.ExpiryYear,
    PaymentFormElements.CCV,
    PaymentFormElements.Terms,
    PaymentFormElements.Agreement,
  ] as any[]);

  // CCV Popover
  const popoverTitle = <div>{PaymentPopoverMessages.Title}</div>;
  const popoverContent = (
    <div className={popoverContentClassNames}>
      {PaymentPopoverMessages.Content}
    </div>
  );

  React.useEffect(() => {
    if (selectedAgreement.agreement) {
      setModalIsOpen(true);
    }
  }, [selectedAgreement]);

  const handleOnCloseModal = () => {
    setModalIsOpen(false);
    setSelectedAgreement({ agreement: '', id: null });
  };

  // Card number ı verir
  React.useEffect(() => {
    if (watchFormValues[1]?.length > 6) {
      handleGetCardNumber && handleGetCardNumber(watchFormValues[1]);
    } else {
      handleGetCardNumber && handleGetCardNumber('');
    }
  }, [watchFormValues[1]]);

  // Submit Form
  useImperativeHandle(reference, () => ({
    submitForm() {
      onSubmit && handleSubmit(onSubmit)();
    },
  }));

  return (
    <form className={formWrapperClassNames}>
      <Row gutter={20}>
        <Col span={isMobile ? 24 : 12}>
          <Row className={rowClassNames}>
            <Controller
              name={PaymentFormElements.CardHolder}
              control={control}
              render={({ field: { onChange, onBlur, value, name } }) => (
                <AtomInput
                  label={customLabels?.cardHolder || PaymentLabels.CardHolder}
                  statusType={
                    errors.cardHolder?.message
                      ? PaymentInputStatus.Error
                      : PaymentInputStatus.Default
                  }
                  message={errors.cardHolder?.message}
                  onInput={(e) =>
                    getPaymentInputMasks(
                      onChange,
                      PaymentInputTypes.Fullname,
                      e
                    )
                  }
                  value={value}
                  onBlur={onBlur}
                  name={name}
                />
              )}
            />
          </Row>

          <Row className={rowClassNames}>
            <Controller
              name={PaymentFormElements.CardNumber}
              control={control}
              render={({ field: { onChange, onBlur, value, name } }) => (
                <AtomInput
                  label={customLabels?.cardNumber || PaymentLabels.CardNumber}
                  statusType={
                    errors.cardNumber?.message
                      ? PaymentInputStatus.Error
                      : PaymentInputStatus.Default
                  }
                  message={errors.cardNumber?.message}
                  placeholder="____ ____ ____ ____"
                  onInput={(e) => {
                    getPaymentInputMasks(
                      onChange,
                      PaymentInputTypes.CardNumber,
                      e
                    );
                  }}
                  maxLength={19}
                  value={value}
                  onBlur={onBlur}
                  name={name}
                />
              )}
            />
          </Row>
          <Row gutter={16}>
            <Col span={8}>
              <Controller
                name={PaymentFormElements.ExpiryMonth}
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                  <MoleculeSelectBox
                    options={months}
                    label={
                      customLabels?.expiryMonth || PaymentLabels.ExpiryMonth
                    }
                    isError={!!errors.expiryMonth?.message}
                    errorMessage={errors.expiryMonth?.message}
                    onBlur={onBlur}
                    onChange={onChange}
                    value={value}
                  />
                )}
              />
            </Col>

            <Col span={8}>
              <Controller
                name={PaymentFormElements.ExpiryYear}
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                  <MoleculeSelectBox
                    options={years}
                    label={customLabels?.expiryYear || PaymentLabels.ExpiryYear}
                    isError={!!errors.expiryYear?.message}
                    errorMessage={errors.expiryYear?.message}
                    onBlur={onBlur}
                    onChange={onChange}
                    value={value}
                  />
                )}
              />
            </Col>

            <Col span={8}>
              <Controller
                name={PaymentFormElements.CCV}
                control={control}
                render={({ field: { onChange, onBlur, value, name } }) => (
                  <AtomInput
                    label={customLabels?.ccv || PaymentLabels.CCV}
                    statusType={
                      errors.ccv?.message
                        ? PaymentInputStatus.Error
                        : PaymentInputStatus.Default
                    }
                    message={errors.ccv?.message}
                    onInput={(e) =>
                      getPaymentInputMasks(onChange, PaymentInputTypes.CCV, e)
                    }
                    onBlur={() => {
                      onBlur();
                      setIsBackActive(false);
                    }}
                    onFocus={() => setIsBackActive(true)}
                    onChange={onChange}
                    value={value}
                    name={name}
                    maxLength={4}
                    icon={
                      <Popover
                        placement="topRight"
                        content={popoverContent}
                        title={popoverTitle}
                        trigger="hover"
                      >
                        <IconsFaq width={24} height={24} color="#5f6b76" />
                      </Popover>
                    }
                  />
                )}
              />
            </Col>
          </Row>
        </Col>
        {!isMobile ? (
          <Col span={12}>
            <CreditCard
              fullName={watchFormValues[0]}
              cardNumber={watchFormValues[1]}
              month={watchFormValues[2]}
              year={watchFormValues[3]}
              cvv={watchFormValues[4]}
              backActive={isBackActive}
              bankLogo={cardLogos?.bank || ''}
              cardTypeLogo={cardLogos?.cardType || ''}
            />
          </Col>
        ) : (
          // eslint-disable-next-line react/jsx-no-useless-fragment
          <></>
        )}
        {msisdn ? (
          <Col span={24} className={bottomColumnClassNames}>
            <Controller
              name={PaymentFormElements.Terms}
              control={control}
              render={({ field: { onChange, onBlur, value, ref } }) => (
                <AtomTermsRegistrationCheckbox
                  onBlur={onBlur}
                  onChange={onChange}
                  checked={!!value}
                  inputRef={ref}
                  text={registrationTexts.FirstText}
                  image={cardType === 'masterpass' ? MasterpassBlackLogo : ''}
                  saveTermsText={registrationTexts.SaveTermsText}
                  approveText={registrationTexts.ApproveText}
                  saveToHide={registrationTexts.SaveToHide}
                  onClickLink={onClickTerms}
                />
              )}
            />
          </Col>
        ) : (
          // eslint-disable-next-line react/jsx-no-useless-fragment
          <></>
        )}
        {msisdn ? (
          <Col span={24} className={bottomColumnClassNames}>
            <MoleculeCardExtraInfo
              text={extraInfoText}
              cardTitle={PaymentCardExtraInfoTexts.Title}
              bankLogo={extraInfoLogos[cardType]}
            />
          </Col>
        ) : (
          // eslint-disable-next-line react/jsx-no-useless-fragment
          <></>
        )}
        <Col span={24} className={bottomColumnClassNames}>
          <Controller
            name={PaymentFormElements.Agreement}
            control={control}
            render={({ field: { onChange, onBlur, value, ref } }) => (
              <MoleculeAgreementCheckbox
                onBlur={onBlur}
                onChange={onChange}
                checked={value}
                inputRef={ref}
                errorMessage={errors.agreement?.message}
              >
                {agreements?.length > 0 && (
                  <div className={agreementText}>
                    {agreements?.length > 0 &&
                      agreements?.map((agreement, index) => {
                        const lastIndex = agreements?.length - 1;
                        return (
                          <>
                            <span
                              key={index}
                              className={agreementLink}
                              onClick={() =>
                                setSelectedAgreement({
                                  agreement: agreement,
                                  id: index,
                                })
                              }
                            >
                              {agreementTitles[index]}
                            </span>
                            <span>
                              {index === lastIndex - 1
                                ? ' ve '
                                : lastIndex === index
                                ? ' '
                                : `, `}
                            </span>
                          </>
                        );
                      })}
                    {PaymentAgreementTexts.Text}
                  </div>
                )}
              </MoleculeAgreementCheckbox>
            )}
          />
        </Col>
      </Row>
      <Modal
        open={modalIsOpen}
        onCancel={() => handleOnCloseModal()}
        onOk={() => handleOnCloseModal()}
        title={agreementTitles[selectedAgreement?.id]}
        className={agreementModal}
        footer={() => (
          <div className={agreementModalFooter}>
            <AtomButton
              text={PaymentAgreementTexts.Text}
              variant="secondary"
              className={agreementModalButton}
              onClick={() => {
                handleOnCloseModal();
                setValue(PaymentFormElements.Agreement, true);
              }}
            />
          </div>
        )}
      >
        <div
          dangerouslySetInnerHTML={{ __html: selectedAgreement.agreement }}
        />
      </Modal>
    </form>
  );
}

export default MoleculePaymentForm;
