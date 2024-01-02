import { StaticImageData } from 'next/image';

export interface HelpRibbonLink {
  text: string;
  link: string;
  iconImageSrc: string | StaticImageData;
}

export interface HelpRibbonData {
  'supportBox.title': string;
  'supportBox.text': string;
  'supportBox.searchbox.placeholdertext': string;
  'supportRibbon.text': string;
  'supportBox.default.category.image': string;
}
