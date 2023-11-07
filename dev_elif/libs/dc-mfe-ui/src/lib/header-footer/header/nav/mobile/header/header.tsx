import turkcellLogo from '@others/assets/images/logo.svg';
import styles from './header.module.scss';
import { IconsClose } from '@others/icons';
import Base from '@others/interfaces/base-props';
import { AtomImage } from '@atoms';

export interface PropTypes extends Base {
  setOpenMobileMenu: (val: boolean) => void;
}

const NavHeader = (props: PropTypes) => {
  const { setOpenMobileMenu } = props;

  return (
    <div className={styles.trkcellAppMobileMenuHeader}>
      <div>
        <AtomImage
          src={turkcellLogo}
          width={32}
          height={32}
          alt="trkcll-logo"
        />
      </div>
      <div
        onClick={() => setOpenMobileMenu(false)}
        className={styles.trkcelAppMobilMenuWrapperHeaderCloseIcon}
      >
        <IconsClose width={20} height={20} color="#000" />
      </div>
    </div>
  );
};

export default NavHeader;
