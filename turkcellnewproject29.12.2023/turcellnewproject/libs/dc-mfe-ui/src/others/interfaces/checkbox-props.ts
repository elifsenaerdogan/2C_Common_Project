import { CheckboxProps } from 'antd/lib/checkbox';

export default interface CheckboxItemsProps extends CheckboxProps {
  name?: string;
  label?: string;
  message?: string;
  disabled?: boolean;
  checked?: boolean;
  onClickText?: Function;
  onChange?: any;
  block?: boolean;
  required?: boolean;
}
