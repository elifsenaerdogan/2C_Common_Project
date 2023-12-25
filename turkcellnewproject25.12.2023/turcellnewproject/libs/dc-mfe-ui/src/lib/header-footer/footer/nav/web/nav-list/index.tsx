import Base from '@others/interfaces/base-props';
import { useState } from 'react';
import ShowMoreBtn from '../../show-more-btn';
import NavText from '../../nav-text';
import { webNavShownItemLimit } from '@others/constants/footer/footer-constants';
import { FooterNavProps } from '../../types/footer-nav-interfaces';
import styles from './nav-list.module.scss';

export interface NavMenuWebItem {
  key: string;
  label: string;
  children?: NavMenuWebItem[];
}

interface PropTypes extends Base {
  listItems: FooterNavProps[];
}

const NavList = (props: PropTypes) => {
  const { listItems } = props;
  const [isShowMore, setIsShowMore] = useState(false);

  return (
    <>
      {listItems?.map((item: FooterNavProps, i: number) => {
        if (i >= webNavShownItemLimit && !isShowMore) return;
        return (
          <NavText
            key={item.uniqueId}
            text={item.title}
            link={item.titleLink}
            className={`text-body-small ${styles.listItem}`}
          />
        );
      })}
      {listItems.length > webNavShownItemLimit && (
        <ShowMoreBtn isShowMore={isShowMore} setIsShowMore={setIsShowMore} />
      )}
    </>
  );
};

export default NavList;
