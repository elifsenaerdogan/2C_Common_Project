import styles from './atom-profile-menu-cart.module.scss';
import { AtomIcon } from '@atoms';
import classnames from 'classnames';
import Link from 'next/link';
import { ProfileMenuCardProps } from './types/profile-menu-cart-interfaces';

export function AtomProfileMenuCart(props: ProfileMenuCardProps) {
  const { icon, cartTitle, cartBody, cartBottom, className, link, ...rest } =
    props;

  const menuCardClasses = classnames([styles['a-trkclAppMenuCard']], className);

  const menuCardDetailClasses = classnames(
    'text-captions-bold',
    [styles['a-trkclAppMenuCard__details']],
    {
      [styles['a-trkclAppMenuCard__details--center']]: !cartBottom && !cartBody,
    }
  );

  const menuCardBodyClasses = classnames(
    [styles['a-trkclAppMenuCard__details--body']],
    {
      [styles['a-trkclAppMenuCard__details--body--orange']]:
        !cartBottom && cartBody,
    }
  );

  return (
    <Link href={link ? link : '/'} className={menuCardClasses} {...rest}>
      <div className={classnames([styles['a-trkclAppMenuCard__icon']])}>
        {icon ? <AtomIcon icon={icon} /> : <></>}
      </div>
      <div className={menuCardDetailClasses}>
        <div
          className={classnames([styles['a-trkclAppMenuCard__details--title']])}
        >
          {cartTitle}
        </div>
        <div className={menuCardBodyClasses}>{cartBody}</div>
        <div
          className={classnames('text-body-bold', [
            styles['a-trkclAppMenuCard__details--bottom'],
          ])}
        >
          {cartBottom}
        </div>
      </div>
    </Link>
  );
}

export default AtomProfileMenuCart;
