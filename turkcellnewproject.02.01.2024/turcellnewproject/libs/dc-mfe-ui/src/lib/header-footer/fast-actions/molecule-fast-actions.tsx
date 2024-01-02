import styles from './molecule-fast-actions.module.scss';
import {
  MenuLinkObject,
  FastActionsProps,
} from './types/fast-actions-interfaces';
import { AtomButton, AtomIcon, AtomPopularCard } from '@atoms';
import classnames from 'classnames';
import { useState } from 'react';
import Link from 'next/link';
import { IconsArrowLarge } from '@others/icons';
import { useMobile } from '@others/hooks';

export function MoleculeFastActions(props: FastActionsProps) {
  const {
    popularTransactionsTitle,
    allFastActionsTitle,
    popularTransactions,
    fastActions,
    style,
    onLinkPress,
    menuRef,
    refWidth,
    loginFn,
  } = props;
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const [sideMenuList, setSideMenuList] = useState<MenuLinkObject[]>([
    { url: '', text: '' },
  ]);
  const isMobile = useMobile(768);

  const quickTransactionsWrapperClassnames = classnames(
    styles['m-trkclAppFastActions']
  );
  const transactionsTitleClassnames = classnames(
    'text-body-small-bold',
    styles['m-trkclAppFastActions__title']
  );
  const popularTransactionsWrapperClassnames = classnames(
    styles['m-trkclAppFastActions__populars']
  );
  const bottomTextClassnames = classnames(
    'text-body-small',
    styles['m-trkclAppFastActions__bottomText']
  );
  const dividerClassnames = classnames(
    styles['m-trkclAppFastActions__divider']
  );
  const menuLinkWrapperClassnames = classnames(
    'text-body-regular',
    styles['m-trkclAppFastActions__link']
  );
  const shadowClassnames = classnames(
    styles['m-trkclAppFastActions__leftShadow']
  );

  const handleMouseEnter = (sideMenuList: MenuLinkObject[]) => {
    setSideMenuList(sideMenuList);
    setIsSubMenuOpen(true);
  };

  const handleMouseLeave = () => {
    setIsSubMenuOpen(false);
  };

  const handleSubMenuMouseEnter = () => {
    setIsSubMenuOpen(true);
  };

  const handleSubMenuMouseLeave = () => {
    setIsSubMenuOpen(false);
  };

  return (
    <div className={quickTransactionsWrapperClassnames}>
      <div ref={menuRef} style={style}>
        <span className={transactionsTitleClassnames}>
          {popularTransactionsTitle}
        </span>
        <div className={popularTransactionsWrapperClassnames}>
          {popularTransactions.map((i) => (
            <AtomPopularCard
              key={i.id}
              variant={i.variant}
              url={i.url}
              text={i.text}
              icon={i.icon}
            />
          ))}
        </div>
        <p
          style={{ marginBottom: '0.625rem' }}
          className={transactionsTitleClassnames}
        >
          {allFastActionsTitle}
        </p>
        {fastActions.map((i, index) => (
          <div key={i.text}>
            <div className={dividerClassnames} />
            <Link
              onClick={() => onLinkPress(i)}
              className={menuLinkWrapperClassnames}
              onMouseEnter={() => handleMouseEnter(i.sideMenu!)}
              onMouseLeave={handleMouseLeave}
              href={i.url}
            >
              <span>{i.text}</span>
              <span>
                <AtomIcon
                  icon={<IconsArrowLarge id="fast-actions-item" />}
                  style={{ marginRight: '0.5rem' }}
                />
              </span>
            </Link>
          </div>
        ))}
        <div className={dividerClassnames} />
        <p className={bottomTextClassnames}>
          Hattınızla ilgili tüm işlemleriniz için
        </p>
        <AtomButton
          onClick={loginFn}
          style={{ width: '100%' }}
          text={'Giriş Yap'}
          variant={'secondary'}
        />
      </div>
      {isSubMenuOpen && !isMobile && (
        <div
          onMouseEnter={handleSubMenuMouseEnter}
          onMouseLeave={handleSubMenuMouseLeave}
          className={shadowClassnames}
          style={{ left: refWidth + 20, minWidth: refWidth + 40 }}
        >
          {sideMenuList?.map((subMenuItem) => (
            <Link
              key={subMenuItem.text}
              onClick={() => onLinkPress(subMenuItem)}
              className={menuLinkWrapperClassnames}
              style={{
                flexDirection: 'column',
                justifyContent: 'unset',
                alignItems: 'unset',
                paddingTop: '1.25rem',
              }}
              href={subMenuItem.url}
            >
              <span style={{ marginBottom: '0.75rem', padding: '0 1.25rem' }}>
                {subMenuItem.text}
              </span>
              <div style={{ margin: 0 }} className={dividerClassnames} />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default MoleculeFastActions;
