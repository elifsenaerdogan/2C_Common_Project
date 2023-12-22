import styles from './molecule-profil-menu.module.scss';
import { MoleculeProfilMenuProps } from './types/profil-menu-interfaces';
import classNames from 'classnames';
import { IconArrowRight, IconsClose } from '@others/icons';
import { ProfilMenuCardEnum } from './types/profil-menu-enums';
import AtomButton from '../../atoms/button/atom-button';
import useMobile from '@others/hooks/useMobile';
import IconsHello from '@others/icons/IconsHello';
import Link from 'next/link';
import {
  AtomAvatar,
  AtomAvatarUserInfo,
  AtomIcon,
  AtomProfileMenuCart,
} from '@atoms';

export const MoleculeProfilMenu = (props: MoleculeProfilMenuProps) => {
  const {
    className,
    name,
    profilAction,
    onLogout,
    profilCart,
    avatar,
    avatarUser,
    closeProfileMenuVisibility,
  } = props;
  const isMobile = useMobile();
  const parentDivClasses = classNames(styles[`m-trkclAppProfilMenu`]);
  const helloClasses = classNames(
    'text-body-small',
    styles['m-trkclAppProfilMenu--helloName']
  );
  const actionCenterBtnClasses = classNames(
    styles['m-trkclAppProfilMenu__actionCenterBtnClasses']
  );

  return (
    <div className={className}>
      {isMobile ? (
        <></>
      ) : (
        <div className={classNames(styles['m-trkclAppProfil'])} />
      )}
      <div className={parentDivClasses}>
        {isMobile ? (
          <>
            <div className={classNames(styles['closeIcon'])}>
              <AtomIcon
                onClick={() => closeProfileMenuVisibility(false)}
                icon={<IconsClose />}
              />
            </div>
            <div className={classNames(styles['m-mobileNameDiv'])}>
              <AtomAvatar
                className={classNames(styles['m-mobileNameDiv__oval'])}
                size={avatar?.size}
                userName={avatar?.userName}
                notificationCount={avatar?.notificationCount}
                avatarImage={avatar?.avatarImage}
                displayImage={avatar?.displayImage}
                avatarBgColor={avatar?.avatarBgColor}
              />
              <AtomAvatarUserInfo
                userName={avatarUser?.userName}
                userNumber={avatarUser?.userNumber}
                icon={avatarUser?.icon}
              />
            </div>
          </>
        ) : (
          <div className={helloClasses}>
            <span>{`Merhaba ${name}`}</span>
            <IconsHello />
          </div>
        )}

        <div
          className={classNames(
            styles['m-trkclAppProfilMenu__profilMenuCards']
          )}
        >
          {profilCart?.map((el) => (
            <div key={el.id}>
              <AtomProfileMenuCart
                icon={el?.icon}
                link={el?.link}
                cartTitle={el?.cartTitle}
                cartBody={el?.cartBody}
                cartBottom={el?.cartBottom}
              />
            </div>
          ))}
        </div>
        <div
          className={classNames(styles['m-trkclAppProfilMenu__bracketDiv'])}
        />
        <div className={classNames(styles['m-trkclAppProfilMenu__link'])}>
          {profilAction?.map((el) => (
            <div className={actionCenterBtnClasses} key={el.text}>
              <Link className={classNames('text-body-regular')} href={el?.url}>
                <span>{el?.text}</span>
                <span>
                  {isMobile ? (
                    <AtomIcon icon={<IconArrowRight id="profilemenu" />} />
                  ) : (
                    <></>
                  )}
                </span>
              </Link>
            </div>
          ))}
          <div>
            <AtomButton
              className={classNames(
                styles['m-trkclAppProfilMenu__logoutBtnClasses']
              )}
              text={ProfilMenuCardEnum?.LOGOUT}
              variant="none"
              onClick={() => onLogout()}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoleculeProfilMenu;
