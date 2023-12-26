import type { Meta } from '@storybook/react';
import { AtomInput } from './atom-input';
import React from 'react';

const Story: Meta<typeof AtomInput> = {
  component: AtomInput,
  title: 'Atoms/Input',
};
export default Story;

export const Default = () => {
  const [name, setName] = React.useState('');
  return (
    <AtomInput
      value={name}
      onChange={(e) => setName(e.target.value)}
      label='Input With Label *'
      onFocus={() => console.log('onFocus')}
      onBlur={() => console.log('onBlur')}
    />
  );
};
