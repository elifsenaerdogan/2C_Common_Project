import Base from '@others/interfaces/base-props';
import { PackageCardData } from '../../../shared/cards/package-card/types/package-card-interfaces';

export interface PriceBoxContainerProps extends Base {
  data: PackageCardData[];
  title?: string;
  wrapperClassName?: string;
  onClick: (newVal: any) => void;
  defaultId: number | string;
}
