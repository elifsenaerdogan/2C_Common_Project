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

export interface HeaderMenuList {
  menuListParent?: {
    title: string;
    uniqueId: string;
  };
  itemOrder: number;
  created: Date;
  menuCustomerType: string;
  menuLevel: string;
  modified: Date;
  menuChannel: string;
  id: number;
  title: string;
  titleLink: string;
  uniqueId: string;
}
