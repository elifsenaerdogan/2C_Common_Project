import type { Meta } from '@storybook/react';
import { MoleculeBasketAmountBar } from './molecule-basket-amount-bar';
import { PageTypes } from '@others/enums/pageTypes';

const Story: Meta<typeof MoleculeBasketAmountBar> = {
  component: MoleculeBasketAmountBar,
  title: 'Molecules/BasketAmountBar',
  argTypes: {
    onClick: { action: 'onClick executed!' },
  },
};
export default Story;

export const MoleculesBasketAmountBarSimple = {
  args: {
    className: '',
    paymentTotal: '80',
    desc: 'Henüz bir seçim yapılmadı',
    balance: '50',
    type: PageTypes.PACKAGE,
  },
};
