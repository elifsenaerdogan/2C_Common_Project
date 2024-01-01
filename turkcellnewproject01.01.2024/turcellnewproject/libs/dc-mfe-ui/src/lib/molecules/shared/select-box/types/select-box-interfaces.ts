import { SelectProps } from 'antd/lib/select';

export interface PropTypes extends SelectProps {
  isDisabled?: boolean;
  isSuccess?: boolean;
  isError?: boolean;
  errorMessage?: string;
  onChange?: (newVal: string) => void;
  label?: string;
}
