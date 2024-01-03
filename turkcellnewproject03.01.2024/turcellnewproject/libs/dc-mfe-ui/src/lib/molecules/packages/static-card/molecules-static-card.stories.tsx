import type { Meta } from '@storybook/react';
import { MoleculesStaticCard } from './molecules-static-card';

const Story: Meta<typeof MoleculesStaticCard> = {
  component: MoleculesStaticCard,
  title: 'Molecules/StaticCard',
};
export default Story;

export const Primary = () => {
  return (
    <MoleculesStaticCard
      staticObject={{
        filterText: '*Filtrelerin dışında kalanlar',
        welcomeText: 'Hoşgeldin Paketleri',
        monthlyTitle: 'Aylık',
        price: '100',
        priceText: 'TL’den başlayan',
        gb: '10GB',
        gbText: 'üstü',
        gbText1: 'paketleri gör',
        btnText: 'Paketleri İncele',
      }}
      onClick={() => console.log('first')}
      select="1"
      cardType="big"
    />
  );
};
