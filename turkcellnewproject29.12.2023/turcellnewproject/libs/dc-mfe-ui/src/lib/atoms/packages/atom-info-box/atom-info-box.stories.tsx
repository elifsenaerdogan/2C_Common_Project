import type { Meta } from '@storybook/react';
import { AtomInfoBox } from './atom-info-box';
import res from '@others/assets/images/bitmap.webp';

const Story: Meta<typeof AtomInfoBox> = {
  component: AtomInfoBox,
  title: 'Atoms/InfoBox',
};
export default Story;

export const Primary = () => {
  return (
    <AtomInfoBox
      onClick={() => console.log('first')}
      infoElement={{
        src: res,
        alt: 'deneme',
        advantageText: 'Caribou pazar kahveniz bizden',
      }}
    />
  );
};
