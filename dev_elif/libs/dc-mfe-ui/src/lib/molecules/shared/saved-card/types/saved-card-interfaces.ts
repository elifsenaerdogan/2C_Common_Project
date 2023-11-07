import Base from '@others/interfaces/base-props';
import { RadioChangeEvent } from 'antd';

export interface MoleculeSavedCardProps extends Base {
  className?: string;
  onChange?: (e: RadioChangeEvent) => void;
  value?: string;
  data: object[];
  outClickStatus?: (newVal: any) => void;
  onClick?: (newVal: any) => void;
}
