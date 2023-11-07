import type { Meta } from '@storybook/react';
import { AtomNavProfileMobile } from './atom-nav-profile';

const Story: Meta<typeof AtomNavProfileMobile> = {
  component: AtomNavProfileMobile,
  title: 'Header-Footer/AtomNavProfileMobile',
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
