import styles from './headerStatusBar.module.scss';
import Base from '@others/interfaces/base-props';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { HeaderType } from '@others/enums/headerType';
import classNames from 'classnames';
import { Divider } from 'antd';

interface PropTypes extends Base {
  status: {
    text: string;
    type: HeaderType;
    path: string;
  }[];
  type: HeaderType;
  setOnHeader?: (newVal: boolean) => void;
  onNavigate?: (item: { type: HeaderType; path: string; text: string }) => void;
}

export function HeaderStatusBar(props: PropTypes) {
  const { status, onNavigate, id, className = '', type } = props;

  const pathname = usePathname();

  // const handleOutHover = (linkType: string) => {
  //   if (pathname === '/' && linkType === 'Kurumsal') {
  //     if (setOpenSearchContent && setOnHeader) {
  //       setOnHeader(false)
  //       setOpenSearchContent(false)
  //     }
  //   }
  // }

  const headerStatusBarWrapperClasses = classNames(
    'a-trkclAppStatusBarWrapper',
    styles['a-trkclAppStatusBarWrapper'],
    `${className}`,
    type === HeaderType.INDIVIDUAL
      ? classNames(styles['a-trkclAppStatusBarWrapper__individualBgColor'])
      : classNames(styles['a-trkclAppStatusBarWrapper__corporateBgColor'])
  );
  const statusBarClasses = classNames(
    'text-captions-regular',
    styles['a-trkclAppStatusBarWrapper__statusBar']
  );
  const statusBarListClasses = classNames(
    styles['a-trkclAppStatusBarWrapper__statusBar--list']
  );

  return (
    <div
      className={`${headerStatusBarWrapperClasses}
    `}
      id={id}
    >
      <div className={statusBarClasses}>
        <ul className={statusBarListClasses}>
          {status?.map((item, index) => {
            const isActive = pathname === item.path;
            return (
              <li key={item.type}>
                <Link
                  href={item.path}
                  onClick={() => {
                    if (onNavigate) {
                      onNavigate(item);
                    }
                  }}
                  className={` ${
                    isActive
                      ? styles.trkclAppStatusBarListItemActive
                      : styles.trkclAppStatusBarListItem
                  } `}
                >
                  {item.text}
                </Link>
                {index !== status.length - 1 ? (
                  <Divider
                    type="vertical"
                    className={styles.trkclAppStatusBarListItemDivider}
                  />
                ) : (
                  <></>
                )}
              </li>
            );
          })}
        </ul>
        <Link
          href={''}
          className={styles.trkclAppStatusBarListItemActive}
          style={{ fontWeight: '500' }}
        >
          superonline.net
        </Link>
      </div>
    </div>
  );
}

export default HeaderStatusBar;
