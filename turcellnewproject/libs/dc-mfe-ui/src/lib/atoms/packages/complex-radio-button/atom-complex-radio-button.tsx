import styles from './atom-complex-radio-button.module.scss';
import { Radio } from 'antd';
import classnames from 'classnames';
import { AtomComplexRadioButtonProps } from './types/complex-interfaces';
import { useMobile } from '@others/hooks';

export function AtomComplexRadioButton(props: AtomComplexRadioButtonProps) {
  const { radioButtonElement, onClick } = props;
  const isMobile = useMobile();
  const radioClasses = classnames([styles['a-trkclRadio']]);
  const radioMobieClasses = classnames([styles['a-trkclRadioMobile']]);
  return (
    <div>
      {isMobile ? (
        <Radio className={radioMobieClasses} onClick={onClick}>
          <div
            className={classnames(
              styles['a-trkclRadioMobile__mobileParentDiv']
            )}
          >
            <div
              className={classnames(
                'text-body-bold',
                styles['a-trkclRadio__sub']
              )}
            >
              {radioButtonElement?.subscription}
            </div>
            <div
              className={classnames(
                'text-body-regular',
                styles['a-trkclRadio__sub1']
              )}
            >
              {radioButtonElement?.commitment}
            </div>
          </div>
          <div
            className={classnames(
              styles['a-trkclRadioMobile__mobileRelativeDiv']
            )}
          >
            <span
              className={classnames(
                'text-body-regular',
                styles['a-trkclRadio__sub2']
              )}
            >
              {radioButtonElement?.firstMonth}
            </span>
            <span
              className={classnames(
                'text-head-bold-s',
                styles['a-trkclRadio__sub3']
              )}
            >
              {radioButtonElement?.firstMonthPrice}
            </span>
            <span
              className={classnames(
                'text-captions-bold',
                styles['a-trkclRadio__tl']
              )}
            >
              {'TL'}
            </span>
          </div>
          <div>
            <div
              className={classnames(
                styles['a-trkclRadioMobile__mobileRelativeDiv1']
              )}
            >
              <span
                className={classnames(
                  'text-body-regular',
                  styles['a-trkclRadio__sub2']
                )}
              >
                {radioButtonElement?.nextMonth}
              </span>
              <span
                className={classnames(
                  'text-head-bold-s',
                  styles['a-trkclRadioMobile__mobilePriceTwo']
                )}
              >
                {radioButtonElement?.nextMonthPrice}
              </span>
              <span
                className={classnames(
                  'text-captions-bold',
                  styles['a-trkclRadioMobile__mobileTl']
                )}
              >
                {'TL'}
              </span>
            </div>
          </div>
        </Radio>
      ) : (
        <div>
          <Radio className={radioClasses} onClick={onClick}>
            <div
              className={classnames([styles['a-trkclRadio__radioParentDiv']])}
            >
              <div>
                <div
                  className={classnames(
                    'text-body-bold',
                    styles['a-trkclRadio__sub']
                  )}
                >
                  {radioButtonElement?.subscription}
                </div>
                <div
                  className={classnames(
                    'text-body-small',
                    styles['a-trkclRadio__sub1']
                  )}
                >
                  {radioButtonElement?.commitment}
                </div>
              </div>
              <div className={classnames(styles['a-trkclRadio__relativeDiv'])}>
                <div>
                  <span
                    className={classnames(
                      'text-body-regular',
                      styles['a-trkclRadio__sub2']
                    )}
                  >
                    {radioButtonElement?.firstMonth}
                  </span>
                  <span
                    className={classnames(
                      'text-head-bold-l',
                      styles['a-trkclRadio__sub3']
                    )}
                  >
                    {radioButtonElement?.nextMonthPrice}
                  </span>
                  <span
                    className={classnames(
                      'text-captions-bold',
                      styles['a-trkclRadio__tl']
                    )}
                  >
                    {'TL'}
                  </span>
                </div>
                <div
                  className={classnames(styles['a-trkclRadio__nextMonthDiv'])}
                >
                  <span
                    className={classnames(
                      'text-body-regular',
                      styles['a-trkclRadio__sub2']
                    )}
                  >
                    {radioButtonElement?.nextMonth}
                  </span>
                  <span
                    className={classnames(
                      'text-body-bold',
                      styles['a-trkclRadio__sub']
                    )}
                  >
                    {radioButtonElement?.nextMonthPrice}
                  </span>
                  <span
                    className={classnames(
                      'text-body-bold',
                      styles['a-trkclRadio__nextMonthTl']
                    )}
                  >
                    {'TL'}
                  </span>
                </div>
              </div>
            </div>
          </Radio>
        </div>
      )}
    </div>
  );
}

export default AtomComplexRadioButton;
