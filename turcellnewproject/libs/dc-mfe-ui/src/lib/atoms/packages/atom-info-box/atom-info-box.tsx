import styles from './atom-info-box.module.scss';
import classnames from 'classnames';
import { useMobile } from '@others/hooks';
import { AtomInfoBoxProps } from './types/info-box-interfaces';
import { AtomImage } from '../../image/atom-image';

export function AtomInfoBox(props: AtomInfoBoxProps) {
  const { infoElement, className } = props;
  const infoClasses = classnames(styles['a-trkclInfoBox'],className);
  const infoText = classnames(
    'text-captions-regular',
    styles['a-trkclInfoBox__infoText']
  );
  const imgDiv = classnames(
    'text-captions-regular',
    styles['a-trkclInfoBox__imgDiv']
  );
  return (
    <div>
      <div className={classnames('text-body-large-bold')}>
        Sadece dijitale özel avantajlar
      </div>
      <div className={infoClasses} onClick={infoElement?.onClick}>
        <div className={imgDiv}>
          <AtomImage src={infoElement?.src}  alt="res" width={29.3} height={28} />
        </div>
        <div className={infoText}>{infoElement?.advantageText}</div>
      </div>
    </div>
  );
}

export default AtomInfoBox;
