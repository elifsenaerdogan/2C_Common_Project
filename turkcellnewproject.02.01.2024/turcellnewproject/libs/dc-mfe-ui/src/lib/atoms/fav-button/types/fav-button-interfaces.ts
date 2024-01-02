import Base from '@others/interfaces/base-props';

export interface FavButtonProps extends Base {
  isActive?: boolean;
  onClick?: () => void;
}
