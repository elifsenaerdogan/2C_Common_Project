import styles from './molecule-radio-button.module.scss';
// import { AtomRadioButton } from '@atoms';
import { AtomRadioButton } from '@atoms';
import { RadioButtonEnum } from './types/radio-button-enums';
import classnames from 'classnames';
// import { CustomMaskNumbers } from '@others/utils/maskCreditCart';
import { CustomMaskNumbers } from '@others/utils/maskCreditCart';
import {
  CreditCartRadioProps,
  ComprehensiveRadioProps,
} from './types/radio-button-interfaces';

type MoleculeRadioProps = CreditCartRadioProps | ComprehensiveRadioProps;
export function MoleculeRadioButton(props: MoleculeRadioProps) {
  const {
    radioButtonName,
    currentCheckedValue,
    value,
    divider,
    onClick,
    wrapperClassName,
  } = props;

  const onClickFn = (item: any) => {
    onClick && onClick(item.target.value);
  };
  const renderRadioButton = () => {
    switch (props.type) {
      case RadioButtonEnum.COMPREHENSIVE: {
        const { actionName, actionCurrency, actionPrice } = props;
        return (
          <div>
            <div
              className={classnames([
                styles['m-trkclAppRadioButton__action--name'],
              ])}
            >
              {actionName}
            </div>
            <div
              className={classnames(
                [styles['m-trkclAppRadioButton__action--priceCurrency']],
                {
                  [styles[
                    'm-trkclAppRadioButton__action--priceCurrency-checked'
                  ]]: props.currentCheckedValue === props.value,
                }
              )}
            >
              <div
                className={classnames([
                  styles['m-trkclAppRadioButton__action--priceCurrency-price'],
                ])}
              >
                {actionPrice}
              </div>
              <div
                className={classnames([
                  styles[
                    'm-trkclAppRadioButton__action--priceCurrency-currency'
                  ],
                ])}
              >
                {actionCurrency}
              </div>
            </div>
          </div>
        );
      }
      case RadioButtonEnum.CREDITCART: {
        const { creditCartNumber } = props;
        const maskedCreditCardNumber = creditCartNumber
          ? CustomMaskNumbers({
              number: creditCartNumber,
              unmaskedStart: 0,
              unmaskedEnd: 4,
            }).padStart(19, '**** ')
          : null;
        return (
          <div
            className={classnames(
              [styles['m-trkclAppRadioButton__creditCart']],
              {
                [styles['m-trkclAppRadioButton__creditCart--checked']]:
                  props.currentCheckedValue === props.value,
              }
            )}
          >
            {maskedCreditCardNumber}
          </div>
        );
      }
    }
  };
  const element = renderRadioButton();
  return (
    <AtomRadioButton
      radioButtonName={radioButtonName}
      currentCheckedValue={currentCheckedValue}
      value={value}
      element={element}
      divider={divider}
      wrapperClassName={wrapperClassName}
      onClick={(e) => onClickFn(e)}
    />
  );
}
export default MoleculeRadioButton;
