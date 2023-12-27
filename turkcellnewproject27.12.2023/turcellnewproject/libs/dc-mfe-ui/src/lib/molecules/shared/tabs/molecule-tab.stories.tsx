import type { Meta, StoryObj } from '@storybook/react';
import Tabs from './molecule-tab';
import { exampleTabSettings } from '@others/constants/tabs';
import styles from './molecule-tab.module.scss';
import { Icons360 } from '@others/icons';

const Story: Meta<typeof Tabs> = {
  title: 'Molecules/Tabs',
  component: Tabs,
  parameters: {},
  tags: ['autodocs'],
};
export default Story;
type Story = StoryObj<typeof Tabs>;

const TabPage = () => {
  const dummyTabsData = [
    {
      id: '1',
      tabItemName: 'Tab Item 1',
    },
    {
      id: '2',
      tabItemName: 'Tab Item 2',
    },
    {
      id: '3',
      tabItemName: 'Tab Item 3',
    },
    {
      id: '4',
      tabItemName: 'Tab Item 4',
    },
    {
      id: '5',
      tabItemName: 'Tab Item 5',
    },
    {
      id: '6',
      tabItemName: 'Tab Item 6',
    },
    {
      id: '7',
      tabItemName: 'Tab Item 7',
    },
    {
      id: '8',
      tabItemName: 'Tab Item 8',
    },
  ];

  const dummyTabsContentData = [
    <div key={1}>
      <div>AA</div>
    </div>,
    <div key={2}>
      <div>AA</div>
      <div>
        <span>BB</span>
      </div>
    </div>,
  ];

  return (
    <div className={styles.storybook__tab}>
      <Tabs
        tabsSettings={exampleTabSettings}
        tabItems={dummyTabsData}
        tabsContents={dummyTabsContentData}
        tabsContentWrapperClassName={styles.storybook__tabsContentWrapper}
        defaultActiveTab={'1'}
      />
    </div>
  );
};

export const TabExample: Story = {
  render: () => <TabPage />,
};
