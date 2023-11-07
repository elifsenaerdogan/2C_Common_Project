import styles from './atom-icon.module.scss';
import classnames from 'classnames';
import { IconProps } from './types/icon-interfaces';

export const AtomIcon = (props: IconProps) => {
  const { icon, wrapperClassName, onClick, id, children } = props;

  const iconClasses = classnames([styles['a-icon']], wrapperClassName);

  return (
    <span
      id={id}
      className={iconClasses}
      onClick={() => onClick && onClick()}
      {...props}
    >
      {icon || children}
    </span>
  );
};

export default AtomIcon;
