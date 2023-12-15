import { Radio } from 'antd';
import React, { useEffect } from 'react';
import styles from './index.module.scss';
import classNames from 'classnames';
import { AtomRadioButton } from '@atoms';
import { PageTypeRadioButtonsTypes } from './types/index-interface';
import { RadioChangeEvent } from 'antd/lib';
import { HomePageEnums } from 'apps/dc-mfe-tl-topup/layout/types/index-enums';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentAmount, setCurrentType } from 'apps/dc-mfe-tl-topup/store';

const PageTypeRadioButtons = (props: PageTypeRadioButtonsTypes) => {
  const currentType = useSelector((state) => state.tlTopupAppSlice.currentType);

  const dispatch = useDispatch();

  const { pageData } = props;
  const [radioButtonValue, setRadioButtonValue] = React.useState(
    HomePageEnums.TL
  );
  // const [currentPage, setCurrentPage] = React.useState(HomePageEnums.TL);

  const currentPageValue = (item: any) => {
    dispatch(setCurrentType(item)); //sayfa tipini belirleyen fonk.
    // setCurrentPage(item);
  };

  const radioButtonOnChange = (e: RadioChangeEvent) => {
    setRadioButtonValue(e.target.value);
  };
  useEffect(() => {
    dispatch(setCurrentAmount(null)); //sayfa değiştiğinde varsa aktif price ı başa atan fonk.
  }, [currentType]);

  const pageTypeRadioButtonsClasses = classNames(
    styles['pageTypeRadioButtons']
  );
  const pageTypeRadioGroupClasses = classNames(
    styles['pageTypeRadioButtons__radioGroup']
  );
  const pageTypeRadioClasses = classNames('pageTypeRadioButtons__radio');

  return (
    <div className={pageTypeRadioButtonsClasses}>
      <Radio.Group
        onChange={radioButtonOnChange}
        value={radioButtonValue}
        className={pageTypeRadioGroupClasses}
      >
        {pageData?.map((item: any, key: number) => (
          <AtomRadioButton
            key={key}
            radioButtonName={item.radioButtonName}
            value={item.value}
            currentCheckedValue={radioButtonValue}
            onClick={() => currentPageValue(item.value)}
            wrapperClassName={pageTypeRadioClasses}
          />
        ))}
      </Radio.Group>
    </div>
  );
};

export default PageTypeRadioButtons;
