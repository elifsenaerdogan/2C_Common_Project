import type { Meta } from '@storybook/react';
import { AtomButton } from './atom-button';

const Story: Meta<typeof AtomButton> = {
  component: AtomButton,
  title: 'Atoms/Button',
  tags: ['autodocs'],
};
export default Story;

export const Primary = {
  args: {
    text: 'Giriş Yap',
    variant: 'primary',
  },
};

export const PrimaryOutlined = {
  args: {
    text: 'Giriş Yap',
    variant: 'primary-outlined',
  },
};

export const Secondary = {
  args: {
    text: 'Giriş Yap',
    variant: 'secondary',
  },
};

export const SecondaryOutlined = {
  args: {
    text: 'Giriş Yap',
    variant: 'secondary-outlined',
  },
};

export const Disabled = {
  args: {
    text: 'Giriş Yap',
    variant: 'disabled',
  },
};

export const Full = {
  args: {
    text: 'Giriş Yap',
    variant: 'full',
  },
};

export const Default = {
  args: {
    text: 'Giriş Yap',
    variant: 'default',
  },
};

export const None = {
  args: {
    text: 'Giriş Yap',
    variant: 'none',
  },
};

export const Link = {
  args: {
    text: 'Giriş Yap',
    variant: 'link',
  },
};
