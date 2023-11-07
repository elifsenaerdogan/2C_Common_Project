import { useState } from 'react';
import styles from './molecule-profil-menu.module.scss';
import { MoleculeProfilMenuProps } from './types/profil-menu-interfaces';
import classNames from 'classnames';
import { AtomProfileMenuCart } from '../../atoms/profile-menu-cart/atom-profile-menu-cart';
import {
  Icons360,
  IconsClose,
  IconsMobileTopUp,
  IconsReturn,
  IconsTechSpecs,
} from '@others/icons';
import { ProfilMenuCardEnum } from './types/profil-menu-enums';
import AtomButton from '../../atoms/button/atom-button';
import useMobile from '@others/hooks/useMobile'
import IconsHello from '@others/icons/IconsHello';
import ArrowRight from '@others/icons/IconArrowRight';

export function MoleculeProfilMenu(props: MoleculeProfilMenuProps) {
  const { className, settingBtnOnclick, actionBtnOnclick, name, show, number } = props;
  const isMobile = useMobile();
  const firstName = name.charAt(0).toUpperCase();
  const handleSettingsBtnOnClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => settingBtnOnclick && settingBtnOnclick(event);
  const handleActionBtnOnClick = (event: React.MouseEvent<HTMLButtonElement>) =>
    actionBtnOnclick && actionBtnOnclick(event);

  const [showState, setShowState] = useState<boolean>(show);
  const parentDivClasses = classNames(styles[`m-trkclAppProfilMenu`]);
  const helloClasses = classNames(
    'text-body-small',
    styles['m-trkclAppProfilMenu--helloName']
  );
  const actionCenterBtnClasses = classNames(
    styles['m-trkclAppProfilMenu__actionCenterBtnClasses']
  );
  const settingsBtnClasses = classNames(
    styles['m-trkclAppProfilMenu__settingsBtnClasses']
  );
  const logoutBtnClasses = classNames(
    styles['m-trkclAppProfilMenu__logoutBtnClasses']
  );
  return (
    <div>
      {showState ? (
        <>
          {isMobile ? (
            <></>
          ) : (
            <div className={classNames(styles['m-trkclAppProfil'])} />
          )}
          <div className={parentDivClasses}>
            {isMobile ? (
              <>
                <div className={classNames(styles['closeIcon'])}>
                  <IconsClose />
                </div>
                <div className={classNames(styles['m-mobileNameDiv'])}>
                  <div className={classNames(styles['m-mobileNameDiv__oval'])}>
                    <span>{firstName}</span>
                  </div>
                  <div
                    className={classNames(
                      styles['m-mobileNameDiv__nameAndNumberDiv']
                    )}
                  >
                    <span className={classNames('text-body-small')}>
                      {name}
                    </span>
                    <span
                      className={classNames(
                        'text-captions-regular',
                        styles['m-mobileNameDiv__nameAndNumberDiv--numberColor']
                      )}
                    >
                      {number}
                    </span>
                  </div>
                </div>
              </>
            ) : (
              <div className={helloClasses}>
                <span>{`Merhaba ${name}`}</span>
                <IconsHello />
              </div>
            )}

            <div>
              <AtomProfileMenuCart
                icon={<IconsTechSpecs />}
                link="/"
                cartTitle={ProfilMenuCardEnum?.TİTLE_1}
                className={classNames(
                  styles['m-trkclAppProfilMenu__profilMenuCardRight']
                )}
              />
              <AtomProfileMenuCart
                icon={<Icons360 />}
                link="/"
                cartTitle={ProfilMenuCardEnum?.TİTLE_2}
                className={classNames(
                  styles['m-trkclAppProfilMenu__profilMenuCardBottom']
                )}
              />
              <AtomProfileMenuCart
                icon={<IconsMobileTopUp />}
                link="/"
                cartTitle={ProfilMenuCardEnum?.TİTLE_3}
                className={classNames(
                  styles['m-trkclAppProfilMenu__profilMenuCardRight']
                )}
              />
              <AtomProfileMenuCart
                icon={<IconsReturn />}
                link="/"
                cartTitle={ProfilMenuCardEnum?.TİTLE_4}
              />
            </div>
            <div
              className={classNames(styles['m-trkclAppProfilMenu__bracketDiv'])}
            />
            <div>
              <AtomButton
                className={actionCenterBtnClasses}
                text={ProfilMenuCardEnum?.ACTİON_CENTER_TEXT}
                variant="none"
                onClick={handleActionBtnOnClick}
                icon={isMobile ? <ArrowRight /> : <></>}
              />
              <AtomButton
                className={
                  isMobile ? actionCenterBtnClasses : settingsBtnClasses
                }
                text={ProfilMenuCardEnum?.SETTİNGS}
                variant="none"
                onClick={handleSettingsBtnOnClick}
                icon={isMobile ? <ArrowRight /> : <></>}
              />
              <AtomButton
                className={logoutBtnClasses}
                text={ProfilMenuCardEnum?.LOGOUT}
                variant="none"
                onClick={() => setShowState(false)}
              />
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}

export default MoleculeProfilMenu;
