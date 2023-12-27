import type { Meta } from '@storybook/react';
import { AtomCheckoutInfoText } from './atom-checkout-info-text';

const Story: Meta<typeof AtomCheckoutInfoText> = {
  component: AtomCheckoutInfoText,
  title: 'Atoms/CheckoutInfoText',
};
export default Story;

export const Primary = () => {
  return (
    <AtomCheckoutInfoText
      checkoutElement={{
        firstMonthPrice: '545,00',
        firstMonth: 'Online’a özel ilk 3 ay',
        nextMonthPrice: '610,00',
        nextMonth: 'Sonraki 9 ay',
      }}
      onClick={() => console.log('first')}
    />
  );
};
