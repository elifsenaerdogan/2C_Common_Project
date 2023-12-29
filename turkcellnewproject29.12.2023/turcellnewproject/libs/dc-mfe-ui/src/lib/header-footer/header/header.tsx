import Base from '@others/interfaces/base-props';
import { Layout } from 'antd';
import styles from './header.module.scss';
import turkcellLogo from '@others/assets/images/logo.svg';
import yasLogo from '@others/assets/images/header/yas-logo.svg';
import { IconsArrowLarge, IconsTechSpecs, IconsTl } from '@others/icons';
import { HeaderType } from '@others/enums/headerType';
import { useMobile } from '@others/hooks';
import { useEffect, useMemo, useRef, useState } from 'react';
import MobileNav from './nav/mobile/mobile-nav';
import HeaderStatusBar from '../header-status-bar/header-status-bar';
import MegaMenuWrapper from '../mega-menu/mega-menu-wrapper';
import { MegaMenuType } from '@others/enums/megaMenu';
import { AtomIcon, AtomImage } from '@atoms';
import { NavHeaderWeb } from './nav';
import classnames from 'classnames';
import { MoleculeFastActions, NavigationPageManager } from '../index';
import { login } from '@others/utils/login';
import ActionItems from './action-items/action-items';
import { HeaderMenuList } from './nav/types/header-interfaces';
import { stringToKeyValuePairs } from '@others/helpers';

interface PropTypes extends Base {
  headerType: HeaderType;
  basketItems: number;
  headerMenuList: HeaderMenuList[];
  navigationPageManagerData: NavigationPageManager;
  logo?: string;
  logoAlt?: string;
  isLogin?: boolean;
  searchTags?: string;
}

export const Header = (props: PropTypes) => {
  const menuHoverRef = useRef(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const quickTransactionsRef = useRef<HTMLDivElement>(null);
  const profileMenuRef = useRef<HTMLDivElement>(null);

  const headMenuContainerRef = useRef<HTMLDivElement | null>(null);

  const headerRef = useRef<HTMLDivElement | null>(null);
  const [headerVisible, setHeaderVisible] = useState(true);
  const [quickTransactionsVisiblity, setQuickTransactionsVisiblity] =
    useState(false);
  const [profileMenuVisibility, setProfileMenuVisibility] = useState(false);

  const [openMegaMenu, setOpenMegaMenu] = useState<boolean>(false);
  const [openMobileMenu, setOpenMobileMenu] = useState<boolean>(false);

  const [activeActionKey, setActiveActionKey] = useState<
    MegaMenuType | undefined
  >();

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    if (headerRef.current) {
      setHeaderVisible(scrollPosition <= headerRef.current.clientHeight * 1.5);
    }
    if (scrollPosition > headerRef.current!.clientHeight * 1.5) {
      setOpenMegaMenu(false);
      setActiveActionKey(MegaMenuType.NULL);
    }
  };

  const handleQuickTransactionVisibility = (event: MouseEvent): void => {
    if (
      quickTransactionsRef.current &&
      !quickTransactionsRef.current.contains(event.target as Node)
    ) {
      setQuickTransactionsVisiblity(false);
    }
  };

  const handleProfileMenuVisibility = (event: MouseEvent): void => {
    if (
      profileMenuRef.current &&
      !profileMenuRef.current.contains(event.target as Node)
    ) {
      setProfileMenuVisibility(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleQuickTransactionVisibility);
    document.addEventListener('mousedown', handleProfileMenuVisibility);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener(
        'mousedown',
        handleQuickTransactionVisibility
      );
      document.removeEventListener('mousedown', handleProfileMenuVisibility);
    };
  }, []);

  const {
    basketItems,
    className = '',
    logo = turkcellLogo,
    id,
    isLogin = false,
    logoAlt = '',
    headerMenuList,
    headerType = HeaderType.INDIVIDUAL,
    navigationPageManagerData,
    searchTags = '',
  } = props;
  const isMobile = useMobile();

  useEffect(() => {
    if (!openMegaMenu) {
      setActiveActionKey(MegaMenuType.NULL);
    }
  }, [openMegaMenu]);

  const handleOutHover = () => {
    setActiveActionKey(MegaMenuType.NULL);
  };

  // for open search content
  const handleOpenSearchContent = () => {
    if (activeActionKey === MegaMenuType.SEARCH && openMegaMenu) {
      setOpenMegaMenu(false);
      setActiveActionKey(MegaMenuType.NULL);
    } else if (
      !(activeActionKey === MegaMenuType.AUTH) &&
      !(activeActionKey === MegaMenuType.SEARCH) &&
      !openMegaMenu
    ) {
      setOpenMegaMenu(true);
      setActiveActionKey(MegaMenuType.SEARCH);
    } else if (openMegaMenu && activeActionKey === MegaMenuType.AUTH) {
      setActiveActionKey(MegaMenuType.SEARCH);
    }
    setActiveActionKey(MegaMenuType.SEARCH);
  };

  // for open Login content
  const handleOpenLoginContent = () => {
    if (activeActionKey === MegaMenuType.AUTH && openMegaMenu) {
      setOpenMegaMenu(false);
      setActiveActionKey(MegaMenuType.NULL);
    } else if (
      !(activeActionKey === MegaMenuType.AUTH) &&
      !(activeActionKey === MegaMenuType.SEARCH) &&
      !openMegaMenu
    ) {
      setOpenMegaMenu(true);
      setActiveActionKey(MegaMenuType.AUTH);
    } else if (openMegaMenu && activeActionKey === MegaMenuType.SEARCH) {
      setActiveActionKey(MegaMenuType.AUTH);
    }
    setActiveActionKey(MegaMenuType.AUTH);
  };

  // for open search content
  // const handleIconClick = (key: string) => {
  //   // setActiveMenuItem(null)
  //   if (activeMenuItem === key) {
  //     setActiveMenuItem(null)
  //   } else setActiveMenuItem(key)
  // }

  const checkLoginOrSearchContent = useMemo(() => {
    return !(
      activeActionKey === MegaMenuType.SEARCH ||
      activeActionKey === MegaMenuType.AUTH
    );
  }, [activeActionKey]);

  const fastActionClasses = classnames(
    'text-body-regular',
    [styles['trkclAppFastActions']],
    {
      [styles['trkclAppFastActions__active']]: quickTransactionsVisiblity,
    }
  );

  const fastActionIconClasses = classnames(
    [styles['trkclAppFastActions__icon']],
    {
      [styles['trkclAppFastActions__icon--rotate']]: quickTransactionsVisiblity,
    }
  );

  const headerStatus = navigationPageManagerData
    ? navigationPageManagerData['navigation.header.sites']
    : '';

  const statusData = stringToKeyValuePairs(headerStatus, '!', ',')?.map(
    (item) => {
      return { text: item[0], path: item[1] };
    }
  );

  return (
    <div
      className={`${styles.trkclAppHeaderWrapper} ${
        openMobileMenu || headerVisible || (isMobile && profileMenuVisibility)
          ? ''
          : styles.trkclAppHeaderUnPinned
      }`}
      ref={headerRef}
    >
      <div style={{ display: isMobile ? 'none' : 'block' }}>
        <HeaderStatusBar
          status={statusData}
          headerType={headerType}
          solnetData={
            navigationPageManagerData
              ? navigationPageManagerData['navigation.header.superonline']
              : ''
          }
        />
      </div>

      <Layout.Header
        id={id}
        className={`${styles.trkclAppHeader}
       ${
         headerType === HeaderType.YAS
           ? styles.trkclAppHeaderYas
           : styles.trkclAppHeaderIndividual
       }
       ${className}
       `}
      >
        <Layout.Content className={styles.trkclAppHeaderContent}>
          <div
            className={`${styles.trkclAppHeaderLogoSection} ${styles.trkclAppHeaderDefaultLogo}`}
          >
            <AtomImage
              width={34}
              height={34}
              alt={logoAlt}
              src={headerType === HeaderType.YAS ? yasLogo : logo}
            />
          </div>
          <nav
            style={{
              display: isMobile ? 'none' : 'flex',
            }}
            className={styles.trkclAppNavigation}
          >
            <NavHeaderWeb
              headerItems={headerMenuList}
              pasajMenuText={
                navigationPageManagerData
                  ? navigationPageManagerData['navigation.pasaj.menu.text']
                  : ''
              }
              goToPasajText={
                navigationPageManagerData
                  ? navigationPageManagerData['navigation.pasaj.menu.text2']
                  : ''
              }
            />
            <div
              ref={quickTransactionsRef}
              onMouseDown={(e) => console.log(e)}
              onClick={() =>
                setQuickTransactionsVisiblity((prevState) => !prevState)
              }
              className={fastActionClasses}
            >
              <span>
                {navigationPageManagerData
                  ? navigationPageManagerData[
                      'navigation.header.quickActions.title'
                    ]
                  : ''}
              </span>
              <AtomIcon
                icon={
                  <IconsArrowLarge width={18} height={18} id="fast-actions" />
                }
                className={fastActionIconClasses}
              />
              {quickTransactionsVisiblity ? (
                <div
                  className={classnames([
                    styles['trkclAppFastActions__quickTransactions'],
                  ])}
                >
                  <MoleculeFastActions
                    loginFn={() => login(isMobile)}
                    refWidth={240}
                    menuRef={menuRef}
                    onLinkPress={(e) => console.log(e)}
                    popularTransactionsTitle="EN POPÜLER İŞLEMLER"
                    popularTransactions={[
                      {
                        icon: (
                          <AtomIcon
                            icon={
                              <IconsTechSpecs width={'100%'} height={'100%'} />
                            }
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
                            icon={
                              <IconsTechSpecs width={'100%'} height={'100%'} />
                            }
                          />
                        ),
                        url: '',
                        text: 'Lorem Ipsum',
                        id: '4',
                        variant: 'gradientOrange',
                      },
                      {
                        icon: (
                          <AtomIcon
                            icon={
                              <IconsTechSpecs width={'100%'} height={'100%'} />
                            }
                          />
                        ),
                        url: '',
                        text: 'Lorem Ipsum',
                        id: '5',
                        variant: 'gradientOrange',
                      },
                      {
                        icon: (
                          <AtomIcon
                            icon={
                              <IconsTechSpecs width={'100%'} height={'100%'} />
                            }
                          />
                        ),
                        url: '',
                        text: 'Lorem Ipsum',
                        id: '6',
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
          </nav>
          <div className={styles.trkclAppHeaderLine}></div>
          <ActionItems
            setOpenMobileMenu={setOpenMobileMenu}
            setOpenMegaMenu={setOpenMegaMenu}
            setProfileMenuVisibility={setProfileMenuVisibility}
            profileMenuVisibility={profileMenuVisibility}
            handleOpenSearchContent={handleOpenSearchContent}
            activeActionKey={activeActionKey}
            handleOpenLoginContent={handleOpenLoginContent}
            profileMenuRef={profileMenuRef}
            isLogin={isLogin}
            pasajOrderItems={basketItems}
          />
        </Layout.Content>
        <MegaMenuWrapper
          onLeave={(e) => {
            menuHoverRef.current = false;
            if (e.clientY > 680 && checkLoginOrSearchContent) {
              setOpenMegaMenu(false);
              setActiveActionKey(MegaMenuType.NULL);
              handleOutHover();
            }
            if (
              checkLoginOrSearchContent &&
              ((headMenuContainerRef.current &&
                e.clientX > headMenuContainerRef.current?.clientWidth + 5) ||
                (headMenuContainerRef.current &&
                  headMenuContainerRef?.current?.offsetLeft > e.clientX))
            ) {
              setActiveActionKey(MegaMenuType.NULL);
              setOpenMegaMenu(false);
            }
            if (!activeActionKey && checkLoginOrSearchContent) {
              setOpenMegaMenu(false);
            }
          }}
          onHovering={() => {
            menuHoverRef.current = true;
          }}
          activeActionKey={activeActionKey}
          setActiveActionKey={setActiveActionKey}
          openMegaMenu={openMegaMenu}
          setOpenMegaMenu={setOpenMegaMenu}
          setOnHeader={setOpenMegaMenu}
          navigationPageManagerData={navigationPageManagerData}
          searchTags={searchTags}
        />
      </Layout.Header>
      <MobileNav
        openMobileMenu={openMobileMenu}
        setOpenMobileMenu={setOpenMobileMenu}
        headerMenuItems={headerMenuList}
      />
    </div>
  );
};

export default Header;
