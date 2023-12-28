import type { Meta, StoryObj } from '@storybook/react';
import { IconsCancel } from '@others/icons';
import { AtomIcon } from './atom-icon';

const meta: Meta<typeof AtomIcon> = {
  title: 'Atoms/Icon',
  component: AtomIcon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof AtomIcon>;

export const basicIcon = {
  args: {
    icon: <IconsCancel />,
  },
};

export const modifiedIcon: Story = {
  render: () => (
    <AtomIcon icon={<IconsCancel width="50px" height="40px" color="red" />} />
  ),
};
