import type { Meta } from '@storybook/react';
import { MoleculeProfilMenu } from './molecule-profil-menu';
import {
  Icons360,
  IconsMobileTopUp,
  IconsReturn,
  IconsTechSpecs,
} from '@others/icons';

const Story: Meta<typeof MoleculeProfilMenu> = {
  component: MoleculeProfilMenu,
  title: 'Molecules/ProfilMenu',
};
export default Story;

export const Primary = () => {
  return (
    <div
      style={{
        width: '380px',
        position: 'relative',
        padding: '20px',
        boxShadow:
          '0 8px 10px -5px rgba(0, 0, 0, 0.1), 0 6px 30px 5px rgba(0, 0, 0, 0.1), 0 16px 24px 2px rgba(0, 0, 0, 0.1)',
        backgroundColor: 'white',
        borderRadius: '10px 0 0 10px',
      }}
    >
      <MoleculeProfilMenu
        name="Kemal"
        profilAction={[
          { text: 'İşlem Merkezine Git', url: '/' },
          { text: 'Ayarlarım', url: '/' },
        ]}
        onClick={() => console.log('')}
        profilCart={[
          {
            cartTitle: 'Fatura öde',
            cartBody: 'Ekim faturası',
            cartBottom: '200TL',
            link: '/',
            icon: <IconsTechSpecs />,
          },
          {
            cartTitle: 'Fatura öde',
            cartBody: 'Ekim faturası',
            link: '/',
            icon: <Icons360 />,
          },
          {
            cartTitle: 'Ek paket Al',
            link: '/',
            icon: <IconsMobileTopUp />,
          },
          {
            cartTitle: 'Otomatik Ödeme Talimatı Ver',
            link: '/',
            icon: <IconsReturn />,
          },
        ]}
        avatar={{ size: 'large', userName: 'Turgut' }}
        avatarUser={{
          userName: {
            name: 'Turgut K',
            // nameColor: 'dark',
            // nameFontSize:'medium'
          },
          userNumber: {
            number: '5443858474',
            // numberColor: 'dark',
            // numberFontSize:'medium'
          },
          icon: {
            visibility: false,
            // size: 'dark',
            // rotateDeg:'medium',
            // color: ""
          },
        }}
      />
    </div>
  );
};
