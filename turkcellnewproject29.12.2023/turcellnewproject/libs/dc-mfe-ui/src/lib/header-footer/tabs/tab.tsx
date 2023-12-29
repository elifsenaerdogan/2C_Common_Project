import Arrow from './arrows/index';
import Base from '@others/interfaces/base-props';
import { SliderArrowType } from '@others/enums/footer';
import styles from './tab.module.scss';
import { CarouselProps } from 'antd/lib/carousel';
import { Carousel, Divider } from 'antd';

interface PropTypes extends Base {
  tabsData: JSX.Element[];
  tabsContentData?: JSX.Element[];
  activeTab?: number | undefined;
  tabsWrapperClassName?: string;
  tabsContentWrapperClassName?: string;
  tabsSettings?: CarouselProps;
  tabsPrevArrowClass?: string;
  tabsNextArrowClass?: string;
  hasBorderBottom?: boolean | undefined;
  prevArrow?: JSX.Element;
  nextArrow?: JSX.Element;
}

const Tabs = (props: PropTypes) => {
  const {
    tabsSettings,
    tabsData,
    tabsContentData,
    tabsWrapperClassName,
    tabsContentWrapperClassName,
    tabsPrevArrowClass,
    tabsNextArrowClass,
    hasBorderBottom = false,
    prevArrow,
    nextArrow,
    activeTab,
  } = props;

  const content = tabsContentData?.find(
    (content: JSX.Element) => Number(content.key) === activeTab
  );

  const carouselSettings = {
    ...tabsSettings,
    className: tabsWrapperClassName,
    prevArrow: prevArrow ? (
      prevArrow
    ) : (
      <Arrow
        wrapperClassName={tabsPrevArrowClass}
        type={SliderArrowType.LEFT}
      />
    ),
    nextArrow: nextArrow ? (
      nextArrow
    ) : (
      <Arrow
        wrapperClassName={tabsNextArrowClass}
        type={SliderArrowType.RIGHT}
      />
    ),
  };

  return (
    <>
      <div className={styles.trkclAppReusableTab}>
        <Carousel {...carouselSettings}>{tabsData}</Carousel>
        {hasBorderBottom ? (
          <Divider className={styles.trkclAppReusableTabDivider} />
        ) : (
          <></>
        )}
      </div>
      {tabsContentData ? (
        <div className={tabsContentWrapperClassName}>{content}</div>
      ) : (
        <></>
      )}
    </>
  );
};

export default Tabs;
