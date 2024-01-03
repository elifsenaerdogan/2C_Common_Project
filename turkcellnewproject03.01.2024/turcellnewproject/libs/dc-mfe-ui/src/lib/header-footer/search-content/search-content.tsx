import { Col, Row } from 'antd';
import Base from '@others/interfaces/base-props';
import styles from './search-content.module.scss';
import SearchDropdown from '../search-dropdown/search-dropdown';
import mockData from '@others/dummy/mockData';
import { useEffect, useState } from 'react';
import Tag from '../tag/tag';
import { useMobile } from '@others/hooks';
import { NavigationPageManager } from '../types/navigation-pagemanager';
import { searchTagsMobileSliderSettings } from '@others/constants/layout-shell/search-tags-mobile-slider-setting';
import Slider from '../tabs/tab';
import { stringToKeyValuePairs } from '@others/helpers';

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

export interface PropTypes extends Base {
  navigationPageManagerData: NavigationPageManager;
  searchTags: string;
}
const SearchContent = (props: PropTypes) => {
  const [value, setValue] = useState('');
  const [data, setData] = useState<Array<{ label: any; value: any }>>([]);
  const [isListening, setIsListening] = useState(false);
  const isMobile = useMobile();

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

  const {
    id,
    className = ' ',
    navigationPageManagerData,
    searchTags = '',
  } = props;

  const tagsData = stringToKeyValuePairs(searchTags, ';', ',')
    ?.map((value) => {
      return {
        text: value[0] || '',
        link: value[1] || '',
      };
    })
    ?.slice(0, -1);

  const tags = tagsData?.map((item) => {
    return (
      <span className={styles.trkclAppSearchFastActionsTagItem} key={item.text}>
        <Tag text={item.text} link={item.link} />
      </span>
    );
  });
  return (
    <div
      className={`${styles.trkclAppSearchContentWrapper} ${className}`}
      id={id}
    >
      <Row>
        <Col span={12} offset={6} className={styles.trkclAppSearchTitleWrapper}>
          <span className={`text-head-bold-l ${styles.trkclAppSearchTitle}`}>
            {navigationPageManagerData
              ? navigationPageManagerData[
                  'navigation.header.searchSection.loggedout.title'
                ]
              : ''}
          </span>
          <div>
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
              }}
              micClick={handleToggleListening}
              onSearch={(str: string) => setValue(str)}
              value={value}
              open={data.length > 0}
              inputPlaceholder={
                isListening
                  ? 'Dinleniyor ...'
                  : navigationPageManagerData
                  ? navigationPageManagerData[
                      'navigation.header.searchSection.placeholder.text'
                    ]
                  : ''
              }
              options={data}
              searchSubInfo={
                navigationPageManagerData
                  ? navigationPageManagerData[
                      'navigation.header.searchSection.poweredBy.text'
                    ]
                  : ''
              }
              popupSubInfo="Tüm sonuçlar"
            />
          </div>
          {!isMobile ? (
            <div className={styles.trkclAppSearchFastActions}>{tags}</div>
          ) : (
            <Slider
              tabsSettings={searchTagsMobileSliderSettings}
              tabsData={tags}
              tabsWrapperClassName={styles.trkclAppSearchFastActionsMobileTag}
            />
          )}
        </Col>
      </Row>
    </div>
  );
};
export default SearchContent;
