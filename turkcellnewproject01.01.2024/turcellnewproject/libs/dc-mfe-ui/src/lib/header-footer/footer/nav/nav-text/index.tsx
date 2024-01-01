import styles from './navText.module.scss';
import Base from '@others/interfaces/base-props';
import Link from 'next/link';

interface PropTypes extends Base {
  text?: string;
  link: string;
}

const NavText = (props: PropTypes) => {
  const { text, link, className = '', children } = props;
  return (
    <Link
      href={link}
      {...props}
      className={`${styles.trkcllAppWrapper} ${className}`}
    >
      {text || children}
    </Link>
  );
};

export default NavText;
