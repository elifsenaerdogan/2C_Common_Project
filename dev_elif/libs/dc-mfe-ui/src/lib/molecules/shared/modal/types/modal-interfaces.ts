import Base from '@others/interfaces/base-props';
import { modalType } from './modal-types';

export interface ModalProps extends Base {
  type: modalType;
  bodyTitle?: string;
  bodyText?: string;
  buttonText: string;
  onClick?: () => void;
  isOpen?: boolean;
  setVisibility?: (setModalVisibility: boolean) => void;
}
