import Base from '@others/interfaces/base-props';
import image from '@others/assets/images/illustration.png';
import styles from './login-content-container.module.scss';
import { Col, Row, Divider } from 'antd';
import Link from 'next/link';
import { AtomButton, AtomImage } from '@atoms';
import { useMobile } from '@others/hooks';
//import deviceModel from '@others/utils/find-device-model';

export interface PropTypes extends Base {
  onClick?: () => void;
}

const LoginContentContainer = (props: PropTypes) => {
  const { onClick, className, id } = props;
  const isMobile = useMobile();
  const device: string = 'samsung';
  const containerSize = isMobile ? 24 : 10;
  const loginContainerSize = isMobile ? 24 : 20;

  return (
    <div className={className} id={id}>
      <Row className={styles.trkclAppLoginContainer}>
        <Col
          className={`${styles.trkclAppLoginContainerLeft} ${
            isMobile ? styles.trkclAppHidden : ''
          } `}
          span={12}
        >
          <AtomImage
            src={image}
            alt="illustration"
            width={348}
            height={204}
            className={styles.trkclAppLoginContainerLeftImg}
          />
          <Row>
            <div className={styles.trkclAppLoginContainerLeftDescWrapper}>
              <Col offset={2} className={styles.trkclAppLoginContainerLeftDesc}>
                <div
                  className={`${styles.trkclAppLoginContainerLeftDescTitle} text-head-bold-s`}
                >
                  {['İhtiyacınız olan her şey dijitalde.'].map((item) => (
                    <span key={item}>
                      {item}
                      <br />
                    </span>
                  ))}
                </div>
                <p
                  className={` ${styles.trkclAppLoginContainerLeftDescText} text-body-small`}
                >
                  Hattınızla ilgili tüm işlemlere, ayarlara ve dijitale özel
                  cazip tekliflere kolaylıkla ulaşın, zamandan kazanın.
                </p>
              </Col>
            </div>
          </Row>
        </Col>
        <Col
          span={2}
          className={` ${isMobile ? styles.trkclAppHidden : ''} `}
        ></Col>
        <Col
          className={`${styles.trkclAppLoginContainerRight}`}
          span={containerSize}
        >
          <h2
            className={`${styles.trkclAppLoginContainerRightTitle} text-head-bold-l `}
          >
            Giriş
          </h2>
          <Row>
            <Col
              span={loginContainerSize}
              className={styles.trkclAppLoginContainerRightDesc}
            >
              <p
                className={`${styles.trkclAppLoginContainerRightDescText} text-body-small`}
              >
                Aşağıdaki yöntemlerden biriyle giriş yapabilirsiniz.
              </p>
              <p
                className={`${styles.trkclAppLoginContainerRightDescError} text-body-small`}
              ></p>

              <div className={styles.trkclAppLoginContainerRightContent}>
                <div
                  className={styles.trkclAppLoginContainerRightContentQr}
                  style={{ display: isMobile ? 'none' : 'block' }}
                >
                  <AtomImage
                    src={image}
                    alt="illustration"
                    width={348}
                    height={204}
                  />
                </div>
                <div className={styles.trkclAppLoginContainerRightContentDesc}>
                  <span
                    className={`text-body-bold ${styles.trkclAppLoginContainerRightContentDescDow}`}
                  >
                    Turkcell Uygulamasını İndir
                  </span>
                  <span className={'text-body-small'}>
                    Turkcell ve Superonline işlemlerinizi en hızlı ve kolay
                    şekilde mobil uygulamamızdan yapabilir, size özel GB, hediye
                    ve indirim fırsatlarını yakalayabilirsiniz.
                  </span>
                </div>

                <div style={{ display: isMobile ? 'block' : 'none' }}>
                  {device === 'Apple' && <div>samsung</div>}
                </div>
              </div>
              <Divider
                className={`text-body-large-bold ${styles.trkclAppLogißnContainerRightOrDivider}`}
                orientation="center"
              >
                <span style={{ color: `#fff` }}>veya</span>
              </Divider>

              <AtomButton
                variant="secondary"
                onClick={onClick}
                type="default"
                style={{ marginBottom: '2rem', marginTop: '1rem' }}
                text="Giriş Yap / Üye Ol"
                className={`text-body-bold ${styles.trkclAppLoginContainerLoginBtn} `}
              />

              <Divider
                className={`${styles.trkclAppLoginContainerRightDescDivider} `}
              />
              <Link
                href={'https://isturkcellonline.turkcell.com.tr'}
                className={`${styles.trkclAppLoginContainerRightDescNavigate} text-captions-bold `}
              >
                Kurumsal Yetkili Girişi
              </Link>
            </Col>
            <Col
              span={4}
              className={` ${isMobile ? styles.trkclAppHidden : ''} `}
            />
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default LoginContentContainer;
