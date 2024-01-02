import type { Meta } from '@storybook/react';
import { MoleculeCardExtraInfo } from './molecule-card-extra-info';
const Story: Meta<typeof MoleculeCardExtraInfo> = {
  component: MoleculeCardExtraInfo,
  title: 'Molecules/MoleculeCardExtraInfo',
};
export default Story;

const icons = [
  {
    id:0,
    uri: 'https://logos-world.net/wp-content/uploads/2023/02/Masterpass-Logo.png',
    name: 'masterpass'
  },
  {
    id:1,
    uri: 'https://logos-world.net/wp-content/uploads/2023/02/Masterpass-Logo.png',
    name: 'masterpass'
  },
];


export const Primary = {
  args: {
    cardTitle: 'title of the card',
    text: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatibus.',
    bankLogo: icons,
  },
};
