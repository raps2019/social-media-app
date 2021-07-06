import React, { useState } from 'react';
import * as Styled from './Authentication.styles';
import { useAuth } from '../../global/AuthContext';
import { useHistory } from 'react-router';
import SignupForm from './SignupForm';
import EnterHandleForm from './EnterUsernameForm';
// import { AuthProvider } from '../../contexts/AuthContext';

const Signup = () => {
  const [inputValues, setInputValues] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [mode, setMode] = useState('signupForm');
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const { signup, updateUsername } = useAuth();
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (inputValues.password !== inputValues.confirmPassword) {
      return setErrorMessage('Passwords do not match');
    }

    try {
      setErrorMessage('');
      setLoading(true);
      await signup(inputValues.email, inputValues.password);
      setMode('enterUsernameForm');
    } catch (error) {
      setErrorMessage(error.message);
    }

    setLoading(false);
  };

  const handleChange = (e) => {
    const value = e.target.value;

    setInputValues({
      ...inputValues,
      [e.target.name]: value,
    });
  };

  const handleSubmitUsername = async (e) => {
    e.preventDefault();

    setLoading(true);

    updateUsername(inputValues.username)
      .then(() => {
        history.push('/');
      })
      .catch((error) => {
        setErrorMessage(error.message);
      })
      .finally(() => setLoading(false));

    // try {
    //   // setErrorMessage('');
    //   setLoading(true);
    //   await updateUsername(inputValues.username);
    //   setLoading(false);
    //   history.push('/');
    // } catch (error) {
    //   console.log(error.message);
    // }
  };

  return (
    <Styled.PageContainer>
      {mode === 'signupForm' ? (
        <SignupForm
          inputValues={inputValues}
          loading={loading}
          errorMessage={errorMessage}
          handleSubmit={handleSubmit}
          handleChange={handleChange}
        ></SignupForm>
      ) : (
        <EnterHandleForm
          inputValues={inputValues}
          errorMessage={errorMessage}
          handleChange={handleChange}
          handleSubmitUsername={handleSubmitUsername}
          loading={loading}
        ></EnterHandleForm>
      )}
    </Styled.PageContainer>
  );
};

export default Signup;
