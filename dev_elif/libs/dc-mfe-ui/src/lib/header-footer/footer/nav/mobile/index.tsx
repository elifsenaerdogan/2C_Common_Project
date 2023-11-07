import Base from '@others/interfaces/base-props';
import { useState } from 'react';
import { Menu } from 'antd';
import type { MenuProps } from 'antd';
import styles from './nav.module.scss';
import { MenuMode } from '@others/enums/antdComponentsProps';
import { IconsArrowLarge } from '@others/icons';

export type NavMenuItem = Required<MenuProps>['items'][number];

interface PropTypes extends Base {
  navData: NavMenuItem[];
}

const NavMobile = (props: PropTypes) => {
  const { navData } = props;
  const rootSubmenuKeys = navData.map((navItem) => navItem?.key);
  const [openKeys, setOpenKeys] = useState(['']);

  const onOpenChange = (keys: string[]) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey!) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  return (
    <Menu
      expandIcon={(props) => (
        <IconsArrowLarge
          width="24"
          height="24"
          className={`${styles.menuExpandIcon} ${
            props.isOpen ? styles.openMenuIcon : ''
          }`}
        />
      )}
      openKeys={openKeys}
      onOpenChange={onOpenChange}
      mode={MenuMode.INLINE}
      items={navData}
      className={`text-body-regular ${styles.mobileNav}`}
    />
  );
};

export default NavMobile;
