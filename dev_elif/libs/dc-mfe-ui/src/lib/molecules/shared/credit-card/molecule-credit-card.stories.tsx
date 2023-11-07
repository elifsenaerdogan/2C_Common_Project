import type { Meta } from '@storybook/react';
import CreditCard from './molecule-credit-card';
import { Input } from 'antd';
import React from 'react';
import bankLogo from '@others/assets/images/yapi-kredi-logo.png';
import cardTypeLogo from '@others/assets/images/masterpass-reverse-logo.png';

const Story: Meta<typeof CreditCard> = {
  component: CreditCard,
  title: 'Molecules/CreditCard',
};
export default Story;

export const Primary = () => {
  const [flip, setFlip] = React.useState(false);
  const [cardNumber, setCardNumber] = React.useState('');
  const [fullName, setFullName] = React.useState('');
  const [month, setMonths] = React.useState('AA');
  const [year, setYears] = React.useState('YY');
  const [cvv, setCvv] = React.useState('');
  const args = {
    cardNumber,
    fullName,
    month,
    year,
    cvv,
    backActive: flip,
    bankLogo,
    cardTypeLogo
  };

  return (
    <div>
      <CreditCard {...args} />
      <div
        style={{
          marginTop: 20,
          display: 'flex',
          flexDirection: 'column',
          maxWidth: '200px',
        }}
      >
        <label>Name</label>
        <Input onChange={(e) => setFullName(e.target.value)} type="text" />
        <label>Number</label>
        <Input onChange={(e) => setCardNumber(e.target.value)} type="text" />
        <label>Month</label>
        <Input onChange={(e) => setMonths(e.target.value)} type="text" />
        <label>Year</label>
        <Input onChange={(e) => setYears(e.target.value)} type="text" />
        <label>Cvv</label>
        <Input
          onFocus={() => setFlip(true)}
          onBlur={() => setFlip(false)}
          type="text"
          onChange={(e) => setCvv(e.target.value)}
        />
      </div>
    </div>
  );
};
