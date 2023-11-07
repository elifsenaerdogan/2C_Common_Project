import { Tag as TagTemplate } from 'antd';
import styles from './tag.module.scss';
import { TagProps } from 'antd/lib/tag';
import { TagVariants } from './types/tag-types';

interface PropTypes extends TagProps {
  tagVariant?: TagVariants;
  isDisabled?: boolean;
  text?: string;
  wrapperClassName?: string;
}

const Tag = (props: PropTypes) => {
  const {
    text = '',
    wrapperClassName = '',
    isDisabled,
    children,
    tagVariant = 'trkcl_primary',
  } = props;

  return (
    <div className={`${styles.trkclAppTagWrapper} ${wrapperClassName}`}>
      <TagTemplate
        className={`text-body-small  ${styles.trkclAppTag} ${
          styles[tagVariant]
        } ${isDisabled ? ` ${styles.disabled} ` : ''}`}
        {...props}
      >
        {children || text}
      </TagTemplate>
    </div>
  );
};

export default Tag;
