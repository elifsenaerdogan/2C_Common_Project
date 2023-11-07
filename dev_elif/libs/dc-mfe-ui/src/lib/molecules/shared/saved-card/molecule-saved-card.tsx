import styles from './molecule-saved-card.module.scss';
import classNames from 'classnames';
import { MoleculeSavedCardProps } from './types/saved-card-interfaces';
import { MoleculeRadioButton } from '../../tl-topup/radio-button/molecule-radio-button';
import {
  RadioButtonEnum,
  CurrentSalaryActionName,
} from '../../tl-topup/radio-button/types/radio-button-enums';
import { CurrencyTypes } from '@others/enums/currency-types';

import { useState } from 'react';
import { Radio } from 'antd';
import { CheckboxChangeEvent } from 'antd/es/checkbox';

export function MoleculeSavedCard(props: MoleculeSavedCardProps) {
  const [selectedValue, setSelectedValue] = useState('');
  const { className, onChange, outClickStatus, data } = props;
  const isLogin = true; //authenticatin wll come

  const handleOnChange = (e: CheckboxChangeEvent) => {
    onChange && onChange(e.target.value);
    setSelectedValue(e.target.value);
  };
  const onClick = (item: object) => {
    outClickStatus && outClickStatus(item);
    console.log(item);
  };

  const savedCardContent = () => {
    if (isLogin) {
      return (
        <Radio.Group
          onChange={(e) => handleOnChange(e)}
          value={selectedValue}
          className={classNames(styles['m-trkclApp-savedCard'], className)}
        >
          {data?.map((item: any, key: number) => {
            if (item.type == RadioButtonEnum.CREDITCART) {
              return (
                <MoleculeRadioButton
                  key={key}
                  type={item.type}
                  radioButtonName={item.radioButtonName}
                  creditCartNumber={item.creditCardNumber}
                  value={item.value}
                  onClick={() => onClick(item)}
                  currentCheckedValue={selectedValue}
                />
              );
            } else if (item.type == RadioButtonEnum.COMPREHENSIVE) {
              return (
                <MoleculeRadioButton
                  type={RadioButtonEnum.COMPREHENSIVE}
                  radioButtonName={item.radioButtonName}
                  actionName={CurrentSalaryActionName.MEVCUTBAKIYE}
                  actionCurrency={CurrencyTypes.TL}
                  actionPrice={item.actionPrice}
                  value={item.value}
                  currentCheckedValue={selectedValue}
                  onClick={() => onClick(item)}
                  divider={true}
                />
              );
            }
          })}
        </Radio.Group>
      );
    }
  };

  return <>{savedCardContent()}</>;
}

export default MoleculeSavedCard;
