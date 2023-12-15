import { Dropdown } from 'antd';
import styles from './languages.module.scss';
import { MenuProps } from 'antd/lib/menu';
import { IconsArrowLarge } from '@others/icons';
import { DropdownTrigger } from '@others/enums/antdComponentsProps';

export interface PropTypes extends MenuProps {
  languageOptions: MenuProps['items'];
}

const LanguagesMobil = (props: PropTypes) => {
  const { languageOptions } = props;

  return (
    <div className={styles.trkcllAppwrapper}>
      <div className={styles.trkcllAppmobileContainer}>
        <strong>Dil Tercihi</strong>
        <Dropdown
          menu={{ items: languageOptions }}
          trigger={[DropdownTrigger.CLICK]}
        >
          <a onClick={(e) => e.preventDefault()}>
            <div className={styles.trkcllAppFlexContainer}>
              Türkçe{' '}
              <IconsArrowLarge
                width="15"
                height="15"
                className={styles.trkcllAppArrowDown}
              />
            </div>
          </a>
        </Dropdown>
      </div>
    </div>
  );
};

export default LanguagesMobil;
