import styles from './help-ribbon.module.scss';
import classnames from 'classnames';
import { useMobile } from '@others/hooks';
import { useEffect, useState } from 'react';
import mockData from '@others/dummy/mockData';
import { AtomIcon, AtomImage } from '@atoms';
import { IconsClose } from '@others/icons';
import selo from '@others/assets/images/selo.png';
import SearchDropdown from '../search-dropdown/search-dropdown';
import Arrow from '../tabs/arrows/index';
import icon from '@others/assets/images/header/help-ribbon-icon.webp';
import Link from 'next/link';
import Base from '@others/interfaces/base-props';
import { stringToKeyValuePairs } from '@others/helpers';
import { HelpRibbonData, HelpRibbonLink } from './types/help-ribbon-interfaces';

let timeoutId: any;

const fetchMock = (txt: string) => {
  const r = Math.floor(Math.random() * 1000) + 1;
  return new Promise((resolve) => {
    timeoutId = setTimeout(() => {
      const searchResults = mockData.filter((item) => {
        return (
          item.category.toLowerCase().includes(txt) ||
          item.text.toLowerCase().includes(txt)
        );
      });
      resolve(searchResults);
    }, r);
  });
};

export interface HelpRibbonProps extends Base {
  helpRibbonData?: string;
  wrapperClassName?: string;
  seloWrapperClass?: string;
  containerWrapperClass?: string;
  helpRibbonPageManager?: HelpRibbonData;
  getContainerVisibility?: (value: boolean) => void;
  username?: string;
}

export function HelpRibbon(props: HelpRibbonProps) {
  const {
    wrapperClassName,
    helpRibbonData = 'Yeni numara talebiniz ile ilgili merak ettikleriniz1,/,https://ffo3gv1cf3ir.merlincdn.net/SiteAssets/Bireysel/Yardim/alt-kategori-ikon/Tik-Diye-Turkcellli-Olmak.png?17735349480645!Yeni numara talebiniz ile ilgili merak ettikleriniz2,/,https://ffo3gv1cf3ir.merlincdn.net/SiteAssets/Bireysel/Yardim/alt-kategori-ikon/Tik-Diye-Turkcellli-Olmak.png?17735349480645!Yeni numara talebiniz ile ilgili merak ettikleriniz3,/,https://ffo3gv1cf3ir.merlincdn.net/SiteAssets/Bireysel/Yardim/alt-kategori-ikon/Tik-Diye-Turkcellli-Olmak.png?17735349480645!Yeni numara talebiniz ile ilgili merak ettikleriniz4,/,https://ffo3gv1cf3ir.merlincdn.net/SiteAssets/Bireysel/Yardim/alt-kategori-ikon/Tik-Diye-Turkcellli-Olmak.png?17735349480645',
    seloWrapperClass,
    containerWrapperClass,
    getContainerVisibility,
    helpRibbonPageManager,
    username = 'Yasin',
    ...rest
  } = props;

  const isMobile = useMobile();
  const [containerVisibility, setContainerVisibility] = useState(false);
  const [seloTextVisibility, setSeloTextVisibility] = useState(false);
  const [value, setValue] = useState('');
  const [data, setData] = useState<Array<{ label: any; value: any }>>([]);
  const [isListening, setIsListening] = useState(false);
  const [fadeSelo, setFadeSelo] = useState(false);

  //TODO : yardım ribbonu hangi sayfalarda gözükmeyecek

  let recognition: any;

  const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;

  if ('webkitSpeechRecognition' in window) {
    recognition = new SpeechRecognition();
    recognition.continuous = true;
    recognition.lang = 'tr-TR';
  }

  const handleMicrophone = () => {
    if (!recognition) return;
    recognition.onresult = (event: any) => {
      let finalTranscript = '';
      for (let i = event.resultIndex; i < event.results.length; i++) {
        const transcript = event.results[i][0].transcript;
        if (event.results[i].isFinal) {
          finalTranscript += transcript + '';
        }
      }
      setValue(finalTranscript);
      recognition.stop();
    };
  };

  useEffect(() => {
    handleMicrophone();
  });

  const handleToggleListening = () => {
    if (!recognition) return;
    if (isListening) {
      setIsListening(false);
      recognition.stop();
    } else {
      setIsListening(true);
      recognition.start();
    }
  };

  const searchData = async () => {
    clearTimeout(timeoutId);
    const result: any = await fetchMock(value.trim());
    setData(
      result.slice(0, 4).map((item: any) => {
        return {
          value: item.id,
          label: (
            <div className="resultItemWrapper">
              <div className="resultCategory">{item.category}</div>
              <div className="resultText">{item.text}</div>
            </div>
          ),
        };
      })
    );
  };
  useEffect(() => {
    if (value.length > 1) {
      if (isListening) {
        setIsListening(false);
      }
      searchData();
    } else {
      setData([]);
    }
  }, [value]);

  const triggerFade = () => {
    setFadeSelo((prevState) => {
      return !prevState;
    });
  };

  useEffect(() => {
    getContainerVisibility && getContainerVisibility(containerVisibility);
  }, [containerVisibility]);

  const helpRibbonLinks: HelpRibbonLink[] = stringToKeyValuePairs(
    helpRibbonData,
    '!',
    ','
  )?.map((item) => {
    console.log(item[2]);
    return {
      text: item[0],
      link: item[1],
      iconImageSrc:
        icon ||
        item[2] ||
        helpRibbonPageManager!['supportBox.default.category.image'],
    };
  });

  const wrapperClass = classnames(
    [styles['helpRibbon']],
    {
      [styles['helpRibbon__containerMobileVisibility']]:
        isMobile && containerVisibility,
    },
    wrapperClassName
  );

  const helpRibbonContainerWrapperClassnames = classnames(
    [styles['helpRibbon__container']],
    {
      [styles['moveUp']]: containerVisibility,
    },
    containerWrapperClass
  );

  const helpRibbonSeloClassnames = classnames(
    [styles['helpRibbon__selo']],
    {
      [styles['moveLeft']]: fadeSelo,
      [styles['moveRight']]: !fadeSelo,
    },
    seloWrapperClass
  );

  return (
    <div className={wrapperClass} {...rest}>
      {!containerVisibility ? (
        <div className={helpRibbonSeloClassnames} onClick={() => triggerFade()}>
          <div className={classnames([styles['helpRibbon__selo--textbox']])}>
            <Arrow
              type={seloTextVisibility ? 'right' : 'left'}
              wrapperClassName={classnames([
                styles['helpRibbon__selo--textbox-icon'],
              ])}
              onClick={() => {
                setSeloTextVisibility((prevState) => !prevState);
              }}
              arrowColor="#2855ac"
            />
            {seloTextVisibility ? (
              <span
                className={classnames('text-body-small-bold', [
                  styles['helpRibbon__selo--textbox-text'],
                ])}
                onClick={() => setContainerVisibility(true)}
              >
                {helpRibbonPageManager
                  ? helpRibbonPageManager['supportRibbon.text']
                  : ''}
              </span>
            ) : (
              <></>
            )}
          </div>
          <AtomImage
            src={selo}
            width={78}
            height={103}
            alt="selo-img"
            className={classnames('text-body-small-bold', [
              styles['helpRibbon__selo--selo'],
            ])}
          />
        </div>
      ) : (
        <div className={helpRibbonContainerWrapperClassnames}>
          <AtomIcon
            icon={<IconsClose width={18} height={18} />}
            className={classnames([styles['helpRibbon__container--iconClose']])}
            onClick={() => {
              setContainerVisibility(false);
              setSeloTextVisibility(true);
            }}
          />
          <div
            className={classnames([styles['helpRibbon__container--descBox']])}
          >
            <div
              className={classnames('text-body-bold', [
                styles['helpRibbon__container--descBox-title'],
              ])}
            >
              {helpRibbonPageManager
                ? helpRibbonPageManager['supportBox.title'].replace(
                    '{0}',
                    username || ''
                  )
                : ''}
            </div>
            <div
              className={classnames('text-body-regular', [
                styles['helpRibbon__container--descBox-desc'],
              ])}
            >
              {helpRibbonPageManager
                ? helpRibbonPageManager['supportBox.text']
                : ''}
            </div>

            <SearchDropdown
              onBlur={() => {
                setData([]);
              }}
              onFocus={() => {
                if (value.length > 0) {
                  searchData();
                }
              }}
              autoFocus
              onSelect={(item) => {
                const f = mockData.find((i) => i.id === item);
                alert('Selected' + f?.text);
              }}
              searchClick={() => {
                alert('arama');
                if (value.length > 0) {
                  alert('Arama işlemi ');
                }
              }}
              clearClick={() => {
                setValue('');
                clearTimeout(timeoutId);
                setData([]);
                recognition.stop();
              }}
              micClick={handleToggleListening}
              onSearch={(str: string) => setValue(str)}
              value={value}
              open={data.length > 0}
              inputPlaceholder={
                isListening
                  ? 'Dinleniyor ...'
                  : `${
                      helpRibbonPageManager
                        ? helpRibbonPageManager[
                            'supportBox.searchbox.placeholdertext'
                          ]
                        : ''
                    }`
              }
              options={data}
              searchSubInfo=""
              popupSubInfo="Tüm sonuçlar"
              inputClassName={classnames([
                styles['helpRibbon__container--descBox-microphoneInput'],
              ])}
            />
          </div>

          <div className={classnames([styles['helpRibbon__container--links']])}>
            {helpRibbonLinks?.map((item) => (
              <Link
                key={item.text}
                href={item.link}
                className={classnames([
                  styles['helpRibbon__container--links-link'],
                ])}
              >
                <div
                  className={classnames('text-head-regular-xs', [
                    styles['helpRibbon__container--links-link-text'],
                  ])}
                >
                  {item.text}
                </div>
                <div
                  className={classnames([
                    styles['helpRibbon__container--links-link-icon'],
                  ])}
                >
                  <AtomImage
                    width={50}
                    height={50}
                    src={item.iconImageSrc}
                    alt="link-icon"
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default HelpRibbon;
