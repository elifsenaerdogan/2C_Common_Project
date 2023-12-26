import { Col } from 'antd';
import styles from './copyright.module.scss';
import NavText from '../nav/nav-text';
import Base from '@others/interfaces/base-props';
import { MAX_COL_SPAN } from '@others/constants/antd';
import { stringToKeyValuePairs } from '@others/helpers';
import { useMobile } from '@others/hooks';

export interface helperLinkObject {
  link: string;
  text: string;
  phonevisibility?: string;
}

interface PropTypes extends Base {
  helperLinks: string;
  copyrightText?: string;
}

const Copyright = (props: PropTypes) => {
  const { helperLinks, copyrightText } = props;
  const isMobile = useMobile();

  const helperLinksData: helperLinkObject[] = stringToKeyValuePairs(
    helperLinks,
    '!',
    ','
  )?.map((values) => {
    return {
      text: values[0] || 'Turkcell',
      link: values[1] || 'https://turkcell.com.tr',
      phonevisibility: values[2] || 'true',
    };
  });

  return (
    <Col span={MAX_COL_SPAN} className={styles.trkcllAppCopyrightWrapper}>
      <div className={styles.trkcllAppCopyrightNav}>
        {helperLinksData?.map((newHelperLink: helperLinkObject) => {
          if (newHelperLink.phonevisibility === 'false' && isMobile) {
            return <></>;
          } else {
            return <NavText {...newHelperLink} key={newHelperLink.link} />;
          }
        })}
      </div>

      <div className={styles.trkcllAppQrContainer}>
        <div id="ETBIS" className={styles.trkcllAppEtbis}>
          <a
            href="https://etbis.eticaret.gov.tr/sitedogrulama/C635879D0CEC481A8A5D1B88654DF795"
            target="_blank"
            rel="nofollow noreferrer"
            title="https://etbis.eticaret.gov.tr/sitedogrulama/C635879D0CEC481A8A5D1B88654DF795"
          >
            <img
              src="https://ffo3gv1cf3ir.merlincdn.net/SiteAssets/Genel/ana-sayfa/etbis-qr-code.png?1773534948052"
              data-src="https://ffo3gv1cf3ir.merlincdn.net/SiteAssets/Genel/ana-sayfa/etbis-qr-code.png?1773534948052"
              alt="ETBIS"
            />
          </a>
        </div>
        {copyrightText}
      </div>
    </Col>
  );
};

export default Copyright;
