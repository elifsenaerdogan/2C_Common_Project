import Base from '@others/interfaces/base-props';

export interface ProfileMenuCardProps extends Base {
  cartTitle: string;
  icon?: JSX.Element | string;
  cartBody?: string;
  cartBottom?: string;
  link?: string;
}
