import { AtomIcon } from '@atoms';
import { IconsArrowLarge } from '@others/icons';
import classnames from 'classnames';
import styles from './show-all-btn.module.scss';
import Link from 'next/link';
import { ShowAllBtnProps } from './types/show-all-btn-interfaces';

export default function ShowAll(props: ShowAllBtnProps) {
  const { link, className, categoryName, onClick, ...rest } = props;

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    onClick && onClick(event);
  };

  return (
    <Link
      href={link}
      onClick={handleClick}
      className={classnames('text-body-bold', [styles['showAll']], className)}
      {...rest}
    >
      <span className={classnames('', [styles['showAll__title']])}>
        Tüm {categoryName}
      </span>
      <AtomIcon
        icon={<IconsArrowLarge width={20} height={20} />}
        wrapperClassName={classnames([styles['showAll__icon']])}
      />
    </Link>
  );
}
