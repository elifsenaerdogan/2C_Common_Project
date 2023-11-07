import React from 'react';
import { Menu } from 'antd';
import type { MenuProps } from 'antd';
import styles from './first-page-nav.module.scss';
import { IconsArrowLarge } from '@others/icons';
import { AtomImage, AtomPasajButton } from '@atoms';
import pasajLogo from '@others/assets/images/header/group-6@3x.png';
import classnames from 'classnames';
import { ShowAllButton } from '../../../index';
import Base from '@others/interfaces/base-props';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key?: React.Key | null,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group'
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

interface FirstPageProps extends Base {
  setActivePage: (activePage: number) => void;
  onClick: (id1: string, id2: string) => void;
  activeCategory: string;
}

const FirstPageNav = (props: FirstPageProps) => {
  const { setActivePage, onClick, activeCategory } = props;

  const handleItemClick = (categoryId: string, subCategoryId: string) => {
    onClick(categoryId, subCategoryId);
    setActivePage(2);
  };

  const items: MenuItem[] = [
    getItem(
      <AtomImage
        id="sub1"
        className={classnames([styles['trkclAppMobileNav__category--image']])}
        width={75.6}
        height={24}
        alt="pasaj-logo"
        src={pasajLogo}
      />,
      'sub1',
      null,
      [
        getItem(
          <span
            onClick={() => handleItemClick('sub1', 'sub1.1')}
            className={classnames('text-body-regular', [
              styles['trkclAppMobileNav__subcategory'],
            ])}
          >
            opt1
          </span>,
          'sub1.1'
        ),
        getItem(
          <span
            onClick={() => handleItemClick('sub1', 'sub1.2')}
            className={classnames('text-body-regular', [
              styles['trkclAppMobileNav__subcategory'],
            ])}
          >
            opt2
          </span>,
          'sub1.2'
        ),
        getItem(
          <span
            onClick={() => handleItemClick('sub1', 'sub1.3')}
            className={classnames('text-body-regular', [
              styles['trkclAppMobileNav__subcategory'],
            ])}
          >
            opt3
          </span>,
          'sub1.3'
        ),
        getItem(
          <span
            onClick={() => handleItemClick('sub1', 'sub1.4')}
            className={classnames('text-body-regular', [
              styles['trkclAppMobileNav__subcategory'],
            ])}
          >
            opt4
          </span>,
          'sub1.4'
        ),
        getItem(
          <span
            onClick={() => handleItemClick('sub1', 'sub1.5')}
            className={classnames('text-body-regular', [
              styles['trkclAppMobileNav__subcategory'],
            ])}
          >
            opt5
          </span>,
          'sub1.5'
        ),
        getItem(
          <AtomPasajButton
            className={classnames([
              styles['trkclAppMobileNav__subcategory--pasaj'],
            ])}
            text="Pasaja git"
            imageAlt="pasaj-logo"
          />,
          '6'
        ),
      ]
    ),

    getItem(
      <div
        id="sub2"
        className={classnames('text-body-bold', [
          styles['trkclAppMobileNav__category'],
        ])}
      >
        Paketler
      </div>,
      'sub2',
      null,
      [
        getItem(
          <span
            onClick={() => handleItemClick('sub2', 'sub2.1')}
            className={classnames('text-body-regular', [
              styles['trkclAppMobileNav__subcategory'],
            ])}
          >
            opt6
          </span>,
          'sub2.1'
        ),
        getItem(
          <span
            onClick={() => handleItemClick('sub2', 'sub2.2')}
            className={classnames('text-body-regular', [
              styles['trkclAppMobileNav__subcategory'],
            ])}
          >
            opt7
          </span>,
          'sub2.2'
        ),
        getItem(
          <span
            onClick={() => handleItemClick('sub2', 'sub2.3')}
            className={classnames('text-body-regular', [
              styles['trkclAppMobileNav__subcategory'],
            ])}
          >
            opt8
          </span>,
          'sub2.3'
        ),
        getItem(
          <ShowAllButton
            categoryName="Paketler"
            link="/pasa"
            className={classnames('text-body-regular', [
              styles['trkclAppMobileNav__subcategory--showall'],
            ])}
          />,
          '17'
        ),
      ]
    ),
    getItem(
      <div
        className={classnames('text-body-bold', [
          styles['trkclAppMobileNav__category'],
        ])}
      >
        Telefonlar
      </div>,
      'sub3',
      null,
      [
        getItem(
          <span
            onClick={() => handleItemClick('sub3', 'sub3.1')}
            className={classnames('text-body-regular', [
              styles['trkclAppMobileNav__subcategory'],
            ])}
          >
            opt9
          </span>,
          'sub3.1'
        ),
        getItem(
          <span
            onClick={() => handleItemClick('sub3', 'sub3.2')}
            className={classnames('text-body-regular', [
              styles['trkclAppMobileNav__subcategory'],
            ])}
          >
            opt10
          </span>,
          'sub3.2'
        ),
        getItem(
          <span
            onClick={() => handleItemClick('sub3', 'sub3.3')}
            className={classnames('text-body-regular', [
              styles['trkclAppMobileNav__subcategory'],
            ])}
          >
            opt11
          </span>,
          'sub3.3'
        ),
        getItem(
          <ShowAllButton categoryName="Telefonlar" link="/telefonlar" />,
          '17'
        ),
      ]
    ),
  ];

  const antdMenuClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
  };

  return (
    <Menu
      onClick={antdMenuClick}
      expandIcon={() => (
        <IconsArrowLarge
          width="24"
          height="24"
          className={`${styles.menuExpandIcon}`}
        />
      )}
      defaultOpenKeys={[`${[`${activeCategory}`]}`] || undefined}
      mode="inline"
      items={items}
      className={`text-body-bold ${styles.trkclAppMobileNav} `}
    />
  );
};

export default FirstPageNav;
