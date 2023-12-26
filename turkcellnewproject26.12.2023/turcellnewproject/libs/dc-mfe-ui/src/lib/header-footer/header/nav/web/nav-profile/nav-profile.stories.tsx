import type { Meta } from '@storybook/react';
import { NavProfileWeb } from './nav-profile';

const Story: Meta<typeof NavProfileWeb> = {
  component: NavProfileWeb,
  title: 'Atoms/NavProfileWeb',
};
export default Story;

export const Primary = {
  args: {
    userName: {
      name: 'Özgür Taşkan',
    },
    userNumber: {
      number: '0535 555 55 55',
    },
    icon: {
      visibility: true,
      rotateDeg: 180,
    },
  },
};
