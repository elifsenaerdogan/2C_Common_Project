import type { Meta } from '@storybook/react';
import { AtomPriceBox } from './atom-price-box';

const Story: Meta<typeof AtomPriceBox> = {
  component: AtomPriceBox,
  title: 'Atoms/PriceBox',
};
export default Story;

export const AtomPriceBoxDefault = {
  args: {
    className: '',
    data: {
      price: null,
      active: false,
    },
  },
};

export const AtomPriceBoxSimple = {
  args: {
    className: '',
    data: {
      price: 30,
      active: true,
    },
  },
};
