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
      { id: 1, price: 50, isActive: false },
      { id: 2, price: 60, isActive: true },
      { id: 3, price: 70, isActive: false },
      { id: 4, price: 80, isActive: false },
      { id: 5, price: 80, isActive: false },
      { id: 6, price: 10, isActive: false },
      { id: 7, price: 20, isActive: false },
      { id: 8, price: 40, isActive: false },
    ],
    title: 'Yüklemek istediğiniz tutarı seçin',
  },
};
