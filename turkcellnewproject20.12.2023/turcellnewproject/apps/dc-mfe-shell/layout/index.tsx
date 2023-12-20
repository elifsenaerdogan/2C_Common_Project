import {
  Footer,
  Header,
  HeaderMenuList as HeaderMenuItemProps,
  FooterNavProps,
  HelpRibbon,
  HelpRibbonData,
} from '@dc-mfe-ui';
import Error from 'next/error';
import { MenuService } from '../services/api/use-menu-items-data';
import { PagemanagerService } from '../services/api/use-pagemanager-data';
import { useQuery } from '@tanstack/react-query';
import { usePasajBasketCount } from '../services/api/use-turkcell-base-data';
import { NavigationPageManager } from '@dc-mfe-ui';
import { HeaderType } from '@others/enums/headerType';
import { useEffect, useRef, useState } from 'react';
import QueryKeyEnums from '../enums/query-keys';

export default function AppLayout({ children, isHide }) {
  const footerRef = useRef<HTMLDivElement | null>(null);
  const [helpRibbonIsVisible, setHelpRibbonIsVisible] = useState(false);
  const [helpRibbonContainerIsOpen, setHelpRibbonContainerIsOpen] =
    useState(false);

  const getRibbonVisibility = (containerIsOpen) => {
    setHelpRibbonContainerIsOpen(containerIsOpen);
  };

  const { data: headerMenuItemList } = useQuery<HeaderMenuItemProps[], Error>({
    queryKey: [QueryKeyEnums.HEADER_ITEMS],
    queryFn: () => MenuService('GetMenuList'),
    staleTime: 12 * 60 * 60 * 1000, //layout datası, sabit ve değişemeyek. Yeniden request atmayı engelleme amaçlı 12 saat fresh kalsın.
  });

  const { data: footerMenuItemList } = useQuery<FooterNavProps[], Error>({
    queryKey: [QueryKeyEnums.FOOTER_ITEMS],
    queryFn: () => MenuService('GetFooterMenuList'),
    staleTime: 12 * 60 * 60 * 1000, //layout datası, sabit ve değişemeyek. Yeniden request atmayı engelleme amaçlı 12 saat fresh kalsın.
  });

  const { data: navigationPageManager } = useQuery<
    NavigationPageManager,
    Error
  >({
    queryKey: [QueryKeyEnums.NAVIGATION_PM],
    queryFn: () => PagemanagerService('dc-mfe-navigation-pagemanager'),
    staleTime: 12 * 60 * 60 * 1000, //layout datası, sabit ve değişemeyek. Yeniden request atmayı engelleme amaçlı 12 saat fresh kalsın.
  });

  const { data: helpRibbonPageManager } = useQuery<HelpRibbonData, Error>({
    queryKey: [QueryKeyEnums.HELPRIBBON_PM],
    queryFn: () => PagemanagerService('redesignSupportPageManager'),
    staleTime: 12 * 60 * 60 * 1000, //layout datası, sabit ve değişemeyek. Yeniden request atmayı engelleme amaçlı 12 saat fresh kalsın.
  });

  const { data: pasajBasketCount } = usePasajBasketCount();

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    setHelpRibbonIsVisible(
      scrollPosition + window.innerHeight > footerRef.current.offsetTop
    );
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {!isHide && (
        <Header
          headerType={HeaderType.INDIVIDUAL}
          headerMenuList={headerMenuItemList}
          basketItems={pasajBasketCount}
          navigationPageManagerData={navigationPageManager}
        />
      )}
      <main>{children}</main>

      {helpRibbonIsVisible || helpRibbonContainerIsOpen ? (
        <HelpRibbon
          helpRibbonPageManager={helpRibbonPageManager}
          getContainerVisibility={getRibbonVisibility}
          username="Yasin"
        />
      ) : (
        <></>
      )}

      {!isHide && (
        <Footer
          helperLinks={`${
            navigationPageManager
              ? navigationPageManager['navigation.footer.supportlinks']
              : ''
          }`}
          copyrightText={`${
            navigationPageManager
              ? navigationPageManager['navigation.footer.copyright.text']
              : ''
          }`}
          navData={footerMenuItemList}
          socialMediaFolowText={`${
            navigationPageManager
              ? navigationPageManager['navigation.footer.followUs.text']
              : ''
          }`}
          languageOptions={`${
            navigationPageManager
              ? navigationPageManager[
                  'navigation.footer.language.support.title.content'
                ]
              : ''
          }`}
          footerRef={footerRef}
        />
      )}
    </>
  );
}
