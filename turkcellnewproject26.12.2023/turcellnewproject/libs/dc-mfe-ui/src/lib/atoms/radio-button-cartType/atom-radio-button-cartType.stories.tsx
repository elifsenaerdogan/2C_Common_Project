import type { Meta, StoryObj } from '@storybook/react';
import RadioButtonCartType from './atom-radio-button-cartType';
import { useState } from 'react';
import { Radio } from 'antd';
import type { RadioChangeEvent } from 'antd';
import { RadioButtonEnum } from '../../molecules/tl-topup/radio-button/types/radio-button-enums';
import styles from './atom-radio-button-cartType.module.scss';

const Story: Meta<typeof RadioButtonCartType> = {
  title: 'Atoms/RadioButtonCartType',
  component: RadioButtonCartType,
  parameters: {},
  tags: ['autodocs'],
  argTypes: {
    position: {
      options: ['top-right', 'top-left', 'bottom-right', 'bottom-left'],
      control: { type: 'radio' },
    },
    yellowBackgroundCircle: {
      options: [true, false],
      control: { type: 'radio' },
    },
  },
};

export default Story;
type Story = StoryObj<typeof RadioButtonCartType>;

const RadioButtonCart = (args) => {
  const [value, setValue] = useState('D');

  const onChange = (e: RadioChangeEvent) => {
    setValue(e.target.value);
  };

  return (
    <Radio.Group onChange={onChange} value={value}>
      <RadioButtonCartType
        type={RadioButtonEnum.CART}
        value={'X CARD'}
        cart={<div className={styles.storybook__card} />}
        currentCheckedValue={value}
        {...args}
      />
      <RadioButtonCartType
        type={RadioButtonEnum.CART}
        value={'Y CARD'}
        cart={<div className={styles.storybook__card} />}
        currentCheckedValue={value}
        {...args}
      />
    </Radio.Group>
  );
};
export const RadioButtonCarts: Story = {
  render: (args) => {
    return <RadioButtonCart {...args} />;
  },
  args: {
    position: 'top-right',
    yellowBackgroundCircle: true,
  },
};
