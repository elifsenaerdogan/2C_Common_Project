import Base from '@others/interfaces/base-props';
import MegaMenuListItem from '../item';
import styles from './index.module.scss';
import { Col, List, Row } from 'antd';
import { useMemo, useState } from 'react';
import data from '@others/dummy/mega-menu';
import { Children } from '@others/typeDeclarations/children';

export interface PropTypes extends Base {
  leftChild: Array<{ id?: number; category?: string }>;
  activeMenuItem?: number | string | null;
}

const MegaMenuLeftSideList = (props: PropTypes) => {
  const { leftChild } = props;
  const [rightColContent, setRightColContent] = useState<Children>([]);

  // LOGIC START

  const handleMouseEnter = (id?: number) => {
    const newContent = data
      .filter((i) => i.id === id)
      .map((i) => {
        return (
          <MegaMenuListItem
            key={i.id}
            text={i.category || ''}
          ></MegaMenuListItem>
        );
      });

    setRightColContent(newContent);
  };

  const renderedChildren = useMemo(
    () =>
      leftChild && leftChild.length > 0
        ? leftChild.map((i) => (
            <MegaMenuListItem
              key={i.id}
              onMouseEnter={() => handleMouseEnter(i.id)}
              onMouseLeave={() => setRightColContent([])}
              text={i.category || ''}
            ></MegaMenuListItem>
          ))
        : null,
    [leftChild]
  );

  // LOGIC END

  return (
    <List className={styles.trkclAppLeftSideMenuList}>
      <Row gutter={92}>
        <Col span={12} className={styles.trkclAppLeftSideMenuList__column}>
          {renderedChildren}
        </Col>
        <Col span={12} className={styles.trkclAppLeftSideMenuList__column}>
          <List>{rightColContent}</List>
        </Col>
      </Row>
    </List>
  );
};

export default MegaMenuLeftSideList;
