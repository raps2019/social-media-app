import React, { useState } from 'react';
import * as Styled from './Authentication.styles';
import { useAuth } from '../../global/AuthContext';
import { formContainerVariants, formChildVariants } from './variants';

const SignupForm = (props) => {
  const { mode, setMode } = props;

  const [inputValues, setInputValues] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const { signup } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (inputValues.password !== inputValues.confirmPassword) {
      return setErrorMessage('Passwords do not match');
    }

    try {
      setErrorMessage('');
      setLoading(true);
      await signup(inputValues.email, inputValues.password);
      setLoading(false);
      setMode('enterUsernameForm');
    } catch (error) {
      setErrorMessage(error.message);
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const value = e.target.value;

    setInputValues({
      ...inputValues,
      [e.target.name]: value,
    });
  };


  return (
    <Styled.Form
      accentColor={'blue'}
      onSubmit={handleSubmit}
      disabled={loading}
      variants={formContainerVariants}
      initial="hidden"
      animate="visible"
    >
      <Styled.Heading>ProjectOne</Styled.Heading>
      <Styled.FieldContainer variants={formChildVariants}>
        <Styled.Input
          type="email"
          accentColor={'blue'}
          placeholder=" "
          name="email"
          value={inputValues.email}
          onChange={handleChange}
          required
        ></Styled.Input>
        <Styled.Label>Email</Styled.Label>
      </Styled.FieldContainer>
      <Styled.FieldContainer variants={formChildVariants}>
        <Styled.Input
          type="password"
          accentColor={'blue'}
          placeholder=" "
          name="password"
          value={inputValues.password}
          onChange={handleChange}
          required
        ></Styled.Input>
        <Styled.Label>Password</Styled.Label>
      </Styled.FieldContainer>
      <Styled.FieldContainer variants={formChildVariants}>
        <Styled.Input
          type="password"
          accentColor={'blue'}
          placeholder=" "
          name="confirmPassword"
          value={inputValues.confirmPassword}
          onChange={handleChange}
          required
        ></Styled.Input>
        <Styled.Label>Confirm Password</Styled.Label>
      </Styled.FieldContainer>
      <Styled.Button
        type="submit"
        accentColor={'blue'}
        variants={formChildVariants}
      >
        SIGN UP
      </Styled.Button>
      <Styled.Text variants={formChildVariants}>
        Have an account?{' '}
        <Styled.RouteLink to="/login" variants={formChildVariants}>
          Login
        </Styled.RouteLink>
      </Styled.Text>
      {errorMessage ? (
        <Styled.ErrorMessage variants={formChildVariants}>{errorMessage}</Styled.ErrorMessage>
      ) : null}
    </Styled.Form>
  );
};

export default SignupForm;
