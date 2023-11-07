import { CheckboxChangeEvent } from 'antd/es/checkbox';
import { TextAreaProps } from 'antd/es/input';
import { ChangeEvent } from 'react';

export interface TextArePropTypes extends TextAreaProps {
  rows?: number;
  className?: string;
  maxLength?: number;
  field?: string;
  name?: string;
  tooltipText?: string;
  value?: string;
  isSuccess?: boolean;
  isError?: boolean;
  isDisabled?: boolean;
  icon?: JSX.Element | string;
}
