import { Modal as ModalTemplate } from 'antd';
import { ModalProps } from 'antd/lib/modal';
import styles from './modal.module.scss';
import { IconsClose } from '@others/icons';
import classNames from 'classnames';

interface PropTypes extends ModalProps {}

export const Modal = (props: PropTypes) => {
  const { children } = props;

  const modalClasses = classNames([styles['a-trkclAppModal__wrapper--cls']]);
  const iconClasses = classNames([
    styles['a-trkclAppModal__wrapper--closeIcon'],
  ]);

  return (
    <ModalTemplate
      closeIcon={<IconsClose width={16} height={16} className={iconClasses} />}
      className={modalClasses}
      rootClassName={styles['a-trkclAppModal']}
      wrapClassName={styles['a-trkclAppModal__wrapper']}
      {...props}
    >
      {children}
    </ModalTemplate>
  );
};
export default Modal;
