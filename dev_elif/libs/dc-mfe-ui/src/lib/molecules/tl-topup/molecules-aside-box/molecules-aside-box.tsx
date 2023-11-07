import classNames from 'classnames';
import styles from './molecules-aside-box.module.scss';
import { MoleculesAsideBoxProps } from './types/aside-box-interfaces';

export function MoleculesAsideBox(props: MoleculesAsideBoxProps) {
  const { children } = props;
  const asideBoxClassNames = classNames('m-aside-box', styles['m-aside-box']);
  return <div className={asideBoxClassNames}>{children}</div>;
}

export default MoleculesAsideBox;
