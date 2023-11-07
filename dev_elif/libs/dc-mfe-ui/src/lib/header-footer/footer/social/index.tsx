import {
  IconsSocialFacebook,
  IconsSocialTwitter,
  IconsSocialYoutube,
  IconsSocialInstagram,
} from '@others/icons/index';
import styles from './socials.module.scss';
import Base from '@others/interfaces/base-props';
import { Space } from 'antd';
import NavText from '../nav/nav-text';
import { Children } from '@others/typeDeclarations/children';

export interface SocialMediaPlatform {
  link: string;
  children: Children;
}

interface PropTypes extends Base {
  socialMediaPlatforms?: SocialMediaPlatform[];
}

const defaultSocialMediaPlatforms: SocialMediaPlatform[] = [
  {
    link: 'http://www.twitter.com/Turkcell',
    children: (
      <IconsSocialTwitter className={styles.trkcllAppSocialMediaIcon} />
    ),
  },
  {
    link: 'http://www.facebook.com/Turkcell',
    children: (
      <IconsSocialFacebook className={styles.trkcllAppSocialMediaIcon} />
    ),
  },
  {
    link: 'https://www.instagram.com/Turkcell',
    children: (
      <IconsSocialInstagram className={styles.trkcllAppSocialMediaIcon} />
    ),
  },
  {
    link: 'http://www.youtube.com/Turkcell',
    children: (
      <IconsSocialYoutube className={styles.trkcllAppSocialMediaIcon} />
    ),
  },
];

const Social = (props: PropTypes) => {
  const { className = '', socialMediaPlatforms } = props;

  return (
    <div className={`${styles.trkcllAppWrapper} ${className}`}>
      <strong>Bizi Takip Edin</strong>

      <Space size={20}>
        {(socialMediaPlatforms || defaultSocialMediaPlatforms).map(
          (platform) => {
            return (
              <NavText link={platform.link} key={platform.link}>
                {platform.children}
              </NavText>
            );
          }
        )}
      </Space>
    </div>
  );
};

export default Social;
