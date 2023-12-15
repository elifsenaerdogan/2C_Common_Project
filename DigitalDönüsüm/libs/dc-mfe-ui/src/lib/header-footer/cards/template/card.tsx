import { CardProps } from '@others/interfaces';
import styles from './card.module.scss';
import { Card as CardTemplate } from 'antd';

const Card = (props: CardProps) => {
  const { children } = props;
  return (
    <CardTemplate
      bordered={false}
      className={`${styles.trkclAppCard}`}
      {...props}
    >
      {children}
    </CardTemplate>
  );
};

export default Card;
