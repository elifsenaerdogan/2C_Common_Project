import styles from './molecule-package-summary.module.scss';
import classNames from 'classnames';
import { PackageSummaryProps } from './types/package-summary-interfaces';

export function MoleculePackageSummary(props: PackageSummaryProps) {
  const { className, phone, packageName } = props;

  return (
    <div
      className={classNames(styles['m-trkclApp-package-summary'], className)}
    >
      <div>
        <div className={styles['m-trkclApp-package-summary__title']}>Ürün</div>
        <div className={styles['m-trkclApp-package-summary__desc']}>
          {packageName}
        </div>
      </div>
      <div>
        <div className={styles['m-trkclApp-package-summary__title']}>
          Yüklenecek GSM{' '}
        </div>
        <div className={styles['m-trkclApp-package-summary__desc']}>
          {phone}
        </div>
      </div>
    </div>
  );
}

export default MoleculePackageSummary;
