import styles from './molecule-package-summary.module.scss';
import classNames from 'classnames';
import useMobile from '@others/hooks/useMobile';
import { PackageSummaryProps } from './types/package-summary-interfaces';

export function MoleculePackageSummary(props: PackageSummaryProps) {
  const { className, phone, packageName } = props;
  const isMobile = useMobile();

  return (
    <div
      className={classNames(styles['m-trkclApp-package-summary'], className)}
    >
      <div className={classNames(styles['m-trkclApp-package-summary__sum'])}>
        <span
          className={classNames(
            isMobile! ? 'text-head-bold-xs' : 'text-body-bold',
            styles['m-trkclApp-package-summary__sum--title']
          )}
        >
          Paket Özeti
        </span>
      </div>
      <div
        className={classNames(
          'text-head-bold-xs',
          styles['m-trkclApp-package-summary__line']
        )}
        style={{ display: isMobile ? 'block' : 'none' }}
      ></div>
      <div
        className={classNames(
          styles['m-trkclApp-package-summary__phoneContent']
        )}
      >
        <div
          className={classNames(
            styles['m-trkclApp-package-summary__phoneContent--packageName']
          )}
        >
          <span
            className={classNames(
              !isMobile ? 'text-body-regular' : 'text-body-small',
              styles[
                'm-trkclApp-package-summary__phoneContent--packageName-desc'
              ]
            )}
          >
            {packageName}
          </span>
        </div>
        <div
          className={classNames(
            styles['m-trkclApp-package-summary__phoneContent--details']
          )}
        >
          <span
            className={classNames(
              'text-body-small',
              styles['m-trkclApp-package-summary__phoneContent--details-title']
            )}
          >
            Yüklenecek GSM
          </span>
          <span
            className={classNames(
              isMobile ? 'text-body-small' : 'text-body-regular',
              styles['m-trkclApp-package-summary__phoneContent--details-desc']
            )}
          >
            {phone}
          </span>
        </div>
      </div>
    </div>
  );
}

export default MoleculePackageSummary;
