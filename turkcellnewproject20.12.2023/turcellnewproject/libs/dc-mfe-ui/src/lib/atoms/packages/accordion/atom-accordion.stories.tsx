import type { Meta } from '@storybook/react';
import { Accordion } from './atom-accordion';
import type { CollapseProps } from 'antd';

const Story: Meta<typeof Accordion> = {
  component: Accordion,
  title: 'Atoms/Accordion',
};
export default Story;

const items: CollapseProps['items'] = [
  {
    key: '1',
    label: 'This is panel header 1',
    children: <p>Panel 1 content</p>,
  },
];

export const Primary = () => (<Accordion ghost items={items}/>)