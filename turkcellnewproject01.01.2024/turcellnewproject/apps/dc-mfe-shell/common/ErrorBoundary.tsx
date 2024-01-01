import React, { ReactNode } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useInjectStore } from '../services/base';
import { RootState } from '../pages/_app';

interface ErrorBoundaryProps {
  children?: ReactNode;
  statusCode: number;
}


const ErrorBoundary = ({ children, statusCode }: ErrorBoundaryProps) => {
  const dispatch=useDispatch()
  const state = useSelector((state:RootState)=>state)
  useInjectStore(dispatch,state.user)

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
