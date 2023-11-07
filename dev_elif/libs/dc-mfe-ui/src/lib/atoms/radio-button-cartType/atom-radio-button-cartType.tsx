import styles from './atom-radio-button-cartType.module.scss';
import { Radio } from 'antd';
import classnames from 'classnames';
import { RadioItemCartTypeProps } from './types/radio-button-cart-type-interfaces';

export const AtomRadioButtonCartType = (props: RadioItemCartTypeProps) => {
  const {
    value,
    wrapperClassName,
    currentCheckedValue,
    cart,
    yellowBackgroundCircle = true,
    packageCardshadow,
    position,
  } = props;

  const filteredProps = { ...props };
  delete filteredProps.wrapperClassName;
  delete filteredProps.yellowBackgroundCircle;

  const radioButtonWrapperClassname = classnames(
    'text-body-bold',
    [styles['a-trkclAppRadioButtonCartType']],
    {
      [styles['a-trkclAppRadioButtonCartType__checked']]:
        currentCheckedValue === value,
      [styles[`a-trkclAppRadioButtonCartType__${position}`]]:
        position && currentCheckedValue === value,
      [styles[`a-trkclAppRadioButtonCartType__desktopShadow`]]:
        packageCardshadow == true,
      [styles[`a-trkclAppRadioButtonCartType__mobileShadow`]]:
        packageCardshadow == false,
    },
    wrapperClassName
  );

  return (
    <Radio className={radioButtonWrapperClassname} {...filteredProps}>
      <div
        className={classnames([styles['a-trkclAppRadioButtonCartType__cart']])}
      >
        {cart}
        {yellowBackgroundCircle ? (
          <div
            className={classnames([
              styles['a-trkclAppRadioButtonCartType__circle'],
            ])}
          />
        ) : (
          <></>
        )}
        <div
          className={classnames([
            styles['a-trkclAppRadioButtonCartType__radioButton'],
          ])}
        ></div>
      </div>
    </Radio>
  );
};

export default AtomRadioButtonCartType;
