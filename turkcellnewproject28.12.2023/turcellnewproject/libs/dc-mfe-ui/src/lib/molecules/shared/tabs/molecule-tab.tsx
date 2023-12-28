import { useState } from 'react';
import styles from './molecule-tab.module.scss';
import { AtomIcon } from '@atoms';
import classnames from 'classnames';
import { Carousel, Divider } from 'antd';
import { TabProps } from './types/tab-interfaces';

export function Tabs(props: TabProps) {
  const {
    tabsSettings,
    tabItems,
    tabsContents,
    tabsWrapperClassName,
    tabsContentWrapperClassName,
    defaultActiveTab,
    getActiveTab,
    className
  } = props;

  const [activeTabItem, setActiveItem] = useState(defaultActiveTab);

  const tabItemsData = tabItems?.map((item, index) =>{
    if (!item || !item?.categoryName) return;
    return (
    <div key={item?.id || index}>
      <div
        data-value={item?.value}
        className={classnames('text-body-regular', [styles['m-tabItem']], {
          [styles['m-tabItem__active']]: item?.id === activeTabItem,
          'text-body-bold': item?.id === activeTabItem,
        })}
        onClick={() => {
          setActiveItem(item?.id);
          getActiveTab && getActiveTab(item);
        }}
      >
        {item?.icon ? (
          <AtomIcon
            icon={item?.icon}
            wrapperClassName={classnames([styles['m-tabItem__icon']])}
          />
        ) : (
          <></>
        )}
        <div className={styles.tabItem__name}>{item?.categoryName}</div>
      </div>
      <Divider className={classnames([styles['m-tabItem__divider']])} />
    </div>
  )});

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
    <div className={className}>
      <div className={classnames([styles['m-trkclAppTab']])}>
        <Carousel {...carouselSettings}>{tabItemsData}</Carousel>
      </div>

      <div className={tabsContentWrapperClassName}>{content}</div>
    </div>
  );
}

export default Tabs;
