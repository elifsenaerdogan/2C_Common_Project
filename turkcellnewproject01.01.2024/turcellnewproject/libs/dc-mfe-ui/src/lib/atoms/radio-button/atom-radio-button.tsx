import styles from './atom-radio-button.module.scss';
import { Divider, Radio } from 'antd';
import classnames from 'classnames';
import { RadioItemProps } from './types/radio-button-interfaces';

export const AtomRadioButton = (props: RadioItemProps) => {
  const {
    value,
    radioButtonName,
    wrapperClassName,
    currentCheckedValue,
    divider = false,
    element,
    onClick,
    ...rest
  } = props;
  const AtomRadioWrapperClasses = classnames(
    'text-body-bold',
    [styles['a-trkclAppRadioButton']],
    wrapperClassName
  );

  const radioButtonNameClasses = classnames(
    [styles['a-trkclAppRadioButton__name']],
    {
      [styles['a-trkclAppRadioButton__name--checked']]:
        currentCheckedValue === value,
    }
  );
  const handleOnClick = (e: any) => {
    onClick && onClick(e);
  };
  return (
    <Radio
      className={AtomRadioWrapperClasses}
      onClick={(e) => handleOnClick(e)}
      value={value}
      {...rest}
    >
      <div className={classnames([styles['a-trkclAppRadioButton__wrapper']])}>
        <div className={radioButtonNameClasses}>{radioButtonName}</div>
        {divider ? (
          <Divider
            type="vertical"
            className={classnames([styles['a-trkclAppRadioButton__divider']])}
          />
        ) : (
          <></>
        )}
        {element}
      </div>
    </Radio>
  );
};

export default AtomRadioButton;
