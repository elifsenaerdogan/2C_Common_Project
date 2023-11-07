import styles from './arrows.module.scss';
import Base from '@others/interfaces/base-props';
import { MouseEventHandler } from 'react';
import { SliderArrowType } from '@others/enums/footer';
import { IconsArrowLarge } from '@others/icons';

interface PropTypes extends Base {
  onClick?: MouseEventHandler;
  type: string;
  wrapperClassName?: string;
}

function Arrow(props: PropTypes) {
  const { className = '', onClick, type, wrapperClassName } = props;

  return (
    <div
      className={`${styles.trkclAppSliderArrow} ${className} ${wrapperClassName} `}
      onClick={onClick}
    >
      {type === SliderArrowType.LEFT ? (
        <IconsArrowLarge />
      ) : (
        <IconsArrowLarge className={styles.trkcllAppRightArrow} />
      )}
    </div>
  );
}

export default Arrow;
