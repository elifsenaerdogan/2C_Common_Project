import styles from './headerStatusBar.module.scss';
import Base from '@others/interfaces/base-props';
import Link from 'next/link';
import { HeaderType } from '@others/enums/headerType';
import classNames from 'classnames';
import { Divider } from 'antd';
import { stringToKeyValuePairs } from '@others/helpers';

interface PropTypes extends Base {
  status: {
    text: string;
    path: string;
  }[];
  headerType: HeaderType;
  solnetData: string;
}

export function HeaderStatusBar(props: PropTypes) {
  const { status, id, className = '', headerType, solnetData } = props;

  const headerBarColorType =
    headerType === HeaderType.YAS ? 'blackBgColor' : 'individualBgColor';

  const [solnetVisible, solnetUrl] = [
    ...stringToKeyValuePairs(solnetData, '!', ',')[0],
  ];

  const headerStatusBarWrapperClasses = classNames(
    'a-trkclAppStatusBarWrapper',
    [styles['a-trkclAppStatusBarWrapper']],
    {
      [styles[`a-trkclAppStatusBarWrapper__${headerBarColorType}`]]:
        headerBarColorType,
    },
    `${className}`
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
            const isActive = 'https://www.turkcell.com.tr/' === item.path;
            return (
              <li key={item.path}>
                <Link
                  href={item?.path ?? ''}
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
          href={solnetUrl || ''}
          target="_blank"
          className={styles.trkclAppStatusBarListItemActive}
          style={{ fontWeight: '500' }}
        >
          {solnetVisible}
        </Link>
      </div>
    </div>
  );
}

export default HeaderStatusBar;
