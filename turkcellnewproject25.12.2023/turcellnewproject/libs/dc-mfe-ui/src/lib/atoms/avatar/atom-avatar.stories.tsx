import type { Meta, StoryObj } from '@storybook/react';
import { AtomAvatar } from './atom-avatar';
import user from '@others/assets/images/user.jpeg';

const Story: Meta<typeof AtomAvatar> = {
  title: 'Atoms/Avatar',
  component: AtomAvatar,
  tags: ['autodocs'],
  argTypes: {
    avatarBgColor: {
      options: ['default', 'yellow'],
      control: { type: 'radio' },
      if: { arg: 'displayImage', truthy: false },
    },
    size: {
      options: ['small', 'medium', 'large'],
      control: { type: 'radio' },
    },
    notificationCount: {
      options: [0, 1, 2, 3],
      control: { type: 'select' },
    },
  },
};
export default Story;
type Story = StoryObj<typeof AtomAvatar>;

export const AtomAvatars: Story = {
  render: (args) => {
    return <AtomAvatar {...args} />;
  },
  args: {
    userName: 'Ahmet Yurt',
    notificationCount: 3,
    avatarBgColor: 'default',
    avatarImage: user,
    displayImage: true,
  },
};
