import styles from '../../../lib/header-footer/footer/copyright/copyright.module.scss';
import { Languages } from '@others/enums/footer';

export const webNavShownItemLimit = 10;

export const copyrightNavConstants = [
  {
    text: 'Gizlilik ve Güvenlik',
    link: '/tr/gizlilik-ve-guvenlik',
  },
  {
    text: 'Site Haritası',
    link: '/tr/hakkimizda/site-haritasi',
  },
  {
    text: 'Tarife Karşılaştırma',
    link: '/tarifekarsilastirmasitesi',
    className: styles.trkcllAppCopyrightNavTarife,
  },
];

export const sliderDefaultData = [
  {
    link: 'https://fizy.com',
    img: 'https://ffo3gv1cf3ir.merlincdn.net/SiteAssets/Kategori/menu/fizy-logo.png?1773534948052',
  },
  {
    link: 'https://yaani.com.tr',
    img: 'https://ffo3gv1cf3ir.merlincdn.net/SiteAssets/Kategori/menu/Yaani.png?1773534948052',
  },
  {
    link: 'https://www.superonline.net/',
    img: 'https://ffo3gv1cf3ir.merlincdn.net/SiteAssets/Kategori/menu/sol-yeni-logo.png?1773534948052',
  },
  {
    link: 'https://www.turkcell.com.tr/platinum',
    img: 'https://ffo3gv1cf3ir.merlincdn.net/SiteAssets/Kategori/menu/platinum-logo.png?1773534948052',
  },
  {
    link: 'https://bip.com',
    img: 'https://ffo3gv1cf3ir.merlincdn.net/SiteAssets/Kategori/menu/bip-logo.png?1773534948052',
  },
  {
    link: 'http://www.turkiyeninuygulamalari.com/tr',
    img: 'https://ffo3gv1cf3ir.merlincdn.net/SiteAssets/Kategori/menu/TurkiyeninUygulamalari-Logo.png?1773534948052',
  },
  {
    link: 'https://www.tvplus.com.tr/',
    img: 'https://ffo3gv1cf3ir.merlincdn.net/SiteAssets/Kategori/menu/tv-plus-logo-yeni.png?1773534948052',
  },
  {
    link: 'https://mylifebox.com/',
    img: 'https://ffo3gv1cf3ir.merlincdn.net/SiteAssets/Kategori/menu/LifeBox-Logo.png?1773534948052',
  },
  {
    link: 'https://paycell.com.tr/',
    img: 'https://ffo3gv1cf3ir.merlincdn.net/SiteAssets/Kategori/menu/paycell-logo.png?1773534948052',
  },
  {
    link: 'https://www.turkcell.com.tr/gnctrkcll',
    img: 'https://ffo3gv1cf3ir.merlincdn.net/SiteAssets/Kategori/menu/gnc-logo.png?1773534948052',
  },
  {
    link: 'https://www.globalbilgi.com.tr/',
    img: 'https://ffo3gv1cf3ir.merlincdn.net/SiteAssets/Kategori/menu/Global-Bilgi-Logo.png?1773534948052',
  },
  {
    link: 'http://playcell.com/',
    img: 'https://ffo3gv1cf3ir.merlincdn.net/SiteAssets/Kategori/menu/Playcell.png?1773534948052',
  },
  {
    link: 'https://www.turkcell.com.tr/5g5t',
    img: 'https://ffo3gv1cf3ir.merlincdn.net/SiteAssets/Kategori/menu/5G5T-Logo.png?1773534948052',
  },
  {
    link: 'https://partner.turkcell.com.tr',
    img: 'https://ffo3gv1cf3ir.merlincdn.net/SiteAssets/Kategori/menu/Turkcell-Partner-Network-Logo.png?1773534948052',
  },
  {
    link: 'https://gelecegiyazanlar.turkcell.com.tr/',
    img: 'https://ffo3gv1cf3ir.merlincdn.net/SiteAssets/Kategori/menu/Gelecegi-YazanKadinlar-Logo.png?1773534948052',
  },
  {
    link: 'http://www.turkcelldiyalogmuzesi.com/',
    img: 'https://ffo3gv1cf3ir.merlincdn.net/SiteAssets/Kategori/menu/Turkcell-Dialog-Muzesi.png?1773534948052',
  },
  {
    link: 'https://turkcellbulut.com/',
    img: 'https://ffo3gv1cf3ir.merlincdn.net/SiteAssets/Kategori/menu/Turkcell-Bulut.png?1773534948052',
  },
];

export const sliderSettings = {
  infinite: false,
  dots: false,
  arrows: true,
  slidesToShow: 8,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        arrows: false,
        swipeToSlide: true,
        swipe: true,
        slidesToShow: 3,
        variableWidth: true,
      },
    },
  ],
};

export const languageDefaultOptions = [
  {
    label: (
      <a
        href="https://www.turkcell.com.tr/english-support"
        target="_blank"
        rel="noopener noreferrer"
      >
        Türkçe
      </a>
    ),
    key: Languages.TURKISH,
  },
  {
    label: (
      <a
        href="https://www.turkcell.com.tr/english-support"
        target="_blank"
        rel="noopener noreferrer"
      >
        English
      </a>
    ),
    key: Languages.ENGLISH,
  },
  {
    label: (
      <a
        href="https://www.turkcell.com.tr/arabic-support"
        target="_blank"
        rel="noopener noreferrer"
      >
        العربية
      </a>
    ),
    key: Languages.ARABIC,
  },
  {
    label: (
      <a
        href="https://www.turkcell.com.tr/russian-support"
        target="_blank"
        rel="noopener noreferrer"
      >
        русский
      </a>
    ),
    key: Languages.RUSSIAN,
  },
];
