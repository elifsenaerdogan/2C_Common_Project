function getItem(label: any, key: any, icon?: any, children?: any, type?: 'group') {
  return {
    key,
    icon,
    children,
    label,
    type,
  }
}

export const footerNavData = [
  getItem('Hakkımızda', 'sub1', null, [
    getItem('Option 1', '1'),
    getItem('Option 2', '2'),
    getItem('Option 3', '3'),
    getItem('Option 4', '4'),
    getItem('Option 13', '13'),
    getItem('Option 14', '14'),
    getItem('Option 15', '15'),
    getItem('Option 16', '16'),
    getItem('Option 17', '17'),
    getItem('Option 18', '18'),
    getItem('Option 19', '19'),
    getItem('Option 20', '20'),
  ]),
  getItem('Ürün ve Hizmetler', 'sub2', null, [getItem('Option 5', '5'), getItem('Option 6', '6')]),
  getItem('Popüler Marka ve Kategoriler', 'sub3', null, [getItem('Option 9', '9'), getItem('Option 10', '10'), getItem('Option 11', '11'), getItem('Option 12', '12')]),
  getItem('Cep Telefonları ve Markalar', 'sub4', null, [getItem('Option 9', '90'), getItem('Option 10', '100'), getItem('Option 11', '110'), getItem('Option 12', '120')]),
  getItem('İşlem Merkezi', 'sub5', null, [getItem('Option 9', '91'), getItem('Option 10', '101'), getItem('Option 11', '111'), getItem('Option 12', '121')]),
  getItem('Yardım', 'sub6', null, [getItem('Option 9', '92'), getItem('Option 10', '102'), getItem('Option 11', '112'), getItem('Option 12', '122')]),
  getItem('Özel Günler', 'sub7', null, [getItem('Option 9', '93'), getItem('Option 10', '103'), getItem('Option 11', '113'), getItem('Option 12', '123')]),
  getItem('Tüketici Şikayetleri', 'sub8', null, [getItem('Option 9', '94'), getItem('Option 10', '104'), getItem('Option 11', '114'), getItem('Option 12', '124')]),
]

export const mockCopyrightNav = [
  {
    link: 'https://translate.google.com/',
    text: 'Dummy Nav 1',
  },
  {
    link: 'https://translate.google.com/',
    text: 'Dummy Nav 2',
  },
]

export const mockSocialMedia = [
  {
    link: 'http://www.facebook.com/Turkcell',
    children: <div>facebook</div>,
  },
  {
    link: 'https://www.instagram.com/Turkcell',
    children: <div>instagram</div>,
  },
]

export const mockLanguageOptions = [
  {
    label: (
      <a href='https://www.turkcell.com.tr/english-support' target='_blank' rel='noopener noreferrer'>
        Greek
      </a>
    ),
    key: 'greek',
  },
  {
    label: (
      <a href='https://translate.google.com/' target='_blank' rel='noopener noreferrer'>
        Italian
      </a>
    ),
    key: 'italian',
  },
]

export const mockSliderData = [
  {
    link: 'http://www.turkcelldiyalogmuzesi.com/',
    img: 'https://ffo3gv1cf3ir.merlincdn.net/SiteAssets/Kategori/menu/Turkcell-Dialog-Muzesi.png?1773534948052',
  },
  {
    link: 'http://www.turkcelldiyalogmuzesi.com/',
    img: 'https://ffo3gv1cf3ir.merlincdn.net/SiteAssets/Kategori/menu/Turkcell-Dialog-Muzesi.png?1773534948052',
  },
  {
    link: 'http://www.turkcelldiyalogmuzesi.com/',
    img: 'https://ffo3gv1cf3ir.merlincdn.net/SiteAssets/Kategori/menu/Turkcell-Dialog-Muzesi.png?1773534948052',
  },
  {
    link: 'http://www.turkcelldiyalogmuzesi.com/',
    img: 'https://ffo3gv1cf3ir.merlincdn.net/SiteAssets/Kategori/menu/Turkcell-Dialog-Muzesi.png?1773534948052',
  },
  {
    link: 'http://www.turkcelldiyalogmuzesi.com/',
    img: 'https://ffo3gv1cf3ir.merlincdn.net/SiteAssets/Kategori/menu/Turkcell-Dialog-Muzesi.png?1773534948052',
  },
  {
    link: 'http://www.turkcelldiyalogmuzesi.com/',
    img: 'https://ffo3gv1cf3ir.merlincdn.net/SiteAssets/Kategori/menu/Turkcell-Dialog-Muzesi.png?1773534948052',
  },
  {
    link: 'http://www.turkcelldiyalogmuzesi.com/',
    img: 'https://ffo3gv1cf3ir.merlincdn.net/SiteAssets/Kategori/menu/Turkcell-Dialog-Muzesi.png?1773534948052',
  },
  {
    link: 'http://www.turkcelldiyalogmuzesi.com/',
    img: 'https://ffo3gv1cf3ir.merlincdn.net/SiteAssets/Kategori/menu/Turkcell-Dialog-Muzesi.png?1773534948052',
  },
  {
    link: 'http://www.turkcelldiyalogmuzesi.com/',
    img: 'https://ffo3gv1cf3ir.merlincdn.net/SiteAssets/Kategori/menu/Turkcell-Dialog-Muzesi.png?1773534948052',
  },
  {
    link: 'http://www.turkcelldiyalogmuzesi.com/',
    img: 'https://ffo3gv1cf3ir.merlincdn.net/SiteAssets/Kategori/menu/Turkcell-Dialog-Muzesi.png?1773534948052',
  },
  {
    link: 'https://gelecegiyazanlar.turkcell.com.tr/',
    img: 'https://ffo3gv1cf3ir.merlincdn.net/SiteAssets/Kategori/menu/Gelecegi-YazanKadinlar-Logo.png?1773534948052',
  },
  {
    link: 'https://gelecegiyazanlar.turkcell.com.tr/',
    img: 'https://ffo3gv1cf3ir.merlincdn.net/SiteAssets/Kategori/menu/Gelecegi-YazanKadinlar-Logo.png?1773534948052',
  },
  {
    link: 'https://gelecegiyazanlar.turkcell.com.tr/',
    img: 'https://ffo3gv1cf3ir.merlincdn.net/SiteAssets/Kategori/menu/Gelecegi-YazanKadinlar-Logo.png?1773534948052',
  },
]
