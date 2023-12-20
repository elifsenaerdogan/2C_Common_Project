import type { Meta } from '@storybook/react';

import React from 'react';
import {AtomDatePicker} from "@atoms";



const Story: Meta<typeof AtomDatePicker> = {
  component: AtomDatePicker,
  title: 'Atoms/DatePicker',
};

export default Story;

export const Default = () => {
  const [name, setName] = React.useState('');
  return (
    <AtomDatePicker
      label={"amsdak"}
      value={name}
      placeholder={"Date Picker"}

    />
  );
};
