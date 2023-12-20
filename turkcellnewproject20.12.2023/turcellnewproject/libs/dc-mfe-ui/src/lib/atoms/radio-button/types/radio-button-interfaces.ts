import { RadioProps } from 'antd/lib/radio';

export interface RadioItemProps extends RadioProps {
  radioButtonName: string | React.ReactNode;
  value: string;
  currentCheckedValue: string;
  wrapperClassName?: string;
  divider?: boolean;
  element?: React.ReactNode;
}
