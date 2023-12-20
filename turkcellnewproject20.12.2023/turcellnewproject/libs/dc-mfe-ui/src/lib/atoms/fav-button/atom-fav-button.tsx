import styles from './atom-fav-button.module.scss';
import classnames from 'classnames';
import { AtomIcon } from '@atoms';
import { IconsFavoriteFill, IconsFavorite } from '@others/icons';
import { FavButtonProps } from './types/fav-button-interfaces';

export const AtomFavButton = (props: FavButtonProps) => {
  const { isActive, onClick, id } = props;

  const iconClasses = classnames(styles['a-fav-button'], {
    [styles['a-fav-button__passive']]: !isActive,
  });

  return (
    <AtomIcon
      id={id}
      icon={isActive ? <IconsFavoriteFill /> : <IconsFavorite />}
      wrapperClassName={iconClasses}
      onClick={() => onClick && onClick()}
    />
  );
};

export default AtomFavButton;
