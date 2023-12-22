import type { Meta } from '@storybook/react';
import { AtomLoginButton } from './atom-login-button';

const Story: Meta<typeof AtomLoginButton> = {
  component: AtomLoginButton,
  title: 'Atoms/LoginButton',
};
export default Story;

export const Primary = {
  args: {},
};
