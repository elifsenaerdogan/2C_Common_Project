import Base from '@others/interfaces/base-props';
import styles from './wrapper/wrapper.module.scss';
import { Row } from 'antd';
import { ArrowLarge } from '@others/icons';
import SearchContent from '../search-content/search-content';
import LoginContentContainer from '../login-content-container/login-content-container';
import { MouseEvent } from 'react';
import { useMobile } from '@others/hooks';
import { MegaMenuType } from '@others/enums/megaMenu';
import { login } from '@others/utils/login';
import { NavigationPageManager } from '../types/navigation-pagemanager';

export interface PropTypes extends Base {
  navigationPageManagerData: NavigationPageManager;
  openMegaMenu?: boolean;
  setOnHeader?: (newValue: boolean) => void;
  onHovering?: () => void;
  onLeave?: (e: MouseEvent<HTMLDivElement>) => void;
  setOpenMegaMenu?: (newValue: boolean) => void;
  activeActionKey?: MegaMenuType;
  setActiveActionKey?: (val: MegaMenuType) => void;
  searchTags: string;
}

const MegaMenuWrapper = (props: PropTypes) => {
  const isMobile = useMobile();
  const {
    activeActionKey,
    onLeave,
    onHovering,
    openMegaMenu,
    setOpenMegaMenu,
    setActiveActionKey,
    navigationPageManagerData,
    searchTags,
  } = props;
  const handleCloseSearchContent = () => {
    if (setOpenMegaMenu) setOpenMegaMenu(false);
    if (setActiveActionKey) setActiveActionKey(MegaMenuType.NULL);
  };

  return (
    <div>
      <Row
        onMouseLeave={onLeave}
        onMouseMove={onHovering}
        className={`${styles.trkclAppMegaMenuWrapper} ${
          openMegaMenu ? styles.trkclAppMegaMenuWrapperOpened : ''
        }`}
      >
        <div className={styles.trkclAppMegaMenuWrapperContent}>
          {activeActionKey === MegaMenuType.SEARCH ? (
            <SearchContent
              navigationPageManagerData={navigationPageManagerData}
              searchTags={searchTags}
            />
          ) : activeActionKey === MegaMenuType.AUTH ? (
            <LoginContentContainer
              onClick={() => {
                // eslint-disable-next-line @typescript-eslint/no-empty-function
                window.shConfig = {
                  redirectUrlAfterLogin: '',
                  // eslint-disable-next-line @typescript-eslint/no-empty-function
                  loginSuccessCallback: () => {},
                };

                function defaultLoginSuccessCallback() {
                  console.log('method call');
                  // if (shConfig.redirectUrlAfterLogin) {
                  // location.href = shConfig.redirectUrlAfterLogin;
                  // } else {
                  window.location.href =
                    '/giris/login?redirectUrl=' + window.location.href;
                  // }
                }

                // TO DO: sayfa bazlı isteğe göre konfigüre edilebilir şekilde çalışmalı
                window.shConfig.redirectUrlAfterLogin = window.location.href;

                window.shConfig.loginSuccessCallback =
                  defaultLoginSuccessCallback;

                if (isMobile) {
                  window.open(
                    'https://www-stb3.turkcell.com.tr/giris/mobile_connect/auth'
                  );
                  return;
                }
                const h = 600;
                const w = 500;
                const sw = window.innerWidth;
                const sh = window.innerHeight;
                const left = (sw - w) / 2;
                const top = (sh - h) / 1.5;

                window.open(
                  'https://www-stb3.turkcell.com.tr/giris/mobile_connect/auth',
                  '_blank',
                  'width=' +
                    w +
                    ',height=' +
                    h +
                    ',left=' +
                    left +
                    ',top=' +
                    top
                );
              }}
              navigationPageManagerData={navigationPageManagerData}
            />
          ) : (
            <></>
          )}
        </div>
        {activeActionKey === MegaMenuType.SEARCH ||
        activeActionKey === MegaMenuType.AUTH ? (
          <div
            onClick={handleCloseSearchContent}
            className={styles.trkclAppMegaMenuWrapperDropdownOverlay}
          >
            <ArrowLarge />
          </div>
        ) : (
          <></>
        )}
      </Row>
    </div>
  );
};
export default MegaMenuWrapper;
