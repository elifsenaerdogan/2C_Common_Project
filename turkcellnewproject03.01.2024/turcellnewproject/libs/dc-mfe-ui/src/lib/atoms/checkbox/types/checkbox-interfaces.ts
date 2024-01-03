import { CheckboxChangeEvent } from 'antd/es/checkbox';
import { CheckboxProps } from 'antd/lib/checkbox';

export interface CheckboxItemProps extends CheckboxProps {
  name?: string;
  label?: string;
  message?: string;
  disabled?: boolean;
  checked?: boolean;
  required?: boolean;
  onClickText?: (newVal: React.MouseEvent<HTMLElement>) => void;
  block?: boolean;
  onChangeFunction?: (newVal: CheckboxChangeEvent, isCheck: boolean) => void;
  className?: string;
}
