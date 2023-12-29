import React from 'react';
import styles from './atom-rate.module.scss';
import classNames from 'classnames';
import { IRate } from './types/rate-interfaces';
import { Rate } from 'antd';

export function AtomRate(props: IRate) {
  const { tooltips = [], wrapperClassName } = props;
  const [value, setValue] = React.useState(Number);
  const wrapperClasses = classNames(
    styles['a-trkclAppRate'],
    wrapperClassName
  );
  return (
    <span className={wrapperClasses}>
      <Rate tooltips={tooltips} onChange={setValue} value={value} />
      {value ? (
        <span className="ant-rate-text">{tooltips[value - 1]}</span>
      ) : (
        ''
      )}
    </span>
  );
}

export default AtomRate;
