import Base from '@others/interfaces/base-props';
import React from 'react';
import classnames from 'classnames';
import styles from './second-page-nav.module.scss';
import { ArrowLarge } from '@others/icons';
import { AtomIcon } from '@atoms';
import { Divider } from 'antd';
import Link from 'next/link';

interface SecondPageNavProps extends Base {
  setActivePage: (activePage: number) => void;
  activeSubCategory: string;
  header?: React.ReactNode;
  footer?: React.ReactNode;
}

export default function SecondPageNav(props: SecondPageNavProps) {
  const { className, setActivePage, footer, header, activeSubCategory } = props;

  console.log('activeSub', activeSubCategory);

  const pageWrapperClasses = classnames(
    [styles['trkclAppSecondPage']],
    className
  );

  const pageHeaderClasses = classnames('text-body-bold', [
    styles['trkclAppSecondPage__header'],
  ]);

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
      {header ? header : <></>}
      <Divider
        className={classnames([styles['trkclAppSecondPage__divider']])}
      />
      <div
        className={classnames('text-body-regular', [
          styles['trkclAppSecondPage__items'],
        ])}
      >
        <div className={classnames([styles['trkclAppSecondPage__items']])}>
          <div
            className={classnames([styles['trkclAppSecondPage__items--item']])}
          >
            <Link
              href="/pasaj"
              className={classnames([
                styles['trkclAppSecondPage__items--item-link'],
              ])}
            >
              Sub menu 1
            </Link>
            <Divider
              className={classnames([styles['trkclAppSecondPage__divider']])}
            />
          </div>
          <div
            className={classnames([styles['trkclAppSecondPage__items--item']])}
          >
            <Link
              href="/pasaj"
              className={classnames([
                styles['trkclAppSecondPage__items--item-link'],
              ])}
            >
              Sub menu 2
            </Link>
            <Divider
              className={classnames([styles['trkclAppSecondPage__divider']])}
            />
          </div>
        </div>
      </div>
      {footer ? footer : <></>}
    </div>
  );
}
