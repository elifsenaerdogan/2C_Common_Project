import type { Meta } from '@storybook/react';
import { AtomBadgeStatus } from './atom-badge-status';
import { BadgeStatusType } from 'libs/dc-mfe-ui/src/others/enums/badgeStatusType';

const Story: Meta<typeof AtomBadgeStatus> = {
  component: AtomBadgeStatus,
  title: 'Atoms/BadgeStatus',
};
export default Story;

export const Approved = {
  args: {
    status: BadgeStatusType.APPROVED,
    className: '',
  },
};

export const ApprovedWaiting = {
  args: {
    status: BadgeStatusType.APPROVAL_WAITING,
    className: '',
  },
};

export const ApprovedDenied = {
  args: {
    status: BadgeStatusType.APPROVAL_DENIED,
    className: '',
  },
};
