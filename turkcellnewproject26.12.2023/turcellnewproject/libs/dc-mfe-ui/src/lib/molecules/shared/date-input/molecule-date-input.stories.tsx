import React, { useState, ChangeEvent } from 'react';
import { Story, Meta } from '@storybook/react';
import { DateInput } from "@molecules";
import { DateInputProps } from "./types/date-input-interfaces";
import bankLogo from "@others/assets/images/yapi-kredi-logo.png";
import cardTypeLogo from "@others/assets/images/masterpass-reverse-logo.png";

const Story: Meta<typeof DateInput> = {
  component: DateInput,
  title: 'Molecules/DateInput',
};

export default Story;

export const Primary: Story<DateInputProps> = () => {
  const [formattedDate, setFormattedDate] = useState('');

  const handleInputChange = (e: string | ChangeEvent<HTMLInputElement>) => {
    if (typeof e === 'string') {
      setFormattedDate(e);
    } else {
      setFormattedDate(e.target.value);
    }
  };


  return (
    <div>
      <DateInput value={formattedDate} onChange={handleInputChange} />
    </div>
  );
};
