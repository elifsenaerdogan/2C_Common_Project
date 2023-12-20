import type { Meta } from '@storybook/react';
import NonLogin from './molecule-non-login';

const Story: Meta<typeof NonLogin> = {
  component: NonLogin,
  title: 'Molecules/NonLogin',
};
export default Story;

export const MoleculeNonLogin = {
  args: {
    className: '',
  },
};
