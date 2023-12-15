import styles from './transaction-summary.module.scss';
import { TransactionSummaryProps } from './types/transaction-summary-interfaces';
import classNames from 'classnames';
import useMobile from '@others/hooks/useMobile';
import { Checkbox } from 'antd';
import { AtomButton, AtomIcon } from '@atoms';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';
import { Modal } from 'antd';
import { useState } from 'react';
import { IconsClose } from '@others/icons';
  import { TransactionText } from './types/transaction-summary-enum';

export function TransactionSummary(props: TransactionSummaryProps) {
  const {
    contractContent,
    contracts,
    onClick,
    className,
    transactionObj,
    handleContractTypes,
    contractText,
  } = props;
  const onChange = (e: CheckboxChangeEvent) => {  
    console.log(`checked = ${e.target.checked}`);
  };
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [text, setText] = useState('');
  const isMobile = useMobile();
  const transactionClassses = classNames(
    styles['m-trkclTransaction'],
    className
  );
  const parentDiv = classNames(styles['m-trkclTransaction__parentDiv']);
  const checkboxDiv = classNames(styles['m-trkclTransaction__checkboxDiv']);
  const checkboxStyle = classNames(
    'text-body-small',
    styles['m-trkclTransaction__checkboxStyle']
  );
  const firstSpan = classNames(
    'text-body-small',
    styles['m-trkclTransaction__firstSpan']
  );
  const nextSpan = classNames(
    'text-body-small',
    styles['m-trkclTransaction__nextSpan']
  );
  const transactionSummaryDiv = classNames(
    styles['m-trkclTransaction__transactionSummaryDiv']
  );
  const transactionTitle = classNames(
    'text-head-bold-xs',
    styles['m-trkclTransaction__transactionTitle']
  );
  const transactionDetail = classNames(
    styles['m-trkclTransaction__transactionDetail']
  );
  const btnClasses = classNames(styles['m-trkclTransaction__btnClasses']);
  const agreement = classNames(
    'text-head-bold-xl',
    styles['m-trkclTransaction__agreement']
  );
  const modal = classNames(styles['m-trkclTransaction__modal']);
  const modalBtn = classNames(
    'text-body-regular',
    styles['m-trkclTransaction__modalBtn']
  );
  // mobile classes
  const transactionMobil = classNames(styles['m-trkclTransactionMobile']);
  const parentMobileDiv = classNames(
    'text-body-bold',
    styles['m-trkclTransactionMobile__parentMobileDiv']
  );
  const line = classNames(styles['m-trkclTransactionMobile__line']);
  const detailMobileMargin = classNames(
    styles['m-trkclTransactionMobile__detailMobileMargin']
  );
  const titleMobile = classNames(
    'text-body-small',
    styles['m-trkclTransactionMobile__titleMobile']
  );
  const textMobile = classNames(
    'text-body-small',
    styles['m-trkclTransactionMobile__textMobile']
  );
  const modalMobile = classNames(
    styles['m-trkclTransactionMobile__modalMobile']
  );
  const close = classNames(
    styles['m-trkclTransactionMobile__modalMobile--close']
  );
  const title = classNames(
    styles['m-trkclTransactionMobile__modalMobile--title']
  );
  const openModal = (el: object, index: number) => {
    handleContractTypes(index);
    if (index === 0) {
      setText(contractText?.distanceSelling);
    } else if (index === 1) {
      setText(contractText?.preliminaryInformation);
    } else if (index === 2) {
      setText(contractText?.inform);
    }
    setPopupVisible(true);
  };
  return (
    <div>
      {isMobile ? (
        <div className={transactionMobil}>
          <div className={parentMobileDiv}>
            {transactionObj?.transactionSummary}
            <div className={line} />
            <div>
              <div className={detailMobileMargin}>
                <div className={titleMobile}>{transactionObj?.packageName}</div>
                <div className={textMobile}>
                  {transactionObj?.packageNameDetail}
                </div>
              </div>
              <div className={detailMobileMargin}>
                <div className={titleMobile}>
                  {transactionObj?.packageIncluded}
                </div>
                <div className={textMobile}>
                  {transactionObj?.packageContentDetail}
                </div>
              </div>
              <div className={detailMobileMargin}>
                <div className={titleMobile}>
                  {transactionObj?.packageAmount}
                </div>
                <div>{transactionObj?.packageAmountDetail}</div>
              </div>
              <div>
                <div className={titleMobile}>
                  {transactionObj?.packageCampaign}
                </div>
                <div className={textMobile}>
                  {transactionObj?.packageCampaignDetail}
                </div>
              </div>
            </div>
          </div>
          <div>
            <Checkbox onChange={onChange} className={checkboxStyle}>
              {contracts?.map((el, index) => (
                <span
                  key={index}
                  onClick={() => openModal(el, index)}
                  className={firstSpan}
                >
                  {el?.contractTypes}
                </span>
              ))}
              <span className={nextSpan}> {TransactionText?.readApprove}</span>
            </Checkbox>
            {contractContent?.map((el, index) => (
              <Checkbox
                key={index}
                onChange={onChange}
                className={checkboxStyle}
              >
                <span className={classNames('text-captions-regular')}>
                  {el.text}
                </span>
              </Checkbox>
            ))}
            <AtomButton
              onClick={onClick}
              text={transactionObj?.buttonText}
              className={btnClasses}
            />
          </div>
        </div>
      ) : (
        <div className={transactionClassses}>
          <div className={agreement}>{TransactionText?.contracts}</div>
          <div className={parentDiv}>
            <div className={checkboxDiv}>
              <Checkbox onChange={onChange} className={checkboxStyle}>
                {contracts?.map((el, index) => (
                  <span
                    key={index}
                    onClick={() => openModal(el, index)}
                    className={firstSpan}
                  >
                    {el?.contractTypes}
                  </span>
                ))}
                <span className={nextSpan}> {TransactionText?.readApprove}</span>
              </Checkbox>
              {contractContent?.map((el, index) => (
                <Checkbox
                  key={index}
                  onChange={onChange}
                  className={checkboxStyle}
                >
                  <span className={classNames('text-body-small')}>
                    {el.text}
                  </span>
                </Checkbox>
              ))}
            </div>
            <div className={transactionSummaryDiv}>
              <div className={transactionTitle}>
                {transactionObj?.transactionSummary}
              </div>
              <div className={transactionDetail}>
                <div className={classNames('text-body-small')}>
                  {transactionObj?.packageName}
                </div>
                <div className={classNames('text-body-small-bold')}>
                  {transactionObj?.packageNameDetail}
                </div>
              </div>
              <div className={transactionDetail}>
                <div className={classNames('text-body-small')}>
                  {transactionObj?.packageIncluded}
                </div>
                <div
                  style={{
                    textAlign: 'right',
                    whiteSpace: 'pre-line',
                    width: '10rem',
                  }}
                  className={classNames('text-body-small-bold')}
                >
                  {transactionObj?.packageContentDetail}
                </div>
              </div>
              <div className={transactionDetail}>
                <div className={classNames('text-body-small')}>
                  {transactionObj?.packageAmount}
                </div>
                <div className={classNames('text-body-small-bold')}>
                  {transactionObj?.packageAmountDetail}
                </div>
              </div>
              <div className={transactionDetail}>
                <div
                  style={{ width: '10rem' }}
                  className={classNames('text-body-small')}
                >
                  {transactionObj?.packageCampaign}
                </div>
                <div
                  style={{ textAlign: 'right', width: '10rem' }}
                  className={classNames('text-body-small-bold')}
                >
                  {transactionObj?.packageCampaignDetail}
                </div>
              </div>
              <div className={transactionDetail}>
                <AtomButton
                  onClick={onClick}
                  text={transactionObj?.buttonText}
                  className={btnClasses}
                />
              </div>
            </div>
          </div>
        </div>
      )}
      {isMobile && isPopupVisible ? (
        <div className={modalMobile}>
          <AtomIcon
            icon={<IconsClose width={24} height={24} />}
            onClick={() => setPopupVisible(false)}
            className={close}
          />
          <div>
            <div className={title}>{TransactionText?.cardContract}</div>
            <p>{text}</p>
            <div>
              <AtomButton
                onClick={onClick}
                text={TransactionText?.btnText}
                className={modalBtn}
              />
            </div>
          </div>
        </div>
      ) : (
        <Modal
          title={TransactionText?.cardTerms}
          open={isPopupVisible}
          onCancel={() => setPopupVisible(false)}
          footer={[
            <AtomButton
              onClick={onClick}
              text={TransactionText?.btnText}
              className={modalBtn}
            />,
          ]}
          className={modal}
        >
          <p>{text}</p>
        </Modal>
      )}
    </div>
  );
}

export default TransactionSummary;
