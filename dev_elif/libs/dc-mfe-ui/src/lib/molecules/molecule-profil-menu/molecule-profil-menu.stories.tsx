import type { Meta } from '@storybook/react';
import { MoleculeProfilMenu } from './molecule-profil-menu';

const Story: Meta<typeof MoleculeProfilMenu> = {
  component: MoleculeProfilMenu,
  title: 'Molecules/MoleculeProfilMenu',
};
export default Story;

export const Primary = {
  args: {
    show : true
  },
};
