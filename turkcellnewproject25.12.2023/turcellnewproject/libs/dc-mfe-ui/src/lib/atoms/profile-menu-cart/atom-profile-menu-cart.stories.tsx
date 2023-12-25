import type { Meta, StoryObj } from '@storybook/react';
import { AtomProfileMenuCart } from './atom-profile-menu-cart';
import { Icons360 } from '@others/icons';

const Story: Meta<typeof AtomProfileMenuCart> = {
  component: AtomProfileMenuCart,
  title: 'Atoms/ProfileMenuCart',
  tags: ['autodocs'],
};

export default Story;
type Story = StoryObj<typeof AtomProfileMenuCart>;

export const ProfileMenuCart: Story = {
  render: (args) => {
    return <AtomProfileMenuCart {...args} />;
  },
  args: {
    icon: <Icons360 width={24} height={24} />,
    cartTitle: 'Faturanı Öde',
    cartBody: 'Ağustos Faturası',
    cartBottom: '120 TL',
  },
};
