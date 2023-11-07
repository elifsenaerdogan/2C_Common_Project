import type { Meta } from '@storybook/react';
import { MoleculeSelectBox } from './molecule-select-box';
const options = [
  {
    label: '01',
    value: 'Seçenek1',
  },
  {
    label: '02',
    value: 'Seçenek2',
  },
  {
    label: '03',
    value: 'Seçenek3',
  },
];
const Story: Meta<typeof MoleculeSelectBox> = {
  component: MoleculeSelectBox,
  title: 'Molecules/SelectBox',
};
export default Story;

export const SelectBoxSimple = {
  args: {
    options: options,
    label: 'Ay',
    className: '',
    onBlur: () => console.log('hello'),
    onFocus: () => console.log('onFocus'),

  },
};
