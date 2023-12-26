import type { Meta } from '@storybook/react';
import MoleculePackageSummary from './molecule-package-summary';

const Story: Meta<typeof MoleculePackageSummary> = {
  component: MoleculePackageSummary,
  title: 'Molecules/PackageSummary',
};
export default Story;

export const MoleculePackageSummarySimple = {
  args: {
    className: '',
    packageName: 'Turkcell maksi 16 GB',
    phone: '05051233333',
  },
};
