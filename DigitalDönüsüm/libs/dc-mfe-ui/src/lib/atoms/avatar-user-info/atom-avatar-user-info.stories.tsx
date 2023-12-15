import type { Meta, StoryObj } from '@storybook/react';
import { AtomAvatarUserInfo } from './atom-avatar-user-info';
import { AtomAvatar } from '../index';

const Story: Meta<typeof AtomAvatarUserInfo> = {
  component: AtomAvatarUserInfo,
  title: 'Atoms/AvatarUserInfo',
  tags: ['autodocs'],
  parameters: {
    zeplinLink:
      'https://app.zeplin.io/project/5b7138d9bf25c56d09262877/screen/651fe3756f297d0f4f98e972',
  },
};
export default Story;
type Story = StoryObj<typeof AtomAvatarUserInfo>;

export const AtomAvatarUserInformation: Story = {
  render: (args) => {
    return <AtomAvatarUserInfo {...args} />;
  },
  args: {
    userName: {
      name: 'Ahmet Yurt',
      nameColor: 'dark',
      nameFontSize: 'medium',
    },
    userNumber: {
      number: '0535 555 55 55',
      numberColor: 'dark',
    },
    icon: {
      visibility: true,
      rotateDeg: 90,
    },
  },
};

const Compiled = () => {
  return (
    <div style={{ display: 'flex' }}>
      <AtomAvatar userName="Özgür Tarhan" />
      <AtomAvatarUserInfo
        userName={{ name: 'Ahmet K' }}
        userNumber={{ number: '0535 555 55' }}
        icon={{ visibility: true }}
      />
    </div>
  );
};

export const compiedStory: Story = {
  render: () => <Compiled />,
};
