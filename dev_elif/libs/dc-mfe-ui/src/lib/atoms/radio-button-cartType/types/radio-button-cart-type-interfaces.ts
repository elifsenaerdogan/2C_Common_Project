import { RadioProps } from 'antd/lib/radio';

export interface RadioItemCartTypeProps extends RadioProps {
  value: string;
  currentCheckedValue: string;
  wrapperClassName?: string;
  cart?: React.ReactNode;
  yellowBackgroundCircle?: boolean;
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  packageCardshadow?: boolean;
}
