import classNames from 'classnames';
import styles from './atom-button.module.scss';
import { Button } from 'antd';
import { MyBaseButtonProps } from './types/button-interfaces';
import { useMobile } from '@others/hooks';

export function AtomButton(props: MyBaseButtonProps) {
  const {
    text,
    variant = 'primary',
    disabled,
    className,
    type,
    onClick,
    icon = null,
    ...rest
  } = props;

  const handleOnClick = (event: React.MouseEvent<HTMLButtonElement>) =>
    onClick && onClick(event);
  const isMobile = useMobile();

  const buttonClasses = classNames(
    'text-body-regular',
    styles['a-trkclAppBtn'],
    {
      [styles[`a-trkclAppBtn--${variant}`]]: variant,
    },
    className
  );

  let buttonContent = (
    <div className={styles['a-trkclAppBtn__context']}>
      <span className={styles['a-trkclAppBtn__context__textSpan']}>{text}</span>
      {icon && (
        <span className={classNames('text-body-regular',styles['a-trkclAppBtn__context__arrowSpan'])}>
          {icon}
        </span>
      )}
    </div>
  );

  if (!icon && isMobile) {
    buttonContent = (
      <div className={styles['a-trkclAppBtn__context']}>
        <span className={classNames('text-body-regular',styles['a-trkclAppBtn__context__textSpan'])}>
          {text}
        </span>
      </div>
    );
  }
  return (
    <Button
      className={buttonClasses}
      onClick={handleOnClick}
      disabled={disabled}
      {...rest}
    >
      {buttonContent}
    </Button>
  );
}

export default AtomButton;
