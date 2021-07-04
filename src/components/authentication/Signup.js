import React, { useState } from 'react';
import * as Styled from './Authentication.styles';
import { useAuth } from '../../global/AuthContext';
import { useHistory } from 'react-router';
// import { AuthProvider } from '../../contexts/AuthContext';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { signup } = useAuth();
  const history = useHistory();
  //Use this during testing

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      return setError('Passwords do not match');
    }

    try {
      setError('');
      setLoading(true);
      await signup(email, password, username);
      history.push('/dashboard');
    } catch (error) {
      setError(error.message);
    }

    setLoading(false);
  };

  return (
    <Styled.PageContainer>
      <Styled.Form
        formType={'signup'}
        onSubmit={handleSubmit}
        disabled={loading}
      >
        <Styled.Heading>FamGram</Styled.Heading>
        <Styled.FieldContainer>
          <Styled.Input
            type="text"
            formType={'signup'}
            placeholder=" "
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          ></Styled.Input>
          <Styled.Label>Username</Styled.Label>
        </Styled.FieldContainer>
        <Styled.FieldContainer>
          <Styled.Input
            type="email"
            formType={'signup'}
            placeholder=" "
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          ></Styled.Input>
          <Styled.Label>Email</Styled.Label>
        </Styled.FieldContainer>
        <Styled.FieldContainer>
          <Styled.Input
            type="password"
            formType={'signup'}
            placeholder=" "
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          ></Styled.Input>
          <Styled.Label>Password</Styled.Label>
        </Styled.FieldContainer>
        <Styled.FieldContainer>
          <Styled.Input
            type="password"
            formType={'signup'}
            placeholder=" "
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          ></Styled.Input>
          <Styled.Label>Confirm Password</Styled.Label>
        </Styled.FieldContainer>
        <Styled.Button type="submit" formType={'signup'}>
          SIGN UP
        </Styled.Button>
        <Styled.Text>
          Have an account?{' '}
          <Styled.RouteLink to="/login">Login</Styled.RouteLink>
        </Styled.Text>
        {error ? <Styled.ErrorMessage>{error}</Styled.ErrorMessage> : null}
      </Styled.Form>
    </Styled.PageContainer>
  );
};

export default Signup;
