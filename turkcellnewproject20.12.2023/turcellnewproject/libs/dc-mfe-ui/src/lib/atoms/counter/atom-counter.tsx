import { Statistic } from 'antd';
import { useEffect, useState } from 'react';
import styles from './atom-counter.module.scss';
import classNames from 'classnames';
import { CounterProps } from './types/counter-interfaces';

const { Countdown } = Statistic;

export function AtomCounter(props: CounterProps) {
  const { className, onCompleted, timer, onRestart, title } = props;
  const [times, setTimes] = useState(new Date().getTime() + timer * 60000);
  const [res, setRes] = useState(0);

  useEffect(() => {
    if (onRestart) {
      setTimes(new Date().getTime() + timer * 60000);
      setRes(new Date().getTime() + timer * 60000);
    }
  }, [onRestart, timer]);

  const handleCompleted = () => {
    onCompleted && onCompleted(true);
  };

  return (
    <Countdown
      className={classNames(styles['a-trkclApp-countdown'], className)}
      title={title}
      key={res}
      value={times}
      format="mm:ss"
      onFinish={handleCompleted}
    />
  );
}
export default AtomCounter;
