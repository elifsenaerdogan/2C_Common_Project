import Base from '@others/interfaces/base-props';
import { useMemo, useState } from 'react';
import { Menu } from 'antd';
import type { MenuProps } from 'antd';
import styles from './nav.module.scss';
import { MenuMode } from '@others/enums/antdComponentsProps';
import { IconsArrowLarge } from '@others/icons';
import { FooterNavProps } from '../types/footer-nav-interfaces';
import { getFooterMenuList } from '@others/utils/get-menu-list';
import { FooterEnums } from '../types/footer-nav-enums';
import Link from 'next/link';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: string | React.ReactNode,
  key?: string,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group'
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

interface PropTypes extends Base {
  navData: FooterNavProps[];
}

const NavMobile = (props: PropTypes) => {
  const { navData } = props;

  const [openKeys, setOpenKeys] = useState(['']);

  const newNavData = useMemo(() => {
    return getFooterMenuList(
      navData,
      FooterEnums.CAT_LEVEL_1,
      FooterEnums.CHANNEL_MOBILE
    )?.map((level1) =>
      getItem(
        level1.title,
        level1.uniqueId,
        null,
        getFooterMenuList(
          navData,
          FooterEnums.CAT_LEVEL_2,
          FooterEnums.CHANNEL_MOBILE,
          level1.uniqueId
        )?.map((level2) =>
          getItem(
            <Link href={level2.titleLink}>{level2.title}</Link>,
            level2.uniqueId
          )
        )
      )
    );
  }, [navData]);

  const rootSubmenuKeys = getFooterMenuList(
    navData,
    FooterEnums.CAT_LEVEL_1,
    FooterEnums.CHANNEL_MOBILE
  )?.map((level1) => level1.uniqueId);

  const onOpenChange: MenuProps['onOpenChange'] = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (latestOpenKey && rootSubmenuKeys.indexOf(latestOpenKey!) === -1) {
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
          id="expandicon"
          className={`${styles.menuExpandIcon} ${
            props.isOpen ? styles.openMenuIcon : ''
          }`}
        />
      )}
      openKeys={openKeys}
      onOpenChange={onOpenChange}
      mode={MenuMode.INLINE}
      items={newNavData}
      className={`text-body-regular ${styles.mobileNav}`}
    />
  );
};

export default NavMobile;
