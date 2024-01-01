import type { Meta } from '@storybook/react';
import { AtomTermsRegistrationCheckbox } from './atom-terms-registrationCheckbox';

const Story: Meta<typeof AtomTermsRegistrationCheckbox> = {
  component: AtomTermsRegistrationCheckbox,
  title: 'Atoms/TermsRegistrationCheckbox',
};
export default Story;

export const AtomTermsRegistrationCheckboxDefault = {
  args: {
    name: '',
    label: '',
    message: '',
    disabled: false,
    checked: false,
    block: false,
    text: '',
    image: '',
    saveTermsText: '',
    approveText: '',
    saveToHide: '',
    className: '',
  },
};
export const AtomTermsRegistrationCheckboxPrimary = {
  args: {
    name: '',
    label: 'registrationCheckbox',
    message: '',
    disabled: false,
    block: false,
    text: 'Kart bilgilerimi',
    image:
      '<img src="https://ffo3gv1cf3ir.merlincdn.net/static_lib/assetsv2/common/images/content/logo-masterpass@2x.png?1773534948009"alt="" />',
    saveTermsText: 'Kaydetme şartlarını',
    approveText: 'okudum, onaylıyorum.',
    saveToHide: 'altyapısında saklamak istiyorum.',
    className: '',
  },
};
