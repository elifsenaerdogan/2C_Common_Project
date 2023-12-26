import type { CountdownProps } from 'antd';

export interface CounterProps extends CountdownProps {
  title?: string;
  onCompleted?: (newVal: boolean) => void;
  timer: number;
  onRestart?: boolean;
  className?: string;
}
