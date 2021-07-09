import React, { useState } from 'react';
import * as Styled from './Authentication.styles';
import SignupForm from './SignupForm';
import EnterHandleForm from './EnterUsernameForm';
import { pageContainerVariants } from './variants';
// import { AuthProvider } from '../../contexts/AuthContext';

const Signup = () => {
  const [mode, setMode] = useState('signupForm');

  return (
    <Styled.PageContainer
      variants={pageContainerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {mode === 'signupForm' ? (
        <SignupForm mode={mode} setMode={setMode}></SignupForm>
      ) : (
        <EnterHandleForm></EnterHandleForm>
      )}
    </Styled.PageContainer>
  );
};

export default Signup;
