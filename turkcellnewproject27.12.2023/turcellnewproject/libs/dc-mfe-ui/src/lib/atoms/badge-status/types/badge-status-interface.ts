import { BadgeType } from '@others/typeDeclarations/badgeTypes';
import BaseProps from '@others/interfaces/base-props';

export interface AtomBadgeStatusProps extends BaseProps {
  status: string;
  className?: string;
  badgeVariant?: BadgeType;
}
