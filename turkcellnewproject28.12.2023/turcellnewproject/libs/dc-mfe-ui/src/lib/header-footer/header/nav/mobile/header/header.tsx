import turkcellLogo from '@others/assets/images/logo.svg';
import styles from './header.module.scss';
import { IconsClose } from '@others/icons';
import Base from '@others/interfaces/base-props';
import { AtomImage } from '@atoms';

export interface PropTypes extends Base {
  setOpenMobileMenu: (val: boolean) => void;
  setOpenKeys: (val: string[]) => void;
  setActivePage: (activePage: number) => void;
}

const NavHeader = (props: PropTypes) => {
  const { setOpenMobileMenu, setOpenKeys, setActivePage } = props;

  const handleCloseMobileMenu = () => {
    setOpenMobileMenu(false);
    setOpenKeys(['']);
    setActivePage(1);
  };

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
        onClick={() => handleCloseMobileMenu()}
        className={styles.trkcelAppMobilMenuWrapperHeaderCloseIcon}
      >
        <IconsClose width={20} height={20} color="#000" />
      </div>
    </div>
  );
};

export default NavHeader;
