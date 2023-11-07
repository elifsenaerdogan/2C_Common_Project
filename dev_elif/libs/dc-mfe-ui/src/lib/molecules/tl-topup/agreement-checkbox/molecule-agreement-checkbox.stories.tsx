import type { Meta } from '@storybook/react';
import { MoleculeAgreementCheckbox } from './molecule-agreement-checkbox';

const Story: Meta<typeof MoleculeAgreementCheckbox> = {
  component: MoleculeAgreementCheckbox,
  title: 'Molecules/AgreementCheckbox',
};
export default Story;

export const Primary = {
  args: {
    approveText: 'Okudum ve onaylıyorum.',
    list: [
      {
        text: 'Kart Bilgilerini Kaydetme Şartlarını Onaylıyorum',
        key: 'creditCart',
      },
      {
        text: 'Mesafeli satış sözleşmesi',
        key: 'mesafe',
      },
    ],
    onClick: (e: any) => console.log(e),
  },
};
