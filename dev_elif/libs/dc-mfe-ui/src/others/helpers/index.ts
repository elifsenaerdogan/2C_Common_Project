import { generateMaskedNumberRegex } from '@others/utils/mask';
import { PaymentInputTypes } from '../../lib/molecules/shared/payment/types/payment-enums';

export const getStrokeColor = (variant: string) => {
  const properties = {
    trkclAppPackageCard_MB: {
      primaryColor: '#20cbfc',
      secondaryColor: '#007ce0',
    },
    trkclAppPackageCard_DK: {
      primaryColor: '#fe9400',
      secondaryColor: '#ff5e3a',
    },
    trkclAppPackageCard_SMS: {
      primaryColor: '#007ce0',
      secondaryColor: '#050cc6',
    },
    trkclAppPackageCard_APP: {
      primaryColor: '#eb5685',
      secondaryColor: '#7e30ea',
    },
  };
  const DynamicComponent = properties[variant as keyof typeof properties];
  return {
    '0%': DynamicComponent.primaryColor,
    '100%': DynamicComponent.secondaryColor,
  };
};

export const getPaymentInputMasks = (
  onChange: (event: React.FormEvent<HTMLInputElement>) => void,
  type: string,
  event: React.FormEvent<HTMLInputElement>
) => {
  const target = event.target as HTMLTextAreaElement;
  switch (type) {
    case PaymentInputTypes.Fullname:
      target.value = target.value.replace(/[^a-zA-Z\u00C0-\u017F\s]/g, '');
      break;
    case PaymentInputTypes.CardNumber:
      target.value = generateMaskedNumberRegex(target.value, 'card');
      break;
    case PaymentInputTypes.CCV:
      target.value = target.value.replace(/\D/g, '');
      break;
  }
  onChange(event);
};

export const getMonthsAndYears = () => {
  const mapToOption = (value: string | number) => ({
    label: typeof value === 'number' ? value.toString() : value,
    value: typeof value === 'number' ? value.toString() : value,
  });

  const months = Array(12)
    .fill('')
    .map((_, idx) => (idx < 9 ? `0${idx + 1}` : `${idx + 1}`))
    .map(mapToOption);

  const years = Array(20)
    .fill(new Date().getFullYear())
    .map((year, index) => mapToOption(year + index));

  return {
    years,
    months,
  };
};

export default {
  getStrokeColor,
  getPaymentInputMasks,
  getMonthsAndYears
};
