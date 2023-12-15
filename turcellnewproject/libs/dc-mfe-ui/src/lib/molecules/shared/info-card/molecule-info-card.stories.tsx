import type { Meta } from '@storybook/react';
import { InfoCard } from './molecule-info-card';

const Story: Meta<typeof InfoCard> = {
  component: InfoCard,
  title: 'Molecules/InfoCard',
};
export default Story;

export const Primary = () => (
  <div style={{ paddingTop: '50px', width:800}}>
    <InfoCard text="TL yükleme işleminiz başarıyla gerçekleşmiştir." />
  </div>
);
