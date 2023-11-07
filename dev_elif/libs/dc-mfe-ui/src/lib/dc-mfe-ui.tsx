
import styles from './dc-mfe-ui.module.scss';

/* eslint-disable-next-line */
export interface DcMfeUiProps {}

export function DcMfeUi(props: DcMfeUiProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to DcMfeUi!</h1>
    </div>
  );
}

export default DcMfeUi;
