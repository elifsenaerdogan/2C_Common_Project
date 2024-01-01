import React, { ReactNode } from 'react';
// import { useInjectStore } from '../services/base';
// import { useDispatch, useSelector } from 'react-redux';

interface ErrorBoundaryProps {
  children?: ReactNode;
  statusCode: number;
}

const ErrorBoundary = ({ children, statusCode }: ErrorBoundaryProps) => {
  // const dispatch=useDispatch()
  // const user = useSelector((state)=>state)
  // console.log('user: ', user)
  // useInjectStore(dispatch,user)

  if (statusCode)
    switch (statusCode) {
      case 500:
        return <div>500 Error</div>;
      case 503:
        return <div>503 Error</div>;
      default:
        return <div>404 Error</div>;
    }

  return <>{children}</>;
};

export default ErrorBoundary;
