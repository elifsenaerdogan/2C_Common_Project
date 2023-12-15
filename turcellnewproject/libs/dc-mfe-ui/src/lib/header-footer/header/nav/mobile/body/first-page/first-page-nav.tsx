import React, { useMemo, useRef, useState } from 'react';
import { Menu } from 'antd';
import type { MenuProps } from 'antd';
import styles from './first-page-nav.module.scss';
import { IconsArrowLarge, IconsTechSpecs, IconsTl } from '@others/icons';
import { AtomIcon, AtomImage, AtomPasajButton } from '@atoms';
import pasajLogo from '@others/assets/images/header/group-6@3x.png';
import classnames from 'classnames';
import { ShowAllButton } from '../../../index';
import Base from '@others/interfaces/base-props';
import { login } from '@others/utils/login';
import { MoleculeFastActions } from '../../../../../index';
import { HeaderMenuList } from '../../../types/header-interfaces';
import { getHeaderMenuList } from '@others/utils/get-menu-list';
import { HeaderNavWebEnums } from '../../../types/header-enums';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key?: React.Key | null,
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

interface FirstPageProps extends Base {
  setActivePage: (activePage: number) => void;
  onCat2Click: (level1CatId: string, level2CatId: string) => void;
  headerMenuItems: HeaderMenuList[];
  openKeys: string[];
  onOpenChange: (keys: string[]) => void;
  activePage: number;
}

export const FirstPageNav = (props: FirstPageProps) => {
  const {
    setActivePage,
    onCat2Click,
    headerMenuItems,
    openKeys,
    onOpenChange,
    activePage,
  } = props;

  const [fastActionsVisibility, setFastActionsVisibility] = useState(false);

  const handleFastActionsVisibility = () =>
    setFastActionsVisibility((prevState) => !prevState);

  const menuRef = useRef<HTMLDivElement | null>(null);

  const menuItems = useMemo(() => {
    return getHeaderMenuList(
      headerMenuItems,
      HeaderNavWebEnums.CAT_LEVEL_1,
      HeaderNavWebEnums.CHANNEL_MOBILE
    )?.map((level1, index) =>
      getItem(
        level1.uniqueId === HeaderNavWebEnums.PASAJ_ID ? (
          <AtomImage
            className={classnames([
              styles['trkclAppMobileNav__category--image'],
            ])}
            width={75.6}
            height={24}
            alt="pasaj-logo"
            src={pasajLogo}
          />
        ) : (
          <span
            className={classnames('text-body-bold', [
              styles['trkclAppMobileNav__category'],
            ])}
          >
            {level1.title}
          </span>
        ),
        level1.uniqueId,
        null,
        [
          ...getHeaderMenuList(
            headerMenuItems,
            HeaderNavWebEnums.CAT_LEVEL_2,
            HeaderNavWebEnums.CHANNEL_MOBILE,
            level1.uniqueId
          ).map((level2) =>
            getItem(
              <span
                className={classnames('text-body-regular', [
                  styles['trkclAppMobileNav__subcategory'],
                ])}
              >
                {level2.title}
              </span>,
              level2.uniqueId
            )
          ),
          level1.uniqueId === HeaderNavWebEnums.PASAJ_ID
            ? getItem(
                <AtomPasajButton
                  buttonbackground="white"
                  className={classnames([
                    styles['trkclAppMobileNav__subcategory--pasaj'],
                  ])}
                  text="Pasaj'a Git"
                  imageAlt="pasaj-logo"
                />
              )
            : getItem(
                <ShowAllButton
                  categoryName={level1.title}
                  link="/pasa"
                  className={classnames('text-body-regular', [
                    styles['trkclAppMobileNav__subcategory--showall'],
                  ])}
                />,
                `show-all-${level1.uniqueId}`
              ),
        ]
      )
    );
  }, [headerMenuItems]);

  const antdMenuClick: MenuProps['onClick'] = (e) => {
    onCat2Click && onCat2Click(e.keyPath[1], e.keyPath[0]);
    setActivePage(2);
  };

  const fastActionsClasses = classnames(
    'text-body-bold',
    [[styles['trkclAppMobileNav__fastActions--wrapper']]],
    {
      [styles['trkclAppMobileNav__fastActions--wrapper-hidden']]:
        !fastActionsVisibility,
      [styles['trkclAppMobileNav__fastActions--wrapper-visible']]:
        fastActionsVisibility,
    }
  );

  const firstPageWrapperClasses = classnames(
    [styles['trkclAppMobileNavWrapper']],
    {
      [styles['trkclAppMobileNavWrapper__open']]: activePage === 1,
    }
  );

  return (
    <div className={firstPageWrapperClasses}>
      <Menu
        onClick={antdMenuClick}
        expandIcon={() => (
          <IconsArrowLarge
            width="24"
            height="24"
            className={`${styles.menuExpandIcon}`}
            id="menu-items-mobile"
          />
        )}
        mode="inline"
        items={menuItems}
        className={`text-body-bold ${styles.trkclAppMobileNav} `}
        openKeys={openKeys}
        onOpenChange={onOpenChange}
      />
      <div className={classnames([styles['trkclAppMobileNav__fastActions']])}>
        <div
          onClick={handleFastActionsVisibility}
          className={fastActionsClasses}
        >
          <span>Hızlı İşlemler</span>
          <AtomIcon
            icon={
              <IconsArrowLarge
                width={24}
                height={24}
                id="fast-actions-mobile"
              />
            }
            className={classnames([
              styles['trkclAppMobileNav__fastActions--wrapper-icon'],
            ])}
          />
        </div>
        {fastActionsVisibility ? (
          <div>
            <MoleculeFastActions
              loginFn={() => login(true)}
              refWidth={240}
              menuRef={menuRef}
              onLinkPress={(e) => console.log(e)}
              popularTransactionsTitle="EN POPÜLER İŞLEMLER"
              popularTransactions={[
                {
                  icon: (
                    <AtomIcon
                      icon={<IconsTechSpecs width={'100%'} height={'100%'} />}
                    />
                  ),
                  url: '/pasaj',
                  text: 'Fatura Öde',
                  id: '1',
                  variant: 'gradientOrange',
                },
                {
                  icon: (
                    <AtomIcon
                      icon={<IconsTl width={'100%'} height={'100%'} />}
                    />
                  ),
                  url: '',
                  text: 'TL Yükle',
                  id: '2',
                  variant: 'gradientLightBlue',
                },
                {
                  icon: (
                    <AtomIcon
                      icon={<IconsTl width={'100%'} height={'100%'} />}
                    />
                  ),
                  url: '',
                  text: 'Lorem Ipsum',
                  id: '3',
                  variant: 'gradientBlue',
                },
                {
                  icon: (
                    <AtomIcon
                      icon={<IconsTechSpecs width={'100%'} height={'100%'} />}
                    />
                  ),
                  url: '',
                  text: 'Lorem Ipsum',
                  id: '4',
                  variant: 'gradientOrange',
                },
              ]}
              allFastActionsTitle="TÜM HIZLI İŞLEMLER"
              fastActions={[
                {
                  url: '',
                  text: 'Faturalı Hatlar',
                  sideMenu: [
                    { url: '', text: 'Faturalı Hatlar 1-1' },
                    { url: '', text: 'Faturalı Hatlar 1-2' },
                  ],
                },
                {
                  url: '',
                  text: 'Faturasız Hatlar',
                  sideMenu: [{ url: '', text: 'Faturalı Hatlar 2' }],
                },
                {
                  url: '',
                  text: 'Tarifeler ',
                  sideMenu: [{ url: '', text: 'Faturalı Hatlar 3' }],
                },
              ]}
            />
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default React.memo(FirstPageNav);
