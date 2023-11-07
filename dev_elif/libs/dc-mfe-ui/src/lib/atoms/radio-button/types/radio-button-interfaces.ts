import { RadioProps } from 'antd/lib/radio';

export interface RadioItemProps extends RadioProps {
  radioButtonName: string;
  value: string;
  currentCheckedValue: string;
  wrapperClassName?: string;
  divider?: boolean;
  element?: React.ReactNode;
  onClickFn?: (newVal: any) => void;
}
