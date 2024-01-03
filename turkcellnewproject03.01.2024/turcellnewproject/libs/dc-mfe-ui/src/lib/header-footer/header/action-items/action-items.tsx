import { LegacyRef } from 'react';
import styles from './action-items.module.scss';
import classnames from 'classnames';
import { useMobile } from '@others/hooks';
import {
  IconsMenu,
  IconsSearch,
  Icon as Basket,
  Icons360,
  IconsMobileTopUp,
  IconsReturn,
  IconsTechSpecs,
} from '@others/icons';
import Base from '@others/interfaces/base-props';
import { AtomAvatar, AtomIcon } from '@atoms';
import { MegaMenuType } from '@others/enums/megaMenu';
import { NavProfileWeb } from '../nav';
import { MoleculeProfilMenu } from '../../index';
import { LoginButtons } from './login-buttons/login-buttons';
import { SetStateAction, Dispatch } from 'react';
import Link from 'next/link';

export interface ActionItemsProps extends Base {
  setOpenMobileMenu: (newVal: boolean) => void;
  setOpenMegaMenu: (newVal: boolean) => void;
  handleOpenSearchContent: () => void;
  setProfileMenuVisibility: Dispatch<SetStateAction<boolean>>;
  activeActionKey: MegaMenuType | undefined;
  isLogin?: boolean;
  handleOpenLoginContent: () => void;
  profileMenuRef: LegacyRef<HTMLDivElement> | undefined;
  profileMenuVisibility: boolean;
  pasajOrderItems: number;
}

export const ActionItems = (props: ActionItemsProps) => {
  const {
    setOpenMobileMenu,
    setOpenMegaMenu,
    handleOpenSearchContent,
    handleOpenLoginContent,
    setProfileMenuVisibility,
    activeActionKey,
    profileMenuRef,
    isLogin,
    profileMenuVisibility,
    pasajOrderItems = 0,
  } = props;

  const isMobile = useMobile();

  const searchIconItemClasses = classnames(
    [styles['trkclAppActionItems__item']],
    {
      [styles['trkclAppActionItems__item--active']]:
        activeActionKey === MegaMenuType.SEARCH,
    }
  );

  const basketIconItemClasses = classnames(
    [styles['trkclAppActionItems__item']],
    {
      [styles['trkclAppActionItems__item--active']]:
        activeActionKey === MegaMenuType.BASKET,
    }
  );

  return (
    <div className={classnames([styles['trkclAppActionItems']])}>
      <AtomIcon
        icon={<IconsSearch width={22} height={22} />}
        onClick={() => handleOpenSearchContent()}
        className={searchIconItemClasses}
      />

      <span
        className={classnames([
          styles['trkclAppActionItems__item--basketWrapper'],
        ])}
      >
        <Link href="/pasaj/siparisler">
          <AtomIcon
            icon={<Basket width={22} height={22} />}
            className={basketIconItemClasses}
          />
          <span
            className={classnames('text-legal-bold', [
              styles['trkclAppActionItems__item--basketWrapper-counter'],
            ])}
          >
            {pasajOrderItems}
          </span>
        </Link>
      </span>

      {!isLogin ? (
        <LoginButtons
          handleLoginContentVisibility={handleOpenLoginContent}
          activeActionKey={activeActionKey}
        />
      ) : (
        <div
          className={classnames({
            [styles['trkclAppActionItems__accountsWeb']]: !isMobile,
            [styles['trkclAppActionItems__accountsMobile']]: isMobile,
          })}
        >
          {!isMobile ? (
            <NavProfileWeb
              userName={{
                name: 'Ahmet İlhan',
                nameFontSize: 'small',
                nameColor: 'white',
              }}
              userNumber={{
                number: '0555 555 55 55',
                numberFontSize: 'small',
                numberColor: 'white',
              }}
              icon={{ visibility: true, rotateDeg: 90, color: '#fff' }}
              onClick={() =>
                setProfileMenuVisibility((prevState) => !prevState)
              }
              profileRef={profileMenuRef}
            />
          ) : (
            <AtomAvatar
              style={{ display: 'flex' }}
              userName={'Ahmet Koca'}
              size="xsmall"
              onClick={() =>
                setProfileMenuVisibility((prevState) => !prevState)
              }
              avatarBgColor={profileMenuVisibility ? 'yellow' : 'default'}
            />
          )}

          {profileMenuVisibility ? (
            <MoleculeProfilMenu
              className={classnames({
                [styles['trkclAppActionItems__accountsWeb--profileMenu']]:
                  !isMobile,
                [styles['trkclAppActionItems__accountsMobile--profileMenu']]:
                  isMobile,
              })}
              name="Kemal"
              profilAction={[
                { text: 'İşlem Merkezine Git', url: '/' },
                { text: 'Ayarlarım', url: '/' },
              ]}
              closeProfileMenuVisibility={() =>
                setProfileMenuVisibility((prevState) => !prevState)
              }
              onLogout={() => console.log('')}
              profilCart={[
                {
                  cartTitle: 'Fatura öde',
                  cartBody: 'Ekim faturası',
                  cartBottom: '200TL',
                  link: '/',
                  icon: <IconsTechSpecs />,
                  id: '1',
                },
                {
                  cartTitle: 'Fatura öde',
                  cartBody: 'Ekim faturası',
                  link: '/',
                  icon: <Icons360 />,
                  id: '2',
                },
                {
                  cartTitle: 'Ek paket Al',
                  link: '/',
                  icon: <IconsMobileTopUp />,
                  id: '3',
                },
                {
                  cartTitle: 'Otomatik Ödeme Talimatı Ver',
                  link: '/',
                  icon: <IconsReturn />,
                  id: '4',
                },
              ]}
              avatar={{ size: 'large', userName: 'Turgut' }}
              avatarUser={{
                userName: {
                  name: 'Turgut K',
                  nameColor: 'dark',
                  nameFontSize: 'medium',
                },
                userNumber: {
                  number: '5443858474',
                  numberColor: 'bluey-grey',
                  numberFontSize: 'small',
                },
                icon: {
                  visibility: false,
                },
              }}
            />
          ) : (
            <></>
          )}
        </div>
      )}

      {isMobile ? (
        <AtomIcon
          icon={<IconsMenu width={22} height={22} color="#fff" />}
          onClick={() => {
            setOpenMobileMenu(true);
            setOpenMegaMenu(false);
          }}
          className={classnames([styles['trkclAppActionItems__item']])}
        />
      ) : (
        <></>
      )}
    </div>
  );
};

export default ActionItems;
