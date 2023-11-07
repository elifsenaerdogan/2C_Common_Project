import Base from '@others/interfaces/base-props';
import styles from './footer.module.scss';
import FooterBottom from './footer-bottom';
import FooterWeb from './footer-web';
import FooterMobile from './footer-mobile';
import { CopyrightNavListObject } from './copyright';
import { SliderData } from './slider';
import { MenuProps } from 'antd/lib/menu';
import { NavMenuItem } from './nav/mobile';
import { NavMenuWebItem } from './nav/web/nav-list';
import { SocialMediaPlatform } from './social';
import Social from './social';
import { IconsArrowLarge } from '@others/icons';

export interface PropTypes extends Base {
  navData: NavMenuItem[] | NavMenuWebItem[];
  copyrightNavList?: CopyrightNavListObject[];
  sliderData?: SliderData[];
  languageOptions?: MenuProps['items'];
  defaultLanguage?: string;
  socialMediaPlatforms?: SocialMediaPlatform[];
}

export const Footer = (props: PropTypes) => {
  const {
    id,
    className = '',
    navData,
    copyrightNavList,
    sliderData,
    languageOptions,
    defaultLanguage,
    socialMediaPlatforms,
  } = props;

  return (
    <div id={id} className={`${styles.trkcllAppFooter} ${className}`}>
      <Social
        className={styles.trkcllAppHideElement}
        socialMediaPlatforms={socialMediaPlatforms}
      />
      <IconsArrowLarge className={styles.trkcllAppHideElement} />
      <FooterMobile
        languageOptions={languageOptions}
        navData={navData}
        socialMediaPlatforms={socialMediaPlatforms}
      />
      <FooterWeb
        languageOptions={languageOptions}
        defaultLanguage={defaultLanguage}
        navData={navData as NavMenuWebItem[]}
        socialMediaPlatforms={socialMediaPlatforms}
      />
      <FooterBottom
        copyrightNavList={copyrightNavList}
        sliderData={sliderData}
      />
    </div>
  );
};

export default Footer;
