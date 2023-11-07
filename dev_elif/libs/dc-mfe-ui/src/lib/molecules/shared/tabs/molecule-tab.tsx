import { useState } from 'react';
import styles from './molecule-tab.module.scss';
import { AtomIcon } from '@atoms';
import classnames from 'classnames';
import { Carousel, Divider } from 'antd';
import { TabProps } from './types/tab-interfaces';

const Tabs = (props: TabProps) => {
  const {
    tabsSettings,
    tabItems,
    tabsContents,
    tabsWrapperClassName,
    tabsContentWrapperClassName,
    defaultActiveTab,
  } = props;

  const [activeTabItem, setActiveItem] = useState(defaultActiveTab);

  const tabItemsData =
    tabItems &&
    tabItems?.map((item) => (
      <>
        <div
          data-value={item?.value}
          key={item?.id}
          className={classnames('text-body-regular', [styles['m-tabItem']], {
            [styles['m-tabItem__active']]: item?.id === activeTabItem,
            'text-body-bold': item?.id === activeTabItem,
          })}
          onClick={() => setActiveItem(item?.id)}
        >
          {item?.icon ? (
            <AtomIcon
              icon={item?.icon}
              wrapperClassName={classnames([styles['m-tabItem__icon']])}
            />
          ) : (
            <></>
          )}
          <div className={styles.tabItem__name}>{item?.tabItemName}</div>
        </div>
        <Divider className={classnames([styles['m-tabItem__divider']])} />
      </>
    ));

  const content = tabsContents?.find(
    (content: JSX.Element) => content?.key === activeTabItem
  );

  const carouselSettings = {
    ...tabsSettings,
    className: classnames(
      [styles['m-tabItemsDataWrapper']],
      tabsWrapperClassName
    ),
  };

  return (
    <>
      <div className={classnames([styles['m-trkclAppTab']])}>
        <Carousel {...carouselSettings}>{tabItemsData}</Carousel>
      </div>
      <div className={tabsContentWrapperClassName}>{content}</div>
    </>
  );
};

export default Tabs;
