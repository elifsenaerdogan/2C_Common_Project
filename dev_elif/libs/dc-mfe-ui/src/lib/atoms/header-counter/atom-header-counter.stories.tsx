import type { Meta } from '@storybook/react';
import { AtomHeaderCounter } from './atom-header-counter';

const Story: Meta<typeof AtomHeaderCounter> = {
  component: AtomHeaderCounter,
  title: 'Atoms/AtomHeaderCounter',
};
export default Story;

export const Primary = {
  args: {},
};
