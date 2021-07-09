import React, { useState } from 'react';
import * as Styled from './Authentication.styles';
import { useAuth } from '../../global/AuthContext';
import { useHistory } from 'react-router-dom';
import { formContainerVariants, formChildVariants } from './variants';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setError('');
      setLoading(true);
      await login(email, password);
      history.push('/');
    } catch (error) {
      setError(error.message);
    }
  };


  return (
    <Styled.Form
      accentColor={'green'}
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
          accentColor={'green'}
          placeholder=" "
          onChange={(e) => setEmail(e.target.value)}
          required
        ></Styled.Input>
        <Styled.Label>Email</Styled.Label>
      </Styled.FieldContainer>
      <Styled.FieldContainer variants={formChildVariants}>
        <Styled.Input
          type="password"
          accentColor={'green'}
          placeholder=" "
          onChange={(e) => setPassword(e.target.value)}
          required
        ></Styled.Input>
        <Styled.Label>Password</Styled.Label>
      </Styled.FieldContainer>
      <Styled.Button
        type="submit"
        accentColor={'green'}
        variants={formChildVariants}
      >
        LOGIN
      </Styled.Button>
      <Styled.Text variants={formChildVariants}>
        Don't have an account?{' '}
        <Styled.RouteLink to="/signup">Sign up</Styled.RouteLink>
      </Styled.Text>
      <Styled.SmallText variants={formChildVariants}>
        Forgot Password?{' '}
        <Styled.RouteLink to="/reset-password">Reset</Styled.RouteLink>
      </Styled.SmallText>
      {error ? <Styled.ErrorMessage variants={formChildVariants}>{error}</Styled.ErrorMessage> : null}
    </Styled.Form>
  );
};

export default LoginForm;
