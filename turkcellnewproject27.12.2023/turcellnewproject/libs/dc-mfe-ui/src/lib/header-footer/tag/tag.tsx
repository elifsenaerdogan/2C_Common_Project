import { Tag as TagTemplate } from 'antd';
import styles from './tag.module.scss';
import { TagProps } from 'antd/lib/tag';
import { TagVariants } from './types/tag-types';
import Link from 'next/link';

interface PropTypes extends TagProps {
  tagVariant?: TagVariants;
  isDisabled?: boolean;
  text?: string;
  link?: string;
  wrapperClassName?: string;
}

const Tag = (props: PropTypes) => {
  const {
    text = '',
    wrapperClassName = '',
    link = '',
    isDisabled,
    children,
    tagVariant = 'trkcl_primary',
  } = props;

  return (
    <Link
      href={link}
      className={`${styles.trkclAppTagWrapper} ${wrapperClassName}`}
    >
      <TagTemplate
        className={`text-body-small  ${styles.trkclAppTag} ${
          styles[tagVariant]
        } ${isDisabled ? ` ${styles.disabled} ` : ''}`}
        {...props}
      >
        {children || text}
      </TagTemplate>
    </Link>
  );
};

export default Tag;
