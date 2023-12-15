import type { Meta } from '@storybook/react';
import AtomMaskInput from './atom-mask-input';
import React from 'react';

const Story: Meta<typeof AtomMaskInput> = {
  component: AtomMaskInput,
  title: 'Atoms/MaskInput',
};
export default Story;

export const Template = () => {
  const onChange = (e:any) => {
    setValue(e.target.value)
  }
  const args = {
    maskType: 'phone',
    label: 'Mask Input',
    value: values,
    onChange: onChange,
  };
  const [values, setValue] = React.useState(args.value)
  console.log('value story: ', values)
  return <AtomMaskInput {...args} />
};