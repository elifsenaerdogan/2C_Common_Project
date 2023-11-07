import type { Meta } from '@storybook/react';
import { SwitchButtons } from './switch-buttons';
import { HeaderType } from '@others/enums/headerType';

const Story: Meta<typeof SwitchButtons> = {
  component: SwitchButtons,
  title: 'Header-Footer/SwitchButtons',
};
export default Story;

export const Primary = {
  args: {
    activeStatus: HeaderType.INDIVIDUAL,
  },
};
