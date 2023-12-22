import { CheckboxProps } from 'antd/lib/checkbox';
import { CheckboxChangeEvent } from 'antd/es/checkbox';
import { RefCallBack } from 'react-hook-form';

export interface AgreementCheckboxProps extends CheckboxProps {
  onClick?: (newVal: object) => void;
  block?: boolean;
  onChangeFunction?: (
    newVal: CheckboxChangeEvent,
    setTermsChecked: boolean
  ) => void;
  onBlur?: () => void;
  inputRef?: RefCallBack;
  errorMessage?: string;
}
