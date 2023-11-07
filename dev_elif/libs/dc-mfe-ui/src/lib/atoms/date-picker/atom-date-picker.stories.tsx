import type { Meta } from '@storybook/react';
import { AtomDatePicker } from './atom-date-picker';
import React from 'react';
import {AtomInput} from "@atoms";


const Story: Meta<typeof AtomDatePicker> = {
  component: AtomDatePicker,
  title: 'Atoms/DatePicker',
};

export default Story;

export const Default = () => {
  const [name, setName] = React.useState('');
  return (
    <AtomDatePicker
      value={name}
      placeholder={"Date Picker"}

    />
  );
};
