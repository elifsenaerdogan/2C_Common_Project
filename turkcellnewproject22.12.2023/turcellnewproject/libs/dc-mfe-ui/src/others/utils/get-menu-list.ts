import { HeaderMenuList } from '../../lib/header-footer/header/nav/types/header-interfaces';
import { FooterNavProps } from '../../lib/header-footer/footer/nav/types/footer-nav-interfaces';

export const getHeaderMenuList = (
  array: HeaderMenuList[],
  level: string,
  channel: string,
  parentCategoryId?: string
) => {
  if (parentCategoryId) {
    return array
      ?.filter(
        (item) =>
          item.menuLevel === `;#${level}.Seviye;#` &&
          item.menuChannel.includes(channel) &&
          item.menuCustomerType === `;#Bireysel;#` &&
          item.menuListParent?.uniqueId === parentCategoryId
      )
      .sort((a, b) => a.itemOrder - b.itemOrder);
  } else {
    return array
      ?.filter(
        (item) =>
          item.menuLevel === `;#${level}.Seviye;#` &&
          item.menuChannel.includes(channel) &&
          item.menuCustomerType === `;#Bireysel;#`
      )
      .sort((a, b) => a.itemOrder - b.itemOrder);
  }
};

export const getFooterMenuList = (
  array: FooterNavProps[],
  level: string,
  channel: string,
  parentCategoryId?: string
) => {
  if (parentCategoryId) {
    return array
      ?.filter(
        (item) =>
          item.footerMenuLevel === `;#${level}.Seviye;#` &&
          item.footerCustomerType.includes('Bireysel') &&
          item.footerChannel.includes(channel) &&
          item.footerMenuList?.uniqueId === parentCategoryId
      )
      .sort((a, b) => a.itemOrder - b.itemOrder);
  } else {
    return array
      ?.filter(
        (item) =>
          item.footerMenuLevel === `;#${level}.Seviye;#` &&
          item.footerChannel.includes(channel) &&
          item.footerCustomerType.includes('Bireysel')
      )
      .sort((a, b) => a.itemOrder - b.itemOrder);
  }
};
