import styles from './molecule-non-login.module.scss';
import classNames from 'classnames';
import { AtomIcon } from '@atoms';
import AccoutsAlternative from '@others/icons/AccountsAlternative';
import Link from 'next/link';
import { NonLoginProps } from './types/non-login-interfaces';

export function MoleculeNonLogin(props: NonLoginProps) {
  const { className } = props;
  return (
    <div className={classNames(styles['m-trkclApp-non-login'])}>
      <div
        className={classNames(
          styles['m-trkclApp-non-login__container'],
          className
        )}
      >
        <AtomIcon
          className={classNames(styles['m-trkclApp-non-login__icon'])}
          icon={<AccoutsAlternative />}
        />
        <span
          // ref={elementRef}
          className={classNames(
            'text-body-small-bold',
            styles['m-trkclApp-non-login__quest']
          )}
        >
          Turkcell’li misiniz?
        </span>
        <span
          className={classNames(
            'text-body-small',
            styles['m-trkclApp-non-login__opportunity']
          )}
        >
          Size özel fırsatları görmek için{' '}
          <Link
            className={classNames(
              'text-body-small-bold',
              styles['m-trkclApp-non-login__opportunity--link']
            )}
            href={''}
          >
            giriş yapın.
          </Link>
        </span>
      </div>
    </div>
  );
}

export default MoleculeNonLogin;
