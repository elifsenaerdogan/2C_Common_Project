import { InputProps } from 'antd/lib/input';
import { ChangeEvent } from 'react';
import {inputStatusTypes} from "@atoms/input/types/input-types";

export interface DateInputProps extends InputProps {
  wrapperClassName?: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement> | string) => void;
  placeholder?: string;
  maxLength?: number;
  label?: string;
  message?: string;
  statusType?: inputStatusTypes;
}
