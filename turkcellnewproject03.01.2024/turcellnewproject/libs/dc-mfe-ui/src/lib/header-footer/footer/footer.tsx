import Base from '@others/interfaces/base-props';
import styles from './footer.module.scss';
import FooterBottom from './footer-bottom';
import FooterWeb from './footer-web';
import FooterMobile from './footer-mobile';
import { SliderData } from './slider';
import { MenuProps } from 'antd/lib/menu';
import { FooterNavProps } from './nav/types/footer-nav-interfaces';
import { SocialMediaPlatform } from './social';
import Social from './social';
import { IconsArrowLarge } from '@others/icons';
import Link from 'next/link';
import { stringToKeyValuePairs } from '@others/helpers';
import { LegacyRef } from 'react';

export interface PropTypes extends Base {
  navData: FooterNavProps[];
  helperLinks: string;
  languageOptions: string;
  copyrightText?: string;
  sliderData?: SliderData[];
  defaultLanguage?: string;
  socialMediaFolowText?: string;
  socialMediaPlatforms?: SocialMediaPlatform[];
  footerRef?: LegacyRef<HTMLDivElement> | undefined;
}

export const Footer = (props: PropTypes) => {
  const {
    id,
    className = '',
    navData,
    sliderData,
    languageOptions,
    helperLinks,
    defaultLanguage,
    socialMediaPlatforms,
    socialMediaFolowText,
    copyrightText,
    footerRef,
  } = props;

  const formattedLanguages = stringToKeyValuePairs(languageOptions, '!', ',');

  const languageList: MenuProps['items'] = formattedLanguages?.map(
    (language) => {
      return {
        label: (
          <Link href={language[1] || ''} target="_blank">
            {language[0]}
          </Link>
        ),
        key: language[0],
      };
    }
  );

  return (
    <div
      id={id}
      className={`${styles.trkcllAppFooter} ${className}`}
      ref={footerRef}
    >
      <Social
        className={styles.trkcllAppHideElement}
        socialMediaPlatforms={socialMediaPlatforms}
      />
      <IconsArrowLarge className={styles.trkcllAppHideElement} />
      <FooterMobile
        languageOptions={languageList}
        navData={navData}
        socialMediaPlatforms={socialMediaPlatforms}
      />
      <FooterWeb
        languageOptions={languageList}
        defaultLanguage={defaultLanguage}
        navData={navData}
        socialMediaPlatforms={socialMediaPlatforms}
        socialMediaFolowText={socialMediaFolowText}
      />
      <FooterBottom
        helperLinks={helperLinks}
        copyrightText={copyrightText}
        sliderData={sliderData}
      />
    </div>
  );
};

export default Footer;
