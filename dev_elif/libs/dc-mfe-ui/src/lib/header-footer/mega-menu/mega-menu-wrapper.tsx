import Base from '@others/interfaces/base-props';
import MegaMenuLeftSideList from './left-side';
import styles from './wrapper/wrapper.module.scss';
import { Col, Row } from 'antd';
import { ArrowLarge } from '@others/icons';
import SearchContent from '../search-content/search-content';
import LoginContentContainer from '../login-content-container/login-content-container';
import { MouseEvent } from 'react';
import { productData } from '@others/dummy/cardData';
import ProductCard from '../cards/productCard/productCard';
import { useMobile } from '@others/hooks';
import { MegaMenuType } from '@others/enums/megaMenu';

export interface PropTypes extends Base {
  leftChild: Array<{ id?: number; category?: string }>;
  rightChild?: Array<any>;
  activeMenuItem?: number | string | null;
  openMegaMenu?: boolean;
  setOnHeader?: (newValue: boolean) => void;
  setActiveMenuItem?: (newValue: null | number) => void;
  onHovering?: () => void;
  onLeave?: (e: MouseEvent<HTMLDivElement>) => void;
  setOpenMegaMenu?: (newValue: boolean) => void;
  activeActionKey?: MegaMenuType;
  setActiveActionKey?: (val: MegaMenuType) => void;
}

const MegaMenuWrapper = (props: PropTypes) => {
  const isMobile = useMobile();
  const {
    activeActionKey,
    leftChild,
    onLeave,
    onHovering,
    activeMenuItem,
    openMegaMenu,
    setOpenMegaMenu,
    setActiveMenuItem,
    setActiveActionKey,
  } = props;
  const handleCloseSearchContent = () => {
    if (setOpenMegaMenu) setOpenMegaMenu(false);
    if (setActiveActionKey) setActiveActionKey(MegaMenuType.NULL);
    if (setActiveMenuItem) setActiveMenuItem(null);
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
            <SearchContent />
          ) : activeActionKey === MegaMenuType.AUTH ? (
            <LoginContentContainer
              onClick={() => {
                if (isMobile) {
                  window.open(
                    'https://fastlogin.com.tr/fastlogin_web_app/webLogin'
                  );
                  return;
                }
                const h = 600;
                const w = 500;
                const sw = window.innerWidth;
                const sh = window.innerHeight;
                const left = (sw - w) / 2;
                const top = (sh - h) / 1.5;

                const loginWindow = window.open(
                  'https://fastlogin.com.tr/fastlogin_web_app/webLogin',
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

                if (loginWindow) {
                  // TODO post message
                }
              }}
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
