import Base from '@others/interfaces/base-props';

export interface IconProps extends Base {
  icon: JSX.Element | string;
  wrapperClassName?: string;
  onClick?: () => void;
}
