import type { Meta } from '@storybook/react';
import { useState } from 'react';
import { AtomRadioButton } from './atom-radio-button';
import { Radio } from 'antd';
import type { RadioChangeEvent } from 'antd';

const Story: Meta<typeof AtomRadioButton> = {
  component: AtomRadioButton,
  title: 'Atoms/RadioButton',
};
export default Story;

export const AtomRadio = () => {
  const [radioValue, setRadioValue] = useState('TL Yükle');

  const onChange = (e: RadioChangeEvent) => {
    setRadioValue(e.target.value);
  };

  return (
    <Radio.Group onChange={onChange} value={radioValue}>
      <AtomRadioButton
        radioButtonName="TL Yükle"
        value="TL Yükle"
        currentCheckedValue={radioValue}
      />
      <AtomRadioButton
        radioButtonName="Paket Yükle"
        value="Paket Yükle"
        currentCheckedValue={radioValue}
      />
    </Radio.Group>
  );
};
