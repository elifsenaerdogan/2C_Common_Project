import Base from '@others/interfaces/base-props';
import { LanguagesWeb } from '../languages';
import { Col, Row, Divider } from 'antd';
import styles from './footer-web.module.scss';
import { NavWeb } from '../nav';
import { MenuProps } from 'antd/lib/menu';
import { FooterNavProps } from '../nav/types/footer-nav-interfaces';
import { SocialMediaPlatform } from '../social';
import Social from '../social';
import { useMobile } from '@others/hooks';
import BreadCrumb from '../../breadcrumb/breadcrumb';

export interface PropTypes extends Base {
  languageOptions: MenuProps['items'];
  navData: FooterNavProps[];
  socialMediaPlatforms?: SocialMediaPlatform[];
  defaultLanguage?: string;
  socialMediaFolowText?: string;
}

const FooterWeb = (props: PropTypes) => {
  const {
    languageOptions,
    navData,
    socialMediaPlatforms,
    defaultLanguage,
    socialMediaFolowText,
  } = props;
  const isMobile = useMobile();

  return (
    <div
      className={`${styles.trkcllAppWebContentContainer} ${
        styles.trkcllAppContainerWidth
      } ${isMobile ? styles.trkcllAppHideElement : ''}`}
    >
      <Row className={styles.trkcllAppNavRow} style={{ paddingBottom: '0px' }}>
        <BreadCrumb />
      </Row>
      <Row gutter={20} className={styles.trkcllAppNavRow}>
        <NavWeb navData={navData} />
      </Row>
      <Divider className={styles.trkcllAppDivider} />
      <Row
        align="middle"
        justify="space-between"
        className={styles.trkcllAppMiddleRow}
      >
        <Col>
          <LanguagesWeb
            languageOptions={languageOptions}
            defaultLanguage={defaultLanguage}
          />
        </Col>
        <Col>
          <Social
            socialMediaPlatforms={socialMediaPlatforms}
            socialMediaFolowText={socialMediaFolowText}
          />
        </Col>
      </Row>
    </div>
  );
};

export default FooterWeb;
