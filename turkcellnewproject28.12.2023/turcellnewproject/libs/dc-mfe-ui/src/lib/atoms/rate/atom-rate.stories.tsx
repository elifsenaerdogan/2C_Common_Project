import type { Meta } from '@storybook/react';
import { AtomRate } from './atom-rate';

const Story: Meta<typeof AtomRate> = {
  component: AtomRate,
  title: 'Atoms/Rate',
};
export default Story;

export const Default = {
  args: {},
};

export const WithTooltips = {
  args: {
    tooltips: ['worst', 'not good', 'not bad', 'good', 'excellent']
  },
}