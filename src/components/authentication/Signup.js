import React, { useState } from 'react';
import * as Styled from './Authentication.styles';
import SignupForm from './SignupForm';
import EnterHandleForm from './EnterUsernameForm';
// import { AuthProvider } from '../../contexts/AuthContext';

const Signup = () => {
  const [mode, setMode] = useState('signupForm');
  
  return (
    <Styled.PageContainer>
      {mode === 'signupForm' ? (
        <SignupForm
          mode={mode}
          setMode={setMode}
        ></SignupForm>
      ) : (
        <EnterHandleForm
        ></EnterHandleForm>
      )}
    </Styled.PageContainer>
  );
};

export default Signup;
