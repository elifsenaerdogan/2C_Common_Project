import { ArrowLarge } from '@others/icons';
import { AtomIcon } from '../../icon/atom-icon';
import styles from './atom-show-more.module.scss';
import { AtomShowMoreProps } from './types/show-more-interfaces';
import classnames from 'classnames';

export function AtomShowMore(props: AtomShowMoreProps) {
  const { onClick, className } = props;
  return (
    <div onClick={onClick} className={classnames(styles['a-trkclMore'],className)}>
      <div className={classnames('text-body-bold', styles['a-trkclMore__moreText'])}>
        {'Daha Fazla'}
      </div>
      <div>
        <AtomIcon
        className={classnames(
          'text-head-bold-s',
          styles['a-trkclMore__downIcon']
        )}
        icon={<ArrowLarge />}
      />
      </div>
      
    </div>
  );
}

export default AtomShowMore;
