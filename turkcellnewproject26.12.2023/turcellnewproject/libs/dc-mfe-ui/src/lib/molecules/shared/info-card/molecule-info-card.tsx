import styles from './molecule-info-card.module.scss';
import classNames from 'classnames';
import { InfoCardProps } from './types/info-card-interfaces';

export function InfoCard(props: InfoCardProps) {
  const {className, text } = props;
  const InfoCardWrapperClassNames = classNames(styles['m-info-card'], className);
  
  return (
    <div className={InfoCardWrapperClassNames}>
      <h3>{text}</h3>
    </div>
  );
}

export default InfoCard;

