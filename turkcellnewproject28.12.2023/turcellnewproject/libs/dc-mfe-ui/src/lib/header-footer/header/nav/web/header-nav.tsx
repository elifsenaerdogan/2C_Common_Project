import React, { useCallback, useEffect, useState } from 'react';
import styles from './header-nav.module.scss';
import Base from '@others/interfaces/base-props';
import Link from 'next/link';
import classnames from 'classnames';
import { AtomIcon, AtomPasajButton } from '@atoms';
import { IconsArrowLarge } from '@others/icons';
import { ShowAllButton } from '../index';
import { HeaderMenuList } from '../types/header-interfaces';
import { HeaderNavWebEnums } from '../types/header-enums';
import { getHeaderMenuList } from '@others/utils/get-menu-list';
import { useMobile } from '@others/hooks';

interface NavHeaderProps extends Base {
  headerItems: HeaderMenuList[];
  pasajMenuText?: string;
  goToPasajText?: string;
}
export const HeaderNav = (props: NavHeaderProps) => {
  const { headerItems, pasajMenuText, goToPasajText } = props;
  const isMobile = useMobile();

  const [hover, setHover] = useState(false);

  const channel = isMobile
    ? HeaderNavWebEnums.CHANNEL_MOBILE
    : HeaderNavWebEnums.CHANNEL_WEB;

  const handleHoverClass = (submenuId: string) => {
    headerItems?.some((item) => item.menuListParent?.uniqueId === submenuId)
      ? setHover(true)
      : setHover(false);
  };

  const category1Classes = classnames(
    'text-body-regular',
    [styles['categories__lvl1']],
    {
      [styles['border-radius-none']]: hover,
    }
  );

  return (
    <ul className={classnames('text-body-regular', [styles['categories']])}>
      {getHeaderMenuList(
        headerItems,
        HeaderNavWebEnums.CAT_LEVEL_1,
        channel
      )?.map((level1) => (
        <li
          key={level1.uniqueId}
          className={classnames('text-body-bold', [styles['categories__item']])}
        >
          <Link href={level1.titleLink}>{level1.title}</Link>
          <ul className={category1Classes}>
            {getHeaderMenuList(
              headerItems,
              HeaderNavWebEnums.CAT_LEVEL_2,
              channel,
              level1.uniqueId
            )?.map((level2) => (
              <li
                key={level2.uniqueId}
                className={classnames([styles['categories__lvl1--item']])}
              >
                <Link
                  href={level2.titleLink}
                  className={classnames([
                    styles['categories__lvl1--item-wrapper'],
                  ])}
                  onMouseOver={() => handleHoverClass(level2.uniqueId)}
                  onMouseOut={() => setHover(false)}
                >
                  <span
                    className={classnames([
                      styles['categories__lvl1--item-name'],
                    ])}
                  >
                    {level2.title}
                  </span>
                  {headerItems.some(
                    (item) => item.menuListParent?.uniqueId === level2.uniqueId
                  ) ? (
                    <AtomIcon
                      icon={
                        <IconsArrowLarge
                          width={20}
                          height={20}
                          color="#253342"
                          id={level2.uniqueId}
                        />
                      }
                      wrapperClassName={classnames([
                        styles['categories__lvl1--item-icon'],
                      ])}
                    />
                  ) : (
                    <></>
                  )}
                </Link>

                {headerItems.some(
                  (item) => item.menuListParent?.uniqueId === level2.uniqueId
                ) ? (
                  <ul
                    onMouseOver={() => handleHoverClass(level2.uniqueId)}
                    onMouseOut={() => setHover(false)}
                    className={classnames('text-body-regular', [
                      styles['categories__lvl2'],
                    ])}
                  >
                    {getHeaderMenuList(
                      headerItems,
                      HeaderNavWebEnums.CAT_LEVEL_3,
                      channel,
                      level2.uniqueId
                    )?.map((level3) => (
                      <li
                        key={level3.uniqueId}
                        className={classnames([
                          styles['categories__lvl2--item'],
                        ])}
                      >
                        <Link
                          href={level3.titleLink}
                          className={classnames([
                            styles['categories__lvl2--item-wrapper'],
                          ])}
                        >
                          {level3.title}
                        </Link>
                      </li>
                    ))}
                    <li
                      className={classnames([
                        styles['categories__lvl2--showall'],
                      ])}
                    >
                      <ShowAllButton
                        link={level2.titleLink}
                        categoryName={level2.title}
                      />
                    </li>
                  </ul>
                ) : (
                  <></>
                )}
              </li>
            ))}
            {level1.uniqueId === HeaderNavWebEnums.PASAJ_ID ? (
              <>
                <li
                  className={classnames('text-body-small', [
                    styles['categories__lvl1--text'],
                  ])}
                >
                  <div>{pasajMenuText}</div>
                </li>
                <li className={classnames([styles['categories__lvl1--pasaj']])}>
                  <AtomPasajButton
                    buttonbackground="shade"
                    text={goToPasajText}
                    imageAlt="logo-pasaj"
                  />
                </li>
              </>
            ) : (
              <li className={classnames([styles['categories__lvl1--showall']])}>
                <ShowAllButton
                  link={level1.titleLink}
                  categoryName={level1.title}
                />
              </li>
            )}
          </ul>
        </li>
      ))}
    </ul>
  );
};

export default HeaderNav;
