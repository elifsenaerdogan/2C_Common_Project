import styles from './atom-badge-status.module.scss';
import classNames from 'classnames';
import AtomIcon from '../icon/atom-icon';
import { BadgeStatusType } from 'libs/dc-mfe-ui/src/others/enums/badgeStatusType';
import { IconsCheck } from '@others/icons';
import { IconsTagLimited } from '@others/icons';
import { IconsCancel } from '@others/icons';
import { AtomBadgeStatusProps } from './types/badge-status-interface';

export function AtomBadgeStatus(props: AtomBadgeStatusProps) {
  const { status, className, badgeVariant } = props;

  const badgeClasses = classNames(
    styles['a-trkclApp-badge-status'],
    className,

    [styles[`a-trkclApp-badge-status--${badgeVariant}`]]
  );
  const badgeStatus = () => {
    switch (status) {
      case BadgeStatusType.APPROVED:
        return (
          <div className={badgeClasses}>
            <AtomIcon icon={<IconsCheck />} />
            <span
              className={classNames(
                'text-legal-regular',
                styles['a-trkclApp-badge-status__text']
              )}
            >
              {BadgeStatusType.APPROVED}
            </span>
          </div>
        );
      case BadgeStatusType.APPROVAL_WAITING:
        return (
          <div className={badgeClasses}>
            <AtomIcon icon={<IconsTagLimited />} />
            <span
              className={classNames(
                'text-legal-regular',
                styles['a-trkclApp-badge-status__text']
              )}
            >
              {BadgeStatusType.APPROVAL_WAITING}
            </span>
          </div>
        );
      case BadgeStatusType.APPROVAL_DENIED:
        return (
          <div className={badgeClasses}>
            <AtomIcon icon={<IconsCancel />} />
            <span
              className={classNames(
                'text-legal-regular',
                styles['a-trkclApp-badge-status__text']
              )}
            >
              {BadgeStatusType.APPROVAL_DENIED}
            </span>
          </div>
        );
      default:
        return null;
    }
  };

  return <>{badgeStatus()}</>;
}

export default AtomBadgeStatus;
