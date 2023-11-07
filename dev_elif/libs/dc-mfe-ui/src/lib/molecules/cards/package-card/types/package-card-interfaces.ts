import Base from '@others/interfaces/base-props';

export interface PackageCardProps extends Base {
  className?: string;
  packageList: object[];
  onChange: (newVal: any) => void;
  outClickStatus: (newVal: any) => void;
  headerVariant: string;
  wrapperClassName?: string;
}
