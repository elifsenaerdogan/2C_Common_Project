import styles from './arrows.module.scss';
import Base from '@others/interfaces/base-props';
import { MouseEventHandler } from 'react';
import { SliderArrowType } from '@others/enums/footer';
import { IconsArrowLarge } from '@others/icons';

interface PropTypes extends Base {
  onClick?: MouseEventHandler;
  type: string;
  wrapperClassName?: string;
  arrowColor?: string;
}

function Arrow(props: PropTypes) {
  const { className = '', onClick, type, arrowColor, wrapperClassName } = props;

  return (
    <div
      className={`${styles.trkclAppSliderArrow} ${className} ${wrapperClassName} `}
      onClick={onClick}
    >
      {type === SliderArrowType.LEFT ? (
        <IconsArrowLarge width={16} height={16} color={arrowColor} />
      ) : (
        <IconsArrowLarge
          width={16}
          height={16}
          className={styles.trkcllAppRightArrow}
          color={arrowColor}
        />
      )}
    </div>
  );
}

export default Arrow;
