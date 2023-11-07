import { Menu } from 'antd';
import styles from './languages.module.scss';
import { MenuProps } from 'antd/lib/menu';
import { languageDefaultOptions } from '@others/constants/footer/footer-constants';
import { Languages } from '@others/enums/footer';
import { MenuMode } from '@others/enums/antdComponentsProps';

export interface PropTypes extends MenuProps {
  languageOptions?: MenuProps['items'];
  defaultLanguage?: string;
}

const LanguagesWeb = (props: PropTypes) => {
  const { languageOptions, defaultLanguage } = props;
  const menuItems: MenuProps['items'] =
    languageOptions || languageDefaultOptions;

  return (
    <div className={styles.trkcllAppWrapper}>
      <Menu
        mode={MenuMode.HORIZONTAL}
        items={menuItems}
        defaultSelectedKeys={[defaultLanguage || Languages.TURKISH]}
        className={`text-body-regular ${styles.trkcllAppWebMenu}`}
      />
    </div>
  );
};

export default LanguagesWeb;
