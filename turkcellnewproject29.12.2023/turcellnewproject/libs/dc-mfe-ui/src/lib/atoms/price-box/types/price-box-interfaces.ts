import BaseProps from '@others/interfaces/base-props';
import { PackageCardData } from '../../../molecules/shared/cards/package-card/types/package-card-interfaces';

export interface PriceBoxProps extends BaseProps {
  item: PackageCardData;
  className?: string;
  onClick?: () => void;
  activeId: string | number;
}
