import { ImageProps as NextImageProps, StaticImageData } from 'next/image';


export interface InfoObject extends NextImageProps {
    advantageText: string;
    src: StaticImageData;
  }
export interface AtomInfoBoxProps {
  infoElement:InfoObject
  className?: string;
  onClick: () => void;
}
