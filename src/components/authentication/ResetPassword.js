import React, { useState } from 'react';
import * as Styled from './Authentication.styles';
import { useAuth } from '../../global/AuthContext';

const ResetPassword = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false);
  const { resetPassword } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setError('')
      setMessage('')
      setLoading(true)
      await resetPassword(email)
      setMessage(`Reset password email sent to ${email}`)
    } catch(error) {
      setError(error.message)
    }
  };

  return (
    <Styled.PageContainer>
      <Styled.Form
        formType={'resetPassword'}
        onSubmit={handleSubmit}
        disabled={loading}
      >
        <Styled.Heading>FamGram</Styled.Heading>
        <Styled.FieldContainer>
          <Styled.Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            formType={'resetPassword'}
            placeholder=" "
            required
          ></Styled.Input>
          <Styled.Label>Email</Styled.Label>
        </Styled.FieldContainer>
        <Styled.Button type="submit" formType={'resetPassword'}>
          RESET
        </Styled.Button>
        <Styled.Text>
          Don't have an account?{' '}
          <Styled.RouteLink to="/signup">Signup</Styled.RouteLink>
        </Styled.Text>
        <Styled.SmallText>
          Back to <Styled.RouteLink to="/login">Login</Styled.RouteLink>
        </Styled.SmallText>
        {error ? <Styled.ErrorMessage>{error}</Styled.ErrorMessage> : null}
        {message ? <Styled.Message>{message}</Styled.Message> : null}
      </Styled.Form>
    </Styled.PageContainer>
  );
};

export default ResetPassword;
