// import { useProductService } from 'apps/dc-mfe-shell/services/api/useProductServices'
import { useRouter } from 'next/router';
import React from 'react';

const Login = () => {
  // const {data}= useProductService()
  const router = useRouter();
  const { code } = router.query;

  console.log('router', code);
  return <div>Login</div>;
};

export default Login;
