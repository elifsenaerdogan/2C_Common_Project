import { useMobile } from '@others/hooks';
import { AtomButton, AtomIcon } from '@atoms';
import { Accounts } from '@others/icons';
import Base from '@others/interfaces/base-props';
import classnames from 'classnames';
import styles from './login-buttons.module.scss';
import { MegaMenuType } from '@others/enums/megaMenu';

interface LoginButtonsProps extends Base {
  handleLoginContentVisibility: () => void;
  activeActionKey: MegaMenuType | undefined;
}

export const LoginButtons = (props: LoginButtonsProps) => {
  const { handleLoginContentVisibility, activeActionKey } = props;

  const isMobile = useMobile();

  const accountIconItemClasses = classnames(
    [styles['trkclAppLoginButtons__mobile']],
    {
      [styles['trkclAppLoginButtons__mobile--active']]:
        activeActionKey === MegaMenuType.AUTH,
    }
  );

  const loginButtonClasses = classnames('text-body-small', [
    styles['trkclAppLoginButtons__web'],
  ]);

  return !isMobile ? (
    <AtomButton
      text="Giriş Yap"
      variant="secondary"
      onClick={() => handleLoginContentVisibility()}
      className={loginButtonClasses}
    />
  ) : (
    <AtomIcon
      icon={<Accounts color="#fff" width={32} height={32} />}
      onClick={() => handleLoginContentVisibility()}
      className={accountIconItemClasses}
    />
  );
};
