import React from 'react';

const Success = ({ title }) => {
  return <div>{title || 'no server'}</div>;
};

export const getServerSideProps = async () => {
  return {
    props: {
      title: 'Welcome to dc-mfe-tl-topup!',
    },
  };
};

export default Success;
