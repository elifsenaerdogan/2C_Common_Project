import styles from './atom-header-counter.module.scss';
import classNames from 'classnames';
import { AtomHeaderCounterProps } from './types/header-counter-interfaces';
import { useEffect, useState } from 'react';
import { CounterText } from './types/header-counter-enum';

export function AtomHeaderCounter(props: AtomHeaderCounterProps) {
  const { counterShow = true, className, future } = props;

  const calculateTimeLeft = () => {
    const currentDate = new Date();
    const futureDate = new Date(future);
    const timeDifference = futureDate.getTime() - currentDate.getTime();

    if (timeDifference > 0) {
      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
      );
      const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

      return { days, hours, minutes, seconds };
    }

    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => {
      clearInterval(countdownInterval);
    };
  }, [future]);

  const parentDivClasses = classNames(styles['a-trkclParentDiv']);
  const counterClasses = classNames(styles['a-trkclAppCounter']);
  const colorClasses = classNames(
    'text-captions-regular',
    styles['a-trkclAppCounter--color']
  );

  return (
    <div className={parentDivClasses}>
      {counterShow && timeLeft.days > 0 ? (
        <div className={counterClasses}>
          <div>{timeLeft.days}</div>
          <div className={colorClasses}>{CounterText.DAY}</div>
        </div>
      ) : (
        <></>
      )}
      {counterShow && timeLeft.hours > 0 ? (
        <div className={counterClasses}>
          <div>{timeLeft.hours}</div>
          <div className={colorClasses}>{CounterText.HOUR}</div>
        </div>
      ) : (
        <></>
      )}
      {counterShow && timeLeft.minutes > 0 ? (
        <div className={counterClasses}>
          <div>{timeLeft.minutes}</div>
          <div className={colorClasses}>{CounterText.MINUTE}</div>
        </div>
      ) : (
        <></>
      )}
      {counterShow && timeLeft.seconds > 0 ? (
        <div className={counterClasses}>
          <div>{timeLeft.seconds}</div>
          <div className={colorClasses}>{CounterText.SECOND}</div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}

export default AtomHeaderCounter;
