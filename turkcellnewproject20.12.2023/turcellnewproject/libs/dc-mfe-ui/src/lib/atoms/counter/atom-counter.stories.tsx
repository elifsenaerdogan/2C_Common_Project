import type { Meta } from '@storybook/react';
import { AtomCounter } from './atom-counter';

const Story: Meta<typeof AtomCounter> = {
  component: AtomCounter,
  title: 'Atoms/Counter',
};
export default Story;

export const AtomCounterDefault = {
  args: {
    title: '',
    timer: 0,
    onRestart: false,
    className: '',
  },
};
export const AtomCounterSimple = {
  args: {
    title: 'Deneme',
    timer: 1000000,
    onRestart: false,
    className: '',
  },
};
