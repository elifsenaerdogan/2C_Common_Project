import type { Meta } from '@storybook/react';
import { AtomPriceBox } from './atom-price-box';
import styles from './atom-price-box.module.scss';

const Story: Meta<typeof AtomPriceBox> = {
  component: AtomPriceBox,
  title: 'Atoms/PriceBox',
};
export default Story;

export const AtomPriceBoxDefault = {
  args: {
    className: `${styles.storybook__classes}`,
    item: {
      id: 1,
      price: 30,
      active: false,
    },
  },
};

export const AtomPriceBoxSimple = {
  args: {
    className: `${styles.storybook__classes}`,
    item: {
      id: 1,
      price: 30,
      active: true,
    },
  },
};
