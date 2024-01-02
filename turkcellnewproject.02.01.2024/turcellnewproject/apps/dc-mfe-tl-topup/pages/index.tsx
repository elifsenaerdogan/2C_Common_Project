import styles from './index.module.scss';
import Steps from '../components/steps';
import AppLayout from '../layout';
import { useSelector } from 'react-redux';

export function Index() {
  const state = useSelector((state) => state);
  console.log('reduz', state);

  return (
    <AppLayout>
      <Steps />
    </AppLayout>
  );
}

export const getServerSideProps = async () => {
  return {
    props: {
      title: 'Welcome to dc-mfe-tl-topup!',
    },
  };
};

export default Index;
