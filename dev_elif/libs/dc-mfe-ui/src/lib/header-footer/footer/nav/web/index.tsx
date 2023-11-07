import Base from '@others/interfaces/base-props';
import { Col } from 'antd';
import NavText from '../nav-text';
import NavList from './nav-list';
import { MAX_COL_SPAN } from '@others/constants/antd';
import { NavMenuWebItem } from './nav-list';

interface PropTypes extends Base {
  navData: NavMenuWebItem[];
}

const NavWeb = (props: PropTypes) => {
  const { navData } = props;
  const colSpan = MAX_COL_SPAN / navData.length;

  return (
    <>
      {navData.map((item: NavMenuWebItem) => {
        return (
          <Col span={colSpan} key={item?.key}>
            <h3 className="text-body-regular">
              <NavText text={item?.label} link={item.key} />
            </h3>
            <NavList listItems={item?.children as NavMenuWebItem[]} />
          </Col>
        );
      })}
    </>
  );
};

export default NavWeb;
