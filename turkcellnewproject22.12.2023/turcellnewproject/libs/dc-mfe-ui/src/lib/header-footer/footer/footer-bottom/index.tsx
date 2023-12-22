import Base from '@others/interfaces/base-props';
import { Col, Row, Divider } from 'antd';
import styles from './footer-bottom.module.scss';
import Slider, { SliderData } from '../slider';
import Copyright from '../copyright';
import { MAX_COL_SPAN } from '@others/constants/antd';

export interface PropTypes extends Base {
  helperLinks: string;
  copyrightText?: string;
  sliderData?: SliderData[];
}

const FooterBottom = (props: PropTypes) => {
  const { helperLinks, sliderData, copyrightText } = props;

  return (
    <div className={styles.trkcllAppFooterBottom}>
      <Row className={styles.trkcllAppContainerWidth}>
        <Col span={MAX_COL_SPAN}>
          <Slider sliderData={sliderData} />
        </Col>
      </Row>
      <Divider className={styles.trkcllAppDivider} />
      <Row className={styles.trkcllAppContainerWidth}>
        <Copyright helperLinks={helperLinks} copyrightText={copyrightText} />
      </Row>
    </div>
  );
};

export default FooterBottom;
