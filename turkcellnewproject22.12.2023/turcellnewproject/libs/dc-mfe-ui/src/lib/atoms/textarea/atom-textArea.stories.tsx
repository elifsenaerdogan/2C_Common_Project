import type { Meta } from '@storybook/react';
import { AtomTextarea } from './atom-textArea';
import { IconsCheck } from 'libs/dc-mfe-ui/src/others/icons';

const Story: Meta<typeof AtomTextarea> = {
  component: AtomTextarea,
  title: 'Atoms/Textarea',
};
export default Story;

export const AtomTextAreaDefault = {
  args: {
    rows: 0,
    maxLength: 0,
    field: '',
    name: '',
    dataDirty: false,
    tooltipText: '',
    value: '',
    isSuccess: false,
    isError: false,
    isDisabled: false,
  },
};
export const AtomTextAreaSimple = {
  args: {
    rows: 5,
    maxLength: 15,
    field: 'dd',
    name: '',
    dataDirty: false,
    tooltipText: 'Deneme',
    value: 'Deneme',
    icon: <IconsCheck />,
    isSuccess: false,
    isError: true,
    isDisabled: false,
  },
};
