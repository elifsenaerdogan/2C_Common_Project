import styles from './switch-buttons.module.scss';
import { HeaderType } from '@others/enums/headerType';
import classnames from 'classnames';
import { SwitchButtonsProps } from './types/switct-button-interface';
import { SwitchButtonsEnums } from './types/switch-button-enums';
import { useRouter } from 'next/router';

export function SwitchButtons(props: SwitchButtonsProps) {
  const { activeStatus = HeaderType.INDIVIDUAL, className, ...rest } = props;

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
        {SwitchButtonsEnums.Bireysel}
      </span>
      <span
        className={corporateBtnClasses}
        onClick={() => handleClick('/kurumsal')}
      >
        {SwitchButtonsEnums.Kurumsal}
      </span>
    </div>
  );
}

export default SwitchButtons;
