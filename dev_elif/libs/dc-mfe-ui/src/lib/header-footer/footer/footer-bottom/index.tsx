import Base from '@others/interfaces/base-props';
import { Col, Row, Divider } from 'antd';
import styles from './footer-bottom.module.scss';
import Slider, { SliderData } from '../slider';
import Copyright, { CopyrightNavListObject } from '../copyright';
import { MAX_COL_SPAN } from '@others/constants/antd';

export interface PropTypes extends Base {
  copyrightNavList?: CopyrightNavListObject[];
  sliderData?: SliderData[];
}

const FooterBottom = (props: PropTypes) => {
  const { copyrightNavList, sliderData } = props;

  return (
    <div className={styles.trkcllAppFooterBottom}>
      <Row className={styles.trkcllAppContainerWidth}>
        <Col span={MAX_COL_SPAN}>
          <Slider sliderData={sliderData} />
        </Col>
      </Row>
      <Divider className={styles.trkcllAppDivider} />
      <Row className={styles.trkcllAppContainerWidth}>
        <Copyright copyrightNavList={copyrightNavList} />
      </Row>
    </div>
  );
};

export default FooterBottom;
