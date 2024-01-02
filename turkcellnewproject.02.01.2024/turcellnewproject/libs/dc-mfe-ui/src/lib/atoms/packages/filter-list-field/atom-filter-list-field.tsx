import { AtomIcon } from '../../icon/atom-icon';
import styles from './atom-filter-list-field.module.scss';
import { AtomFilterListFieldProps } from './types/filter-interfaces';
import classNames from 'classnames';
import { IconsClose, IconsFilter } from '@others/icons';
import useMobile from '@others/hooks/useMobile';
import { useEffect, useState } from 'react';

export function AtomFilterListField(props: AtomFilterListFieldProps) {
  const {
    selectedFilterText,
    filterText,
    cleanFilterText,
    onClick,
    mobileText,
  } = props;
  const isMobile = useMobile();
  const [filter, setFilter] = useState(false);
  const [filterLength, setFilterLength] = useState<number | "" | null>(null);

  const parentDivClasses = classNames(styles['a-trkclAppFilter']);
  const closeIcon = classNames(styles['a-trkclAppFilter__closeIcon']);
  const selectedFilter = classNames(styles['a-trkclAppFilter__selectedFilter']);
  const filterArea = classNames(styles['a-trkclAppFilter__filterArea']);
  const filterContainer = classNames(
    styles['a-trkclAppFilter__filterContainer']
  );
  const titleText = classNames(styles['a-trkclAppFilter__titleText']);
  const cleanFilter = classNames(styles['a-trkclAppFilter__cleanFilter']);
  const mobileParenDivClasses = classNames(
    'text-body-small',
    styles['a-trkclAppFilterMobile']
  );
  const mobile_text = classNames(
    'text-body-small',
    styles['a-trkclAppFilterMobile__mobileText']
  );
  const mobileIcon = classNames(
    'text-body-small',
    styles['a-trkclAppFilterMobile__mobileIcon']
  );
  const iconNumber = classNames(styles['a-trkclAppFilterMobile__iconNumber']);
  const iconNumber1 = classNames(styles['a-trkclAppFilterMobile__iconNumber1']);
  const iconNumber2 = classNames(styles['a-trkclAppFilterMobile__iconNumber2']);

  useEffect(() => {
    if (filterText && filterText.length > 0) {
      setFilterLength(filterText.length);
    } else {
      setFilterLength("");
    }
  }, [filterText]);
  
  return (
    <div>
      {isMobile ? (
        <div className={mobileParenDivClasses}>
          <div className={mobile_text}>{mobileText}</div>
          <div className={iconNumber}>
            <AtomIcon
              className={mobileIcon}
              icon={<IconsFilter height={24} width={24} color="#5f6b76" />}
            />
            <div className={iconNumber1}>
              <div className={iconNumber2}>{filterLength}</div>
            </div>
          </div>
        </div>
      ) : (
        <div className={parentDivClasses}>
          <div className={filterContainer}>
            <span className={titleText}>{selectedFilterText}</span>
            {filterText.map((el, index) => (
              <div key={index} className={filterArea} onClick={onClick}>
                <div className={selectedFilter}>{el?.text}</div>
                <AtomIcon className={closeIcon} icon={<IconsClose />} />
              </div>
            ))} 
          </div>
          <div className={cleanFilter} onClick={onClick}>
            <div>{cleanFilterText}</div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AtomFilterListField;
