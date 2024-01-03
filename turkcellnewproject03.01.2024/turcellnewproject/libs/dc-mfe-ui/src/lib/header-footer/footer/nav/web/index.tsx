import Base from '@others/interfaces/base-props';
import { Col } from 'antd';
import NavText from '../nav-text';
import NavList from './nav-list';
import { MAX_COL_SPAN } from '@others/constants/antd';
import { FooterNavProps } from '../types/footer-nav-interfaces';
import { getFooterMenuList } from '@others/utils/get-menu-list';
import { FooterEnums } from '../types/footer-nav-enums';

interface PropTypes extends Base {
  navData: FooterNavProps[];
}

const NavWeb = (props: PropTypes) => {
  const { navData } = props;
  const colSpan =
    MAX_COL_SPAN /
    getFooterMenuList(navData, FooterEnums.CAT_LEVEL_1, FooterEnums.CHANNEL_WEB)
      ?.length;

  return (
    <>
      {getFooterMenuList(
        navData,
        FooterEnums.CAT_LEVEL_1,
        FooterEnums.CHANNEL_WEB
      )?.map((level1) => (
        <Col span={colSpan} key={level1.uniqueId}>
          <h3 className="text-body-regular">
            <NavText text={level1?.title} link={level1.titleLink} />
          </h3>
          <NavList
            listItems={getFooterMenuList(
              navData,
              FooterEnums.CAT_LEVEL_2,
              FooterEnums.CHANNEL_WEB,
              level1.uniqueId
            )}
          />
        </Col>
      ))}
    </>
  );
};

export default NavWeb;
