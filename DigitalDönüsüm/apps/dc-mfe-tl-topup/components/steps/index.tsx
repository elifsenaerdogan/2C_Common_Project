import { useSelector } from 'react-redux';
import Login from '../login-step';
import Payment from '../payment-step';
import SelectPackage from '../select-package-step';
import { AppStates } from '../../type-declarations/store';

const Steps = () => {
  const currentStep = useSelector(
    (state: AppStates) => state?.tlTopupAppSlice?.currentStep
  );

  switch (currentStep) {
    case 1:
      return <Login />;

    case 2:
      return <SelectPackage />;

    case 3:
      return <Payment />;

    default:
      return <Login />;
  }
};

export default Steps;
