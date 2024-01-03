import { CheckboxChangeEvent } from 'antd/es/checkbox';
import { CheckboxProps } from 'antd/lib/checkbox';
import { RefCallBack } from 'react-hook-form';

export interface RegistrationCheckboxItemProps extends CheckboxProps {
  name?: string;
  label?: string;
  message?: string;
  disabled?: boolean;
  checked?: boolean;
  onClickLink?: () => void;
  onChangeFunction?: (
    newVal: CheckboxChangeEvent,
    setTermsChecked: boolean
  ) => void;
  block?: boolean;
  text?: string;
  image?: string;
  saveTermsText?: string;
  approveText?: string;
  saveToHide?: string;
  className?: string;
  onBlur?: () => void;
  inputRef?: RefCallBack;
}
