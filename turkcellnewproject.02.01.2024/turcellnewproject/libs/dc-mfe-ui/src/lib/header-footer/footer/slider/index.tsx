import styles from './slider.module.scss';
import Base from '@others/interfaces/base-props';
import Tabs from '../../tabs/tab';
import {
  sliderDefaultData,
  sliderSettings,
} from '@others/constants/footer/footer-constants';

export interface SliderData {
  link: string;
  img: string;
}

interface PropTypes extends Base {
  sliderData?: SliderData[];
}

const Slider = (props: PropTypes) => {
  const { sliderData } = props;

  const slider = (sliderData || sliderDefaultData).map(
    (sliderElement: SliderData) => (
      <a
        href={sliderElement.link}
        className={styles.trkcllAppPartnerWrapper}
        key={sliderElement.link}
        target="_blank"
        rel="noreferrer"
      >
        <img src={sliderElement.img} />
      </a>
    )
  );

  return (
    <Tabs
      tabsSettings={sliderSettings}
      tabsData={slider}
      tabsWrapperClassName={styles.trkclAppCarousel}
    />
  );
};

export default Slider;
