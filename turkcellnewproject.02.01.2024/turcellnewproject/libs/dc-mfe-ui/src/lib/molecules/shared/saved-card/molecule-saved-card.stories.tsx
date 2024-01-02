import type { Meta } from '@storybook/react';
import { MoleculeSavedCard } from './molecule-saved-card';
import styles from './molecule-saved-card.module.scss';

import React, { useState } from 'react';
import { RadioChangeEvent } from 'antd';
import { RadioButtonEnum } from '../../tl-topup/radio-button/types/radio-button-enums';
import { SavedCardList } from '@others/dummy/payment';

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
  return (
    <MoleculeSavedCard
      data={SavedCardList?.cardInfoList}
      //value={'YAPI KREDİ KARTIM'}
      onChange={onChange}
      outClickStatus={clickStatus}
      type='creditcard'
    />
  );
};

export const ComprehensiveRadio = () => {
  return (
    <MoleculeSavedCard
      data={SavedCardList?.cardInfoList}
      //value={'GARANTİ KARTIM'}
      onChange={onChange}
      className={styles.storybook__comprhansive}
      type='comprehensive'
    />
  );
};
