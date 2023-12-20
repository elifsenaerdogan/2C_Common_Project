import styles from './atom-info.module.scss';
import { InfoProps } from './types/info-interfaces';
import classnames from 'classnames';
import { AtomImage } from '../../image/atom-image';
import hareler from '@others/assets/images/hareler.png';
import section from '@others/assets/images/section-icon-yeni-turkcellliler.png';
import sectionImage from '@others/assets/images/section-image-yeni-turkcellliler.webp';
import { useMobile } from '@others/hooks';

export function AtomInfo(props: InfoProps) {
  const { infoTitle, descriptionText } = props;
  const isMobile = useMobile();
  const infoClasses = classnames([styles['a-trcklAppInfo']]);
  const infoImage = classnames([styles['a-trcklAppInfo__infoImage']]);
  const phoneIcon = classnames([styles['a-trcklAppInfo__phoneIcon']]);
  const phoneImage = classnames([styles['a-trcklAppInfo__phoneImage']]);
  const infoMobileClasses = classnames([styles['a-trcklAppInfoMobile']]);
  const mobileIcon = classnames([styles['a-trcklAppInfoMobile__mobileIcon']]);
  return (
    <div>
      {isMobile ? (
        <div className={infoMobileClasses}>
          <div className={mobileIcon}>
            <AtomImage src={section} alt="section" />
          </div>
          <div>
            <div
              className={classnames([
                'text-head-bold-m',
                [styles['a-trcklAppInfoMobile__mobileInfoTitle']],
              ])}
            >
              {infoTitle}
            </div>
            <div
              className={classnames([
                'text-body-regular',
                [styles['a-trcklAppInfoMobile__mobileInfoText']],
              ])}
            >
              {descriptionText}
            </div>
          </div>
        </div>
      ) : (
        <div className={infoClasses}>
          <div>
            <div
              className={classnames([
                'text-head-bold-s',
                [styles['a-trcklAppInfo__infoTitle']],
              ])}
            >
              {infoTitle}
            </div>
            <div
              className={classnames([
                'text-captions-regular',
                [styles['a-trcklAppInfo__infoText']],
              ])}
            >
              {descriptionText}
            </div>
          </div>
          <div>
            <div className={phoneIcon}>
              <AtomImage src={section} alt="section" />
            </div>
            <div className={phoneImage}>
              <AtomImage src={sectionImage} alt="sectionImage" />
            </div>
            <AtomImage className={infoImage} src={hareler} alt="hareler" />
          </div>
        </div>
      )}
    </div>
  );
}

export default AtomInfo;
