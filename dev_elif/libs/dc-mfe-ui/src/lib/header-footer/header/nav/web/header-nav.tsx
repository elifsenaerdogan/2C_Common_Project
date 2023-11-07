import React, { useState } from 'react';
import styles from './header-nav.module.scss';
import Base from '@others/interfaces/base-props';
import Link from 'next/link';
import classnames from 'classnames';
import { AtomIcon, AtomPasajButton } from '@atoms';
import { IconsArrowLarge } from '@others/icons';
import { ShowAllButton } from '../index';

interface NavHeaderProps extends Base {
  items?: object[];
}
export const HeaderNav = (props: NavHeaderProps) => {
  const [hover, setHover] = useState(false);

  const handleMouseOver = () => {
    setHover(true);
  };

  const handleMouseOut = () => {
    setHover(false);
  };

  return (
    <ul className={classnames('text-body-regular', [styles['categories']])}>
      <li
        className={classnames('text-body-bold', [styles['categories__item']])}
      >
        <Link href="/">Pasaj</Link>
        <ul
          className={classnames('text-body-regular', [
            styles['categories__lvl1'],
          ])}
        >
          <li className={classnames([styles['categories__lvl1--item']])}>
            <Link
              href={''}
              className={classnames([styles['categories__lvl1--item-wrapper']])}
            >
              <span
                className={classnames([styles['categories__lvl1--item-name']])}
              >
                Telefon 1
              </span>
            </Link>
          </li>
          <li className={classnames([styles['categories__lvl1--item']])}>
            <Link
              href={''}
              className={classnames([styles['categories__lvl1--item-wrapper']])}
            >
              <span
                className={classnames([styles['categories__lvl1--item-name']])}
              >
                Telefon 2
              </span>
            </Link>
          </li>
          <li className={classnames([styles['categories__lvl1--item']])}>
            <Link
              href={''}
              className={classnames([styles['categories__lvl1--item-wrapper']])}
            >
              <span
                className={classnames([styles['categories__lvl1--item-name']])}
              >
                Telefon 3
              </span>
            </Link>
          </li>
          <li className={classnames([styles['categories__lvl1--item']])}>
            <Link
              href={''}
              className={classnames([styles['categories__lvl1--item-wrapper']])}
            >
              <span
                className={classnames([styles['categories__lvl1--item-name']])}
              >
                Telefon 4
              </span>
            </Link>
          </li>
          <li className={classnames([styles['categories__lvl1--item']])}>
            <Link
              href={''}
              className={classnames([styles['categories__lvl1--item-wrapper']])}
            >
              <span
                className={classnames([styles['categories__lvl1--item-name']])}
              >
                Telefon 5
              </span>
            </Link>
          </li>
          <li
            className={classnames('text-body-small', [
              styles['categories__lvl1--text'],
            ])}
          >
            <div>Tüm ürünlerinizi Turkcell Pasaj'da keşfedebilirsiniz!</div>
          </li>
          <li className={classnames([styles['categories__lvl1--pasaj']])}>
            <AtomPasajButton text="Pasaj'a Git" imageAlt="logo-pasaj" />
          </li>
        </ul>
      </li>
      <li
        className={classnames('text-body-bold', [styles['categories__item']])}
      >
        <Link href="/">Paketler</Link>
        <ul
          className={classnames(
            'text-body-regular',
            [styles['categories__lvl1']],
            {
              [styles['border-radius-none']]: hover,
            }
          )}
        >
          <li className={classnames([styles['categories__lvl1--item']])}>
            <Link
              href={''}
              className={classnames([styles['categories__lvl1--item-wrapper']])}
            >
              <span
                className={classnames([styles['categories__lvl1--item-name']])}
              >
                Telefon 1
              </span>
            </Link>
          </li>
          <li className={classnames([styles['categories__lvl1--item']])}>
            <Link
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
              href={''}
              className={classnames([styles['categories__lvl1--item-wrapper']])}
            >
              <span
                className={classnames([styles['categories__lvl1--item-name']])}
              >
                Telefon 2
              </span>
              <AtomIcon
                icon={
                  <IconsArrowLarge width={20} height={20} color="#253342" />
                }
                wrapperClassName={classnames([
                  styles['categories__lvl1--item-icon'],
                ])}
              />
            </Link>
            <ul
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
              className={classnames('text-body-regular', [
                styles['categories__lvl2'],
              ])}
            >
              <li className={classnames([styles['categories__lvl2--item']])}>
                <Link
                  href={'/'}
                  className={classnames([
                    styles['categories__lvl2--item-wrapper'],
                  ])}
                >
                  Sub Telefon 1
                </Link>
              </li>
              <li className={classnames([styles['categories__lvl2--item']])}>
                <Link
                  href={'/'}
                  className={classnames([
                    styles['categories__lvl2--item-wrapper'],
                  ])}
                >
                  Sub Telefon 2
                </Link>
              </li>
              <li className={classnames([styles['categories__lvl2--showall']])}>
                <ShowAllButton link="/" categoryName="Paketler" />
              </li>
            </ul>
          </li>
          <li className={classnames([styles['categories__lvl1--item']])}>
            <Link
              href={''}
              className={classnames([styles['categories__lvl1--item-wrapper']])}
            >
              <span
                className={classnames([styles['categories__lvl1--item-name']])}
              >
                Telefon 3
              </span>
            </Link>
          </li>
          <li className={classnames([styles['categories__lvl1--showall']])}>
            <ShowAllButton link="/" categoryName="Paketler" />
          </li>
        </ul>
      </li>
      <li
        className={classnames('text-body-bold', [styles['categories__item']])}
      >
        <Link href="/">Dijital Servisler</Link>
      </li>
      <li
        className={classnames('text-body-bold', [styles['categories__item']])}
      >
        <Link href="/">Ev İnterneti ve TV+</Link>
      </li>
      <li
        className={classnames('text-body-bold', [styles['categories__item']])}
      >
        <Link href="/">Kampanyalar</Link>
      </li>
    </ul>
  );
};

export default HeaderNav;
