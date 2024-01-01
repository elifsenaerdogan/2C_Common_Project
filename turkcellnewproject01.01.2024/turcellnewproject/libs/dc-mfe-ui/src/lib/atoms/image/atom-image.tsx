import Image from 'next/image';
import styles from './atom-image.module.scss';
import classnames from 'classnames';
import { ImageProps } from './types/image-interfaces';

export const AtomImage = (props: ImageProps) => {
  const { src, alt, height, width, className, id, ...rest } = props;

  const imageClasses = classnames([styles['a-image']], className);

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={imageClasses}
      id={id}
      {...rest}
    />
  );
};

export default AtomImage;
