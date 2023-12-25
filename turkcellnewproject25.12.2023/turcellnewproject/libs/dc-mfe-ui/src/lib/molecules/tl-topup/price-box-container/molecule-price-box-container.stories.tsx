import type { Meta, StoryObj } from '@storybook/react';
import PriceBoxContainer from './molecule-price-box-container';

const Story: Meta<typeof PriceBoxContainer> = {
  component: PriceBoxContainer,
  title: 'Molecules/PriceBoxContainer',
};
export default Story;
type Story = StoryObj<typeof PriceBoxContainer>;

export const Primary = {
  args: {
    data: [
      { packageId: 1, price: 50 },
      { packageId: 2, price: 60 },
      { packageId: 3, price: 70 },
      { packageId: 4, price: 80 },
      { packageId: 5, price: 80 },
      { packageId: 6, price: 10 },
      { packageId: 7, price: 20 },
      { packageId: 8, price: 40 },
    ],
    title: 'Yüklemek istediğiniz tutarı seçin',
  },
};
