import { CarouselProps } from 'antd/lib/carousel';

type TabItem = {
  id: string;
  categoryName?: string;
  icon?: JSX.Element | string;
  value?: string | number;
};

export interface TabProps {
  tabItems: TabItem[];
  tabsContents: JSX.Element[];
  defaultActiveTab?: string | undefined;
  tabsWrapperClassName?: string;
  tabsContentWrapperClassName?: string;
  tabsSettings?: CarouselProps;
  getActiveTab?: (newVal: any) => void;
  className?: string;
}
