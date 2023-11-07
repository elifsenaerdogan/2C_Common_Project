import styles from './switch-buttons.module.scss';
import { HeaderType } from '@others/enums/headerType';
import classnames from 'classnames';
import { SwitchButtonsProps } from './types/switct-button-interface';
import { useRouter } from 'next/router';

export function SwitchButtons(props: SwitchButtonsProps) {
  const { activeStatus, className, ...rest } = props;

  const router = useRouter();

  const handleClick = (type: string) => {
    router.push(type);
  };

  const containerClasses = classnames('text-body-small-bold', [
    styles['trkclAppSwitchButtonContainer'],
    className,
  ]);

  const individualBtnClasses = classnames(
    [styles['trkclAppSwitchButtonContainer__button']],
    {
      [styles['trkclAppSwitchButtonContainer__button--active']]:
        activeStatus === HeaderType.INDIVIDUAL,
    }
  );

  const corporateBtnClasses = classnames(
    [styles['trkclAppSwitchButtonContainer__button']],
    {
      [styles['trkclAppSwitchButtonContainer__button--active']]:
        activeStatus === HeaderType.CORPORATE,
    }
  );

  return (
    <div className={containerClasses} {...rest}>
      <span className={individualBtnClasses} onClick={() => handleClick('/')}>
        {HeaderType.INDIVIDUAL.charAt(0).toUpperCase() +
          HeaderType.INDIVIDUAL.slice(1)}
      </span>
      <span
        className={corporateBtnClasses}
        onClick={() => handleClick('kurumsal')}
      >
        {HeaderType.CORPORATE.charAt(0).toUpperCase() +
          HeaderType.CORPORATE.slice(1)}
      </span>
    </div>
  );
}

export default SwitchButtons;
