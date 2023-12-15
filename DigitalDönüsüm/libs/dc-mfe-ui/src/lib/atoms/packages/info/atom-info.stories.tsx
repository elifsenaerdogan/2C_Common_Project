import type { Meta } from '@storybook/react';
import { AtomInfo } from './atom-info';

const Story: Meta<typeof AtomInfo> = {
  component: AtomInfo,
  title: 'Atoms/Info',
};
export default Story;

export const Primary = {
  args: {},
};
