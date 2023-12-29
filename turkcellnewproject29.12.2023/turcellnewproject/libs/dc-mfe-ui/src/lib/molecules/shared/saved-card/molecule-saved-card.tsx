import styles from './molecule-saved-card.module.scss';
import classNames from 'classnames';
import { MoleculeSavedCardProps, SavedCard } from './types/saved-card-interfaces';
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
  const { className, onChange, outClickStatus, data, type } = props;

  const handleOnChange = (e: CheckboxChangeEvent) => {
    onChange && onChange(e.target.value);
    setSelectedValue(e.target.value);
  };
  const onClick = (item: object) => {
    outClickStatus && outClickStatus(item);
    console.log(item);
  };
  return (
    <Radio.Group
      onChange={(e) => handleOnChange(e)}
      value={selectedValue}
      className={classNames(styles['m-trkclApp-savedCard'], className)}
    >
      {data?.map((item: SavedCard, key: number) => {
        if (type === RadioButtonEnum.CREDITCART) {
          return (
            <MoleculeRadioButton
              key={key}
              type={RadioButtonEnum.CREDITCART}
              radioButtonName={item.cardBrand}
              creditCartNumber={item.maskedCardNo}
              value={item.cardId}
              onClick={() => onClick(item)}
              currentCheckedValue={selectedValue}
            />
          );
        } else if (type === RadioButtonEnum.COMPREHENSIVE) {
          return (
            <MoleculeRadioButton
              type={RadioButtonEnum.COMPREHENSIVE}
              radioButtonName={item.cardBrand}
              actionName={CurrentSalaryActionName.MEVCUTBAKIYE}
              actionCurrency={CurrencyTypes.TL}
              actionPrice={item.balance || ''}
              value={item.cardId}
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

export default MoleculeSavedCard;
