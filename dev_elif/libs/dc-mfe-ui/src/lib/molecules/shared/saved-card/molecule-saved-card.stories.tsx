import type { Meta } from '@storybook/react';
import { MoleculeSavedCard } from './molecule-saved-card';
import styles from './molecule-saved-card.module.scss';

import React, { useState } from 'react';
import { RadioChangeEvent } from 'antd';
import { RadioButtonEnum } from '../../tl-topup/radio-button/types/radio-button-enums';

const Story: Meta<typeof MoleculeSavedCard> = {
  component: MoleculeSavedCard,
  title: 'Molecules/SavedCard',
};

const onChange = (e: RadioChangeEvent) => {
  console.log(e);
};
const clickStatus = (item: any) => {
  console.log(item);
};

export default Story;

export const CreditCartRadio = () => {
  const creditCartData = [
    {
      type: RadioButtonEnum.CREDITCART,
      creditCardNumber: 1907,
      radioButtonName: 'asd',
      value: 'YAPI KREDİ KARTIM',
    },
    {
      type: RadioButtonEnum.CREDITCART,
      creditCardNumber: 1908,
      radioButtonName: 'sadad',
      actionPrice: 0,
      value: 'GARANTİ KARTIM',
    },
  ];
  return (
    <MoleculeSavedCard
      data={creditCartData}
      value={'YAPI KREDİ KARTIM'}
      onChange={onChange}
      outClickStatus={clickStatus}
    />
  );
};

export const ComprehensiveRadio = () => {
  const bakiyeCartData = [
    {
      type: RadioButtonEnum.COMPREHENSIVE,
      radioButtonName: 'asd',
      actionPrice: 60,
      value: 'GARANTİ KARTIM',
    },
  ];
  return (
    <MoleculeSavedCard
      data={bakiyeCartData}
      value={'GARANTİ KARTIM'}
      onChange={onChange}
      className={styles.storybook__comprhansive}
    />
  );
};
