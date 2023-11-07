import Base from '@others/interfaces/base-props';
import { Layout } from 'antd';
import styles from './header.module.scss';
import turkcellLogo from '@others/assets/images/logo.svg';
import kurumsalLogo from '@others/assets/images/kurumsallogo.webp';
import {
  Accounts,
  Icon as Basket,
  IconsMenu,
  IconsSearch,
} from '@others/icons';
import { HeaderType } from '@others/enums/headerType';
import { useMobile } from '@others/hooks';
import { useEffect, useMemo, useRef, useState } from 'react';
import MobileNav from './nav/mobile/mobile-nav';
import data from '@others/dummy/mega-menu';
import services from '@others/dummy/services';
import HeaderStatusBar from '../header-status-bar/header-status-bar';
import MegaMenuWrapper from '../mega-menu/mega-menu-wrapper';
import { MegaMenuType } from '@others/enums/megaMenu';
import { AtomImage } from '@atoms';
import { NavHeaderWeb } from './nav';

interface PropTypes extends Base {
  headerType?: HeaderType;
  logo?: string;
  logoAlt?: string;
  setShowFooter?: (newVal: boolean) => void;
}

export const Header = (props: PropTypes) => {
  const menuHoverRef = useRef(false);
  const headMenuOverRef = useRef(false);
  const headMenuContainerRef = useRef<HTMLDivElement | null>(null);

  const headerRef = useRef<HTMLDivElement | null>(null);
  const [headerVisible, setHeaderVisible] = useState(true);
  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    if (headerRef.current) {
      setHeaderVisible(scrollPosition <= headerRef.current.clientHeight * 1.5);
    }
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const {
    className = '',
    logo = turkcellLogo,
    id,
    logoAlt = '',
    setShowFooter,
  } = props;
  const isMobile = useMobile();
  const dummies = [data, services];

  const [headerBarType, setHeaderBarType] = useState(HeaderType.INDIVIDUAL);
  const [activeMenuItem, setActiveMenuItem] = useState<number | null | string>(
    null
  );
  const [openMegaMenu, setOpenMegaMenu] = useState<boolean>(false);
  const [openMobileMenu, setOpenMobileMenu] = useState<boolean>(false);

  const [activeActionKey, setActiveActionKey] = useState<
    MegaMenuType | undefined
  >();

  const [selectedData, setSelectedData] = useState<
    Array<{ id?: number; category?: string }>
  >([]);

  useEffect(() => {
    setSelectedData(dummies[Math.random() >= 0.5 ? 1 : 0]);
  }, [activeMenuItem]);

  useEffect(() => {
    if (activeMenuItem) {
      setOpenMegaMenu(true);
    }
  }, [activeMenuItem]);

  useEffect(() => {
    if (openMobileMenu && setShowFooter) setShowFooter(false);
  }, [openMobileMenu]);

  useEffect(() => {
    if (!openMegaMenu) {
      setActiveMenuItem(null);
    }
  }, [openMegaMenu]);

  const handleHover = (id: number) => {
    //setActiveMenuItem(id);
    //setActiveActionKey(MegaMenuType.MEGAMENU);
  };

  const handleOutHover = () => {
    setActiveActionKey(MegaMenuType.NULL);
  };

  // for open search content
  const handleOpenSearchContent = () => {
    if (activeActionKey === MegaMenuType.SEARCH && openMegaMenu) {
      setOpenMegaMenu(false);
      setActiveActionKey(MegaMenuType.NULL);
      setActiveMenuItem(MegaMenuType.NULL);
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
    setActiveMenuItem(MegaMenuType.SEARCH);
  };
  // for open Login content
  const handleOpenLoginContent = () => {
    if (activeActionKey === MegaMenuType.AUTH && openMegaMenu) {
      setOpenMegaMenu(false);
      setActiveActionKey(MegaMenuType.NULL);
      setActiveMenuItem(MegaMenuType.NULL);
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
    setActiveMenuItem(MegaMenuType.AUTH);
  };

  // for open search content
  // const handleIconClick = (key: string) => {
  //   // setActiveMenuItem(null)
  //   if (activeMenuItem === key) {
  //     setActiveMenuItem(null)
  //   } else setActiveMenuItem(key)
  // }

  const actionItems = useMemo(
    () => [
      {
        key: MegaMenuType.SEARCH,
        component: (
          <IconsSearch
            onClick={() => handleOpenSearchContent()}
            className={`${styles.trkclAppHeaderActionsIcon} ${
              activeMenuItem === MegaMenuType.SEARCH
                ? styles.trkclAppHeaderActionsActiveIcon
                : ''
            }`}
            color="#fff"
            width={22}
            height={22}
          />
        ),
      },
      {
        key: MegaMenuType.BASKET,
        component: (
          <Basket
            className={`${styles.trkclAppHeaderActionsIcon} ${
              activeMenuItem === MegaMenuType.BASKET
                ? styles.trkclAppHeaderActionsActiveIcon
                : ''
            }`}
            color="#fff"
            width={22}
            height={22}
          />
        ),
      },
      {
        key: MegaMenuType.AUTH,
        component: (
          <Accounts
            onClick={() => handleOpenLoginContent()}
            className={`${styles.trkclAppHeaderActionsIcon} ${
              activeMenuItem === MegaMenuType.AUTH
                ? styles.trkclAppHeaderActionsActiveIcon
                : ''
            }`}
            color="#fff"
            width={32}
            height={32}
          />
        ),
      },
    ],
    [activeMenuItem, handleOpenSearchContent, handleOpenLoginContent]
  );

  const checkLoginOrSearchContent = useMemo(() => {
    return !(
      activeActionKey === MegaMenuType.SEARCH ||
      activeActionKey === MegaMenuType.AUTH
    );
  }, [activeActionKey]);

  return (
    <div
      className={`${styles.trkclAppHeaderWrapper} ${
        openMobileMenu || headerVisible ? '' : styles.trkclAppHeaderUnPinned
      }`}
      ref={headerRef}
    >
      <div style={{ display: isMobile ? 'none' : 'block' }}>
        <HeaderStatusBar
          onNavigate={(item) => {
            setHeaderBarType(item.type);
          }}
          setOnHeader={setOpenMegaMenu}
          status={[
            {
              type: HeaderType.INDIVIDUAL,
              text: 'Bireysel',
              path: '/',
            },
            {
              type: HeaderType.CORPORATE,
              text: 'Kurumsal',
              path: '/kurumsal',
            },
          ]}
          type={headerBarType}
        />
      </div>

      <Layout.Header
        id={id}
        className={`${styles.trkclAppHeader}
       ${
         headerBarType === HeaderType.INDIVIDUAL
           ? styles.trkclAppHeaderIndividual
           : styles.trkclAppHeaderCorporate
       }
       ${className}
       `}
      >
        <Layout.Content className={styles.trkclAppHeaderContent}>
          <div
            className={`${styles.trkclAppHeaderLogoSection} ${
              headerBarType === HeaderType.CORPORATE
                ? styles.trkclAppHeaderCorporateLogo
                : styles.trkclAppHeaderDefaultLogo
            }`}
          >
            <AtomImage
              width={34}
              height={headerBarType === HeaderType.INDIVIDUAL ? 132 : 34}
              alt={logoAlt}
              src={
                headerBarType === HeaderType.INDIVIDUAL ? logo : kurumsalLogo
              }
            />
          </div>
          <nav
            style={{
              display: isMobile ? 'none' : 'flex',
            }}
            className={styles.trkclAppNavigation}
          >
            <NavHeaderWeb />
            <div className={styles.trkclAppFastActions}>Hızlı işlemler</div>
          </nav>
          <div className={styles.trkclAppHeaderLine}></div>
          <div className={styles.trkclAppHeaderActions}>
            {actionItems?.map((item) => {
              return (
                <div
                  className={styles.trkclAppHeaderActionsIcon}
                  key={item.key}
                >
                  {item.component}
                </div>
              );
            })}
            {isMobile ? (
              <IconsMenu
                onClick={() => {
                  setOpenMobileMenu(true);
                  setOpenMegaMenu(false);
                }}
                color="#fff"
                width={22}
                height={22}
                style={{ fontSize: '20px', color: '#fff' }}
              />
            ) : (
              <></>
            )}
          </div>
        </Layout.Content>
        <MegaMenuWrapper
          onLeave={(e) => {
            menuHoverRef.current = false;
            if (e.clientY > 680 && checkLoginOrSearchContent) {
              setOpenMegaMenu(false);
              setActiveMenuItem(null);
              handleOutHover();
            }
            if (
              checkLoginOrSearchContent &&
              ((headMenuContainerRef.current &&
                e.clientX > headMenuContainerRef.current?.clientWidth + 5) ||
                (headMenuContainerRef.current &&
                  headMenuContainerRef?.current?.offsetLeft > e.clientX))
            ) {
              setActiveMenuItem(null);
              setOpenMegaMenu(false);
            }
            if (!activeMenuItem && checkLoginOrSearchContent) {
              setOpenMegaMenu(false);
            }
          }}
          onHovering={() => {
            menuHoverRef.current = true;
          }}
          activeActionKey={activeActionKey}
          setActiveActionKey={setActiveActionKey}
          leftChild={selectedData}
          openMegaMenu={openMegaMenu}
          setOpenMegaMenu={setOpenMegaMenu}
          setOnHeader={setOpenMegaMenu}
          setActiveMenuItem={setActiveMenuItem}
          activeMenuItem={activeMenuItem}
        />
      </Layout.Header>
      <div>
        <MobileNav
          openMobileMenu={openMobileMenu}
          setOpenMobileMenu={setOpenMobileMenu}
          statusType={headerBarType}
        />
      </div>
    </div>
  );
};

export default Header;
