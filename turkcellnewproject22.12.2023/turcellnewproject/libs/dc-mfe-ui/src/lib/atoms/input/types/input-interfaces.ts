import { InputProps as AntdInputProps } from 'antd/lib/input';
import { inputStatusTypes } from './input-types';

type InputTypes = Omit<AntdInputProps, 'status'>;

export interface InputProps extends InputTypes {
    wrapperClassName?: string;
    label?: string;
    statusType?: inputStatusTypes;
    icon?: JSX.Element;
    message?: string;
  }