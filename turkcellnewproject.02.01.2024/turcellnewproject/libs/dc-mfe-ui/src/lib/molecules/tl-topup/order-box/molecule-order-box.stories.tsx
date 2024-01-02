import type { Meta } from '@storybook/react';
import { MoleculeOrderBox } from '@molecules';

const Story: Meta<typeof MoleculeOrderBox> = {
  component: MoleculeOrderBox,
  title: 'Molecules/OrderBox',
};
export default Story;

export const MoleculeOrderBoxSimple = {
  args: {
    className: '',
    packageName: 'Platinium Maksi 16GB',
    price: '70',
    phone: '05055055555',
    type: 'TL',
    productTitle: 'Ürün',
    phoneTitle: 'Telefon',
    packageAmountTitle: 'Fiyat',
  },
};
