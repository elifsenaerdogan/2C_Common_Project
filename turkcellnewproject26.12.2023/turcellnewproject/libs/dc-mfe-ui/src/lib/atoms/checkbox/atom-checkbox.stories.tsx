import type { Meta } from '@storybook/react';
import { AtomCheckbox } from './atom-checkbox';

const Story: Meta<typeof AtomCheckbox> = {
  component: AtomCheckbox,
  title: 'Atoms/Checkbox',
  argTypes: {
    onClickText: { action: 'onClickText executed!' },
  },
};
export default Story;

export const Default = {
  args: {
    name: '',
    label: '',
    message: '',
    disabled: false,
    checked: false,
    required: false,
    block: false,
    className: '',
  },
};

export const CheckboxExample = {
  args: {
    name: 'checkbox',
    label: 'checkbox',
    message: 'checkbox',
    disabled: false,
    checked: true,
    required: false,
    block: false,
    className: '',
  },
};
