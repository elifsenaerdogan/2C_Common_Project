import { useState } from 'react';
import type { Meta } from '@storybook/react';
import MoleculeRadioButton from './molecule-radio-button';
import { Radio } from 'antd';
import type { RadioChangeEvent } from 'antd';
import {
  RadioButtonEnum,
  CurrentSalaryActionName,
} from './types/radio-button-enums';
import { CurrencyTypes } from '@others/enums/currency-types';
const Story: Meta<typeof MoleculeRadioButton> = {
  title: 'Molecules/RadioButton',
  component: MoleculeRadioButton,
  parameters: {},
  tags: ['autodocs'],
};
export default Story;
export const CreditCartRadio = () => {
  const [value, setValue] = useState('YAPI KREDİ KARTIM');
  const onChange = (e: RadioChangeEvent) => {
    setValue(e.target.value);
  };
  return (
    <Radio.Group onChange={onChange} value={value}>
      <MoleculeRadioButton
        type={RadioButtonEnum.CREDITCART}
        radioButtonName="YAPI KREDİ KARTIM"
        creditCartNumber={1234}
        value={'YAPI KREDİ KARTIM'}
        currentCheckedValue={value}
      />
      <MoleculeRadioButton
        type={RadioButtonEnum.CREDITCART}
        creditCartNumber={5678}
        value={'GARANTİ KREDİ KARTIM'}
        currentCheckedValue={value}
        checked={true}
        radioButtonName={'GARANTİ KREDİ KARTIM'}
      />
    </Radio.Group>
  );
};
export const ComprehensiveRadio = () => {
  const [value, setValue] = useState('Bakiye ile Öde');
  const onChange = (e: RadioChangeEvent) => {
    setValue(e.target.value);
  };
  return (
    <Radio.Group style={{ width: '700px' }} onChange={onChange} value={value}>
      <MoleculeRadioButton
        type={RadioButtonEnum.COMPREHENSIVE}
        radioButtonName={'Bakiye ile Öde'}
        actionName={CurrentSalaryActionName.MEVCUTBAKIYE}
        actionCurrency={CurrencyTypes.TL}
        actionPrice={70}
        value={'Bakiye ile Öde'}
        currentCheckedValue={value}
        divider={true}
      />
      <MoleculeRadioButton
        type={RadioButtonEnum.COMPREHENSIVE}
        radioButtonName={'Bakiye ile Öde Test'}
        actionName={CurrentSalaryActionName.MEVCUTBAKIYE}
        actionCurrency={CurrencyTypes.TL}
        actionPrice={50}
        value={'Bakiye ile Öde Test'}
        currentCheckedValue={value}
        divider={true}
      />
    </Radio.Group>
  );
};
