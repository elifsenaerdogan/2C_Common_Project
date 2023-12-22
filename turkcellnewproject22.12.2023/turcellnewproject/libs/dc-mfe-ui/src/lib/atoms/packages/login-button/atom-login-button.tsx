import {AtomImage} from '../../image/atom-image';
import styles from './atom-login-button.module.scss';
import { AtomLoginButtonProps } from './types/login-interfaces';
import classnames from 'classnames';
import backgroundImg from '@others/assets/images/login-group.webp'
import trkcllImg from '@others/assets/images/kazandinekranlari-zeki-2-x.webp'
import {AtomButton} from '../../button/atom-button';

export function AtomLoginButton(props: AtomLoginButtonProps) {
  const { loginText, className, onClick } = props;
  const loginClasses = classnames([styles['a-trkclAppLogin']],className);
  const loginBackground = classnames([styles['a-trkclAppLogin__loginImg']]);
  const loginImage = classnames([styles['a-trkclAppLogin__loginImage']]);
  const textDiv = classnames([styles['a-trkclAppLogin__textDiv']]);
  const loginBtn = classnames([styles['a-trkclAppLogin__loginBtn']]);
  return (
    <div className={loginClasses}>
      <AtomImage src={backgroundImg} alt='loginBackgroundImg' className={loginBackground}  />
      <AtomImage src={trkcllImg} alt='login' className={loginImage}  />
      <div className={textDiv}>
        <div className={classnames('text-body-bold',[styles['a-trkclAppLogin__loginTitle']])}>{'Merhaba'}</div>
        <div className={classnames('text-captions-regular',[styles['a-trkclAppLogin__loginText']])}>{loginText}</div>
      </div>
      <AtomButton onClick={onClick} text='Üye Ol / Giriş Yap' className={loginBtn} />
    </div>
  );
}

export default AtomLoginButton;
