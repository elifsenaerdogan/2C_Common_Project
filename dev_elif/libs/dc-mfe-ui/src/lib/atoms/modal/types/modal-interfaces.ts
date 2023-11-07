import { ModalProps } from 'antd/lib/modal';

export interface PropTypes extends ModalProps {
  header?: React.ReactNode;
  body?: React.ReactNode;
  wrapperClassName?: string;
  closeBtnVisibility?: boolean;
}
