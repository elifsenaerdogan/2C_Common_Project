import classnames from 'classnames';
import { useCallback, useState } from 'react';
import Base from '@others/interfaces/base-props';
import {
  NavFirstPageMobile,
  NavSecondPageMobile,
  SwitchButtons,
  NavHeaderMobile,
  NavProfileMobile,
} from '..';
import styles from './mobile-nav.module.scss';
import user from '@others/assets/images/user.jpeg';
import { HeaderMenuList } from '../types/header-interfaces';
import { MenuProps } from 'antd';

export interface PropTypes extends Base {
  setOpenMobileMenu: (val: boolean) => void;
  openMobileMenu: boolean;
  isLoggedIn?: boolean;
  headerMenuItems: HeaderMenuList[];
}
const MobilMenuWrapper = (props: PropTypes) => {
  const {
    setOpenMobileMenu,
    openMobileMenu,
    isLoggedIn = true,
    headerMenuItems,
  } = props;

  const [activePage, setActivePage] = useState(1);

  const [openKeys, setOpenKeys] = useState<string[]>(['']);
  const [level1CategoryId, setLevel1CategoryId] = useState<string>('');
  const [level2CategoryId, setLevel2CategoryId] = useState<string>('');

  const onLevel2Click = (level1CatId: string, level2CatId: string) => {
    setLevel1CategoryId(level1CatId);
    setLevel2CategoryId(level2CatId);
  };

  const onOpenChange: MenuProps['onOpenChange'] = (keys) => {
    setOpenKeys(keys);
  };

  const mobileMenuWrapperClasses = classnames(
    [styles['trkcelAppMobilMenuWrapper']],
    {
      [styles['trkcelAppMobilMenuWrapper__opened']]: openMobileMenu,
    }
  );

  return (
    <div className={mobileMenuWrapperClasses}>
      <div>
        <div
          className={classnames([styles['trkcelAppMobilMenuWrapper__header']])}
        >
          <NavHeaderMobile
            setOpenMobileMenu={setOpenMobileMenu}
            setActivePage={setActivePage}
            setOpenKeys={setOpenKeys}
          />
        </div>
        <div
          className={classnames([styles['trkcelAppMobilMenuWrapper__body']])}
        >
          <NavFirstPageMobile
            onCat2Click={onLevel2Click}
            setActivePage={setActivePage}
            headerMenuItems={headerMenuItems}
            activePage={activePage}
            openKeys={openKeys}
            onOpenChange={onOpenChange}
          />

          <NavSecondPageMobile
            activeLevel2Category={level2CategoryId}
            activePage={activePage}
            setActivePage={setActivePage}
            headerMenuItems={headerMenuItems}
          />
        </div>
      </div>
      <div
        className={classnames([styles['trkcelAppMobilMenuWrapper__footer']])}
      >
        <SwitchButtons
          className={classnames([
            styles['trkcelAppMobilMenuWrapper__footer--buttons'],
          ])}
        />
        {isLoggedIn ? (
          <NavProfileMobile
            link="/pasaj"
            border={true}
            avatarImage={user}
            displayImage={true}
            userName={{
              name: 'Özgür Taşkan',
              nameColor: 'white',
              nameFontSize: 'large',
            }}
            userNumber={{
              number: '0535 555 55 55',
              numberColor: 'bluey-grey',
              numberFontSize: 'small',
            }}
            icon={{
              visibility: true,
              rotateDeg: 180,
              color: '#fff',
              size: 24,
            }}
          />
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default MobilMenuWrapper;
