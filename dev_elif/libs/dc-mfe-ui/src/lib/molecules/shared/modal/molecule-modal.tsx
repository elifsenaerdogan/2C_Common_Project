import styles from './molecule-modal.module.scss';
import { AtomModal, AtomIcon, AtomButton } from '@atoms';
import classnames from 'classnames';
import { Group4Copy, Group3Copy, Group12Copy4 } from '@others/icons';
import { useMobile } from '@others/hooks';
import { ModalProps } from './types/modal-interfaces';

export function MoleculeModal(props: ModalProps) {
  const {
    type,
    bodyTitle,
    bodyText,
    onClick,
    isOpen,
    setVisibility,
    buttonText,
  } = props;
  const isMobile = useMobile();

  let modalIcon;
  switch (type) {
    case 'success':
      modalIcon = (
        <Group12Copy4
          height={isMobile ? 80 : 96}
          width={isMobile ? 80 : 96}
          color={'#fff'}
        />
      );
      break;

    case 'error':
      modalIcon = (
        <Group4Copy
          height={isMobile ? 80 : 96}
          width={isMobile ? 80 : 96}
          color={'#fff'}
        />
      );
      break;
    case 'info':
      modalIcon = (
        <Group3Copy
          height={isMobile ? 80 : 96}
          width={isMobile ? 80 : 96}
          color={'#fff'}
        />
      );
      break;
  }

  const headerClasses = classnames([styles['m-trkclAppModal__header']]);

  const headerIconClasses = classnames({
    [styles[`m-trkclAppModal__header--icon-${type}`]]: type,
  });

  const bodyTitleClasses = classnames(
    'text-body-large-bold',
    [styles['m-trkclAppModal__bodyTitle']],
    {
      [styles[`m-trkclAppModal__bodyTitle--${type}`]]: type,
    }
  );

  const bodyTextClasses = classnames('text-captions-regular', [
    styles['m-trkclAppModal__bodyText'],
  ]);

  const footerClasses = classnames([styles['m-trkclAppModal__footer']]);

  const contentClasses = classnames([styles['m-trkclAppModal__content']]);

  const buttonClasses = classnames([styles['m-trkclAppModal__button']]);

  return (
    <AtomModal
      closeBtnVisibility={isOpen}
      open={isOpen}
      closable
      onCancel={() => setVisibility && setVisibility(false)}
      wrapperClassName={contentClasses}
      header={
        <div className={headerClasses}>
          <AtomIcon icon={modalIcon} wrapperClassName={headerIconClasses} />
        </div>
      }
      body={
        <>
          <div className={bodyTitleClasses}>{bodyTitle}</div>
          <div className={bodyTextClasses}>{bodyText}</div>
        </>
      }
      footer={
        <div className={footerClasses}>
          <AtomButton
            variant="secondary"
            text={buttonText}
            className={buttonClasses}
            onClick={() => onClick && onClick()}
          />
        </div>
      }
    ></AtomModal>
  );
}

export default MoleculeModal;
