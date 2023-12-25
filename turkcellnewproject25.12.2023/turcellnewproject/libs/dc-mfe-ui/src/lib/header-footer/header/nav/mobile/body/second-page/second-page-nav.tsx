import React, { useMemo } from 'react';
import { Divider } from 'antd';
import Link from 'next/link';
import classnames from 'classnames';
import { getHeaderMenuList } from '@others/utils/get-menu-list';
import Base from '@others/interfaces/base-props';
import { ArrowLarge } from '@others/icons';
import { AtomIcon } from '@atoms';
import { HeaderMenuList } from '../../../types/header-interfaces';
import { HeaderNavWebEnums } from '../../../types/header-enums';
import styles from './second-page-nav.module.scss';

interface SecondPageNavProps extends Base {
  setActivePage: (page: number) => void;
  activeLevel2Category: string;
  headerMenuItems: HeaderMenuList[];
  activePage: number;
}

export function SecondPageNav(props: SecondPageNavProps) {
  const {
    className,
    setActivePage,
    activeLevel2Category,
    headerMenuItems,
    activePage,
  } = props;

  const pageWrapperClasses = classnames(
    [styles['trkclAppSecondPage']],
    {
      [styles['trkclAppSecondPage__open']]: activePage === 2,
    },
    className
  );

  const pageHeaderClasses = classnames('text-body-bold', [
    styles['trkclAppSecondPage__header'],
  ]);

  const cat3Item = useMemo(() => {
    return getHeaderMenuList(
      headerMenuItems,
      HeaderNavWebEnums.CAT_LEVEL_3,
      HeaderNavWebEnums.CHANNEL_MOBILE
    )?.filter(
      (level3) => level3.menuListParent?.uniqueId === activeLevel2Category
    );
  }, [headerMenuItems, activeLevel2Category]);

  return (
    <div className={pageWrapperClasses}>
      <span onClick={() => setActivePage(1)} className={pageHeaderClasses}>
        <AtomIcon icon={<ArrowLarge width={24} height={24} />} />
        <span
          className={classnames([styles['trkclAppSecondPage__header--btn']])}
        >
          Geri
        </span>
      </span>
      <Divider
        className={classnames([styles['trkclAppSecondPage__divider']])}
      />
      <div
        className={classnames('text-body-regular', [
          styles['trkclAppSecondPage__items'],
        ])}
      >
        <div className={classnames([styles['trkclAppSecondPage__items']])}>
          {cat3Item?.map((level3) => (
            <div
              key={level3.uniqueId}
              className={classnames([
                styles['trkclAppSecondPage__items--item'],
              ])}
            >
              <Link
                href={level3.titleLink}
                className={classnames([
                  styles['trkclAppSecondPage__items--item-link'],
                ])}
              >
                {level3.title}
              </Link>
              <Divider
                className={classnames([styles['trkclAppSecondPage__divider']])}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default React.memo(SecondPageNav);
