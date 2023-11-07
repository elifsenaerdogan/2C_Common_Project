import classnames from 'classnames';
import { useState } from 'react';
import Base from '@others/interfaces/base-props';
import {
  NavFirstPage,
  NavSecondPage,
  SwitchButtons,
  NavHeaderMobile,
  NavProfile,
} from '..';
import { HeaderType } from '@others/enums/headerType';
import styles from './mobile-nav.module.scss';

export interface PropTypes extends Base {
  setOpenMobileMenu: (val: boolean) => void;
  openMobileMenu: boolean;
  statusType: HeaderType;
}
const MobilMenuWrapper = (props: PropTypes) => {
  const { setOpenMobileMenu, openMobileMenu, statusType } = props;

  const [activePage, setActivePage] = useState(1);
  const [categoryId, setCategoryId] = useState<string>('');
  const [subCategoryId, setSubCategoryId] = useState<string>('');

  const getCategoryIds = (categoryId: string, subCategoryId: string) => {
    setCategoryId(categoryId);
    setSubCategoryId(subCategoryId);
  };

  const mobileMenuWrapperClasses = classnames(
    [styles['trkcelAppMobilMenuWrapper']],
    {
      [styles['trkcelAppMobilMenuWrapper__opened']]: openMobileMenu,
    }
  );

  return (
    <div className={mobileMenuWrapperClasses}>
      <div>
        <div
          className={classnames([styles['trkcelAppMobilMenuWrapper__header']])}
        >
          <NavHeaderMobile setOpenMobileMenu={setOpenMobileMenu} />
        </div>
        <div
          className={classnames([styles['trkcelAppMobilMenuWrapper__body']])}
        >
          {activePage === 1 ? (
            <NavFirstPage
              onClick={getCategoryIds}
              setActivePage={setActivePage}
              activeCategory={categoryId}
            />
          ) : (
            <NavSecondPage
              activeSubCategory={subCategoryId}
              setActivePage={setActivePage}
            />
          )}
        </div>
      </div>
      <div
        className={classnames([styles['trkcelAppMobilMenuWrapper__footer']])}
      >
        <SwitchButtons
          activeStatus={statusType}
          className={classnames([
            styles['trkcelAppMobilMenuWrapper__footer--buttons'],
          ])}
        />
        <NavProfile
          userName={{
            name: 'Özgür Taşkan',
            nameColor: 'white',
          }}
          userNumber={{
            number: '0535 555 55 55',
            numberColor: 'bluey-grey',
          }}
          icon={{
            visibility: true,
            rotateDeg: 180,
          }}
        />
      </div>
    </div>
  );
};

export default MobilMenuWrapper;
