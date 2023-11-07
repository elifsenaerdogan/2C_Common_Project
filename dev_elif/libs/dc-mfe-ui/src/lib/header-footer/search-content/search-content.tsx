import { Col, Row } from 'antd';

import Base from '@others/interfaces/base-props';
import styles from './search-content.module.scss';
import SearchDropdown from '../search-dropdown/search-dropdown';
import mockData from '@others/dummy/mockData';
import { useEffect, useState } from 'react';
import ProductCard from '../cards/productCard/productCard';
import Tag from '../tag/tag';
import { productData } from '@others/dummy/cardData';
import { CardType } from '@others/enums/cardTypes';

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
  title?: string;
}
const SearchContent = (props: PropTypes) => {
  const [value, setValue] = useState('');
  const [data, setData] = useState<Array<{ label: any; value: any }>>([]);
  const [isListening, setIsListening] = useState(false);

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

  const { id, className = ' ', title = 'Hoş Geldiniz' } = props;
  return (
    <div
      className={`${styles.trkclAppSearchContentWrapper} ${className}`}
      id={id}
    >
      <Row>
        <Col
          span={12}
          offset={6}
          className={`text-head-bold-xl ${styles.trkclAppSearchTitleWrapper}`}
        >
          <span className={styles.trkclAppSearchTitle}>{title} </span>
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
              micClick={() => null}
              onSearch={(str: string) => setValue(str)}
              value={value}
              open={data.length > 0}
              inputPlaceholder={
                isListening
                  ? 'Dinleniyor ...'
                  : 'Size nasıl yardımcı olabiliriz ?'
              }
              options={data}
              searchSubInfo="Powered by Yaani"
              popupSubInfo="Tüm sonuçlar"
            />
          </div>

          <div className={styles.trkclAppSearchFastActions}>
            {[1, 2].map((item) => {
              return (
                <Tag
                  // tagVariant="trkcl_primary"
                  text={item % 2 === 0 ? 'Tl yükle' : 'Otomatik ödeme talimatı'}
                  key={item}
                />
              );
            })}
          </div>
          <div className={styles.trkclAppSearchPopularSection}>
            <h6 className={'text-body-large-bold'}>Şu anda popüler</h6>
            <div className={styles.trkclAppSearchPopularItems}>
              <div className={styles.trkclAppSearchPopularItem}>
                <ProductCard
                  productData={productData}
                  cardType={CardType.HORIZONTAL}
                />
              </div>
              <div className={styles.trkclAppSearchPopularItem}>
                <ProductCard
                  productData={productData}
                  cardType={CardType.HORIZONTAL}
                />
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
};
export default SearchContent;
