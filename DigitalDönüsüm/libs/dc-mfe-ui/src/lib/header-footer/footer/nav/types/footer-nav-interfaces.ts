interface Date {
  orig_year: number;
  orig_month: number;
  orig_day: number;
  orig_hour: number;
  orig_minute: number;
  orig_second: number;
  orig_timezone: number;
  year: number;
  month: number;
  day: number;
  timezone: number;
  hour: number;
  minute: number;
  second: number;
}

export interface FooterNavProps {
  footerCustomerType: string;
  itemOrder: number;
  created: Date;
  footerMenuLevel: string;
  modified: Date;
  footerMenuList?: {
    title: string;
    uniqueId: string;
  };
  id: number;
  title: string;
  footerChannel: string;
  titleLink: string;
  uniqueId: string;
}
