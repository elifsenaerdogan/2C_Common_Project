import Base from '@others/interfaces/base-props';
import Social from '../social';
import { LanguagesMobil } from '../languages';
import { Col, Row, Divider } from 'antd';
import styles from './footer-mobile.module.scss';
import { NavMobile } from '../nav';
import { FooterNavProps } from '../nav/types/footer-nav-interfaces';
import { useMobile } from '@others/hooks';
import { MAX_COL_SPAN } from '@others/constants/antd';
import { SocialMediaPlatform } from '../social';
import { MenuProps } from 'antd/lib';

export interface PropTypes extends Base {
  languageOptions: MenuProps['items'];
  navData: FooterNavProps[];
  socialMediaPlatforms?: SocialMediaPlatform[];
}

const FooterMobile = (props: PropTypes) => {
  const { languageOptions, navData, socialMediaPlatforms } = props;
  const isMobile = useMobile();

  return (
    <div className={`${!isMobile ? styles.trkcllAppHideElement : ''}`}>
      <NavMobile navData={navData} />
      <Row>
        <Col
          span={MAX_COL_SPAN}
          className={styles.trkcllAppMobileContentPadding}
        >
          <Social socialMediaPlatforms={socialMediaPlatforms} />
        </Col>
      </Row>
      <Divider className={styles.trkcllAppDivider} />
      <Row>
        <Col
          span={MAX_COL_SPAN}
          className={styles.trkcllAppMobileContentPadding}
        >
          <LanguagesMobil languageOptions={languageOptions} />
        </Col>
      </Row>
    </div>
  );
};

export default FooterMobile;
