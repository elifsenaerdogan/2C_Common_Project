import { PopularCardProps } from '../../../atoms/popular-card/types/popular-card-interfaces';
import Base from '@others/interfaces/base-props';
import { LegacyRef } from 'react';

export interface MenuLinkObject {
  url: string;
  text: string;
}

export interface MenuLinkItem {
  url: string;
  text: string;
  sideMenu?: MenuLinkObject[];
}

export interface FastActionsProps extends Base {
  popularTransactionsTitle: string;
  popularTransactions: PopularCardProps[];
  allFastActionsTitle: string;
  fastActions: MenuLinkItem[];
  onLinkPress: (e: MenuLinkItem) => void;
  loginFn: () => void;
  menuRef: LegacyRef<HTMLDivElement> | undefined;
  paddingVertical?: number;
  refWidth: number;
}
