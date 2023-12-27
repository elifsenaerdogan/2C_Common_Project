import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { AtomFavButton } from './atom-fav-button';

const Story: Meta<typeof AtomFavButton> = {
  component: AtomFavButton,
  title: 'Atoms/FavButton',
  tags: ['autodocs'],
};
export default Story;
type Story = StoryObj<typeof AtomFavButton>;

export const FavButton = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive((prevState) => !prevState);
  };

  return <AtomFavButton isActive={active} onClick={() => handleClick()} />;
};
