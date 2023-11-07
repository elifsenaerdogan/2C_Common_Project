import { Modal } from 'antd';
import styles from './atom-modal.module.scss';
import { IconsClose } from '@others/icons';
import classnames from 'classnames';
import { AtomIcon } from '@atoms';
import { PropTypes as ModalTypes } from './types/modal-interfaces';

export const AtomModal = (props: ModalTypes) => {
  const { header, body, closeBtnVisibility, wrapperClassName } = props;

  const rootClassName = classnames([styles['trcklAppModal']]);
  const closeIconClasses = classnames([styles['trcklAppModal__closeIcon']]);
  const backgroundClassName = classnames([styles['trcklAppModal__background']]);
  const popupWrapperClassName = classnames(
    [styles['trcklAppModal__background__popupWrapper']],
    wrapperClassName
  );

  return (
    <Modal
      closeIcon={
        closeBtnVisibility === true ? (
          <AtomIcon
            icon={<IconsClose width={16} height={16} />}
            wrapperClassName={closeIconClasses}
          />
        ) : (
          <></>
        )
      }
      rootClassName={rootClassName}
      wrapClassName={backgroundClassName}
      className={popupWrapperClassName}
      {...props}
    >
      {header ? header : <></>}

      {body ? body : <></>}
    </Modal>
  );
};
export default AtomModal;
