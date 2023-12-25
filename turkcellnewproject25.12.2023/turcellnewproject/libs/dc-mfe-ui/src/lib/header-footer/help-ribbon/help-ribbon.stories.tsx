import type { Meta, StoryObj } from '@storybook/react';
import { HelpRibbon } from './help-ribbon';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof HelpRibbon> = {
  component: HelpRibbon,
  title: 'Molecules/HelpRibbon',
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'dark',
      values: [
        {
          name: 'dark',
          value: '#919fac',
        },
      ],
    },
  },
};
export default meta;
type Story = StoryObj<typeof HelpRibbon>;

export const Primary = {
  args: {
    helpRibbonData:
      'Yeni numara talebiniz ile ilgili merak ettikleriniz,/,https://ffo3gv1cf3ir.merlincdn.net/SiteAssets/Bireysel/Yardim/alt-kategori-ikon/Tik-Diye-Turkcellli-Olmak.png?17735349480645!Yeni numara talebiniz ile ilgili merak ettikleriniz,/,https://ffo3gv1cf3ir.merlincdn.net/SiteAssets/Bireysel/Yardim/alt-kategori-ikon/Tik-Diye-Turkcellli-Olmak.png?17735349480645!Yeni numara talebiniz ile ilgili merak ettikleriniz,/,https://ffo3gv1cf3ir.merlincdn.net/SiteAssets/Bireysel/Yardim/alt-kategori-ikon/Tik-Diye-Turkcellli-Olmak.png?17735349480645!Yeni numara talebiniz ile ilgili merak ettikleriniz,/,https://ffo3gv1cf3ir.merlincdn.net/SiteAssets/Bireysel/Yardim/alt-kategori-ikon/Tik-Diye-Turkcellli-Olmak.png?17735349480645',
    helpRibbonPageManager: {
      'supportRibbon.text': 'Yardım ister misiniz?',
      'supportBox.title': 'Merhaba {0}',
      'supportBox.text':
        'Sorunuzu yazabilir ya da sıkça sorulan sorulardan yararlanabilirsiniz.',
      'supportBox.searchbox.placeholdertext': 'Sorunuzu buraya yazabiilirsiniz',
    },
    username: 'Yasin',
  },
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to HelpRibbon!/gi)).toBeTruthy();
  },
};
