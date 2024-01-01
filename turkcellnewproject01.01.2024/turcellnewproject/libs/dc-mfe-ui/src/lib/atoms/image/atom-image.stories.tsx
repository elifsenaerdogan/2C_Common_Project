import type { Meta } from '@storybook/react';
import { AtomImage } from './atom-image';
import photo from '@others/assets/images/illustration.png';
const Story: Meta<typeof AtomImage> = {
  component: AtomImage,
  title: 'Atoms/Image',
};
export default Story;

export const Primary = {
  args: {
    src: photo,
    alt: 'fotograf',
    width: 500,
    height: 250,
  },
};
