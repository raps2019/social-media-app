import React from 'react';
import LoginForm from './LoginForm';
import * as Styled from './Authentication.styles';
import { pageContainerVariants } from './variants';


const Login = () => {
  return (
    <Styled.PageContainer
      variants={pageContainerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <LoginForm></LoginForm>
    </Styled.PageContainer>
  );
};

export default Login;
