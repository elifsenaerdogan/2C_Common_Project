import type { Meta } from '@storybook/react';
import { AtomComplexRadioButton } from './atom-complex-radio-button';

const Story: Meta<typeof AtomComplexRadioButton> = {
  component: AtomComplexRadioButton,
  title: 'Atoms/ComplexRadioButton',
};
export default Story;

export const Primary = () => {
  return (
    <AtomComplexRadioButton
      radioButtonElement={{
        firstMonthPrice: 545.0,
        firstMonth: 'Online’a özel ilk 3 ay',
        nextMonthPrice: 610,
        nextMonth: 'Sonraki 9 ay',
        subscription: 'Yıllık Abonelik',
        commitment: '12 ay taahhütlü',
      }}
      onClick={() => console.log('first')}
    />
  );
};
