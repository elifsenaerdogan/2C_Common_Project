import Base from '@others/interfaces/base-props';
import { MouseEventHandler } from 'react';

export interface ShowAllBtnProps extends Base {
  link: string;
  categoryName: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
}
