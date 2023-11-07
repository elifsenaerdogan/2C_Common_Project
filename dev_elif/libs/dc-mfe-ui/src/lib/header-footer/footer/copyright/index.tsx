import { Col } from 'antd';
import styles from './copyright.module.scss';
import NavText from '../nav/nav-text';
import Base from '@others/interfaces/base-props';
import { copyrightNavConstants } from '@others/constants/footer/footer-constants';
import { MAX_COL_SPAN } from '@others/constants/antd';

export interface CopyrightNavListObject {
  link: string;
  text: string;
  className?: string;
}

interface PropTypes extends Base {
  copyrightNavList?: CopyrightNavListObject[];
}

const Copyright = (props: PropTypes) => {
  const { copyrightNavList } = props;

  return (
    <Col span={MAX_COL_SPAN} className={styles.trkcllAppCopyrightWrapper}>
      <div className={styles.trkcllAppCopyrightNav}>
        {(copyrightNavList || copyrightNavConstants).map(
          (nav: CopyrightNavListObject) => (
            <NavText {...nav} key={nav.link} />
          )
        )}
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
        © {new Date().getFullYear()} Turkcell
      </div>
    </Col>
  );
};

export default Copyright;
