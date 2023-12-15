import { ToolTipProps } from './types/tooltip-interfaces';
import { Tooltip as AntdToolTip } from 'antd';

export function Tooltip(props: ToolTipProps) {
  const { children, color = '#FFFFFF', ...rest } = props;

  return (
    <AntdToolTip
      color={color}
      overlayInnerStyle={{ padding: 0, borderRadius: 10 }}
      {...rest}
    >
      {children}
    </AntdToolTip>
  );
}

export default Tooltip;
