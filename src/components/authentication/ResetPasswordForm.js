import React, { useState } from 'react';
import * as Styled from './Authentication.styles';
import { useAuth } from '../../global/AuthContext';
import { formContainerVariants, formChildVariants } from './formVariants';

const ResetPasswordForm = () => {
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
      <Styled.Form
        accentColor={"orange"}
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            accentColor={"orange"}
            placeholder=" "
            required
          ></Styled.Input>
          <Styled.Label>Email</Styled.Label>
        </Styled.FieldContainer>
        <Styled.Button type="submit" accentColor={"orange"}
        variants={formChildVariants}>
          RESET
        </Styled.Button>
        <Styled.Text variants={formChildVariants}>
          Don't have an account?{' '}
          <Styled.RouteLink to="/signup">Signup</Styled.RouteLink>
        </Styled.Text>
        <Styled.SmallText
        variants={formChildVariants}>
          Back to <Styled.RouteLink to="/login">Login</Styled.RouteLink>
        </Styled.SmallText>
        {error ? <Styled.ErrorMessage>{error}</Styled.ErrorMessage> : null}
        {message ? <Styled.Message>{message}</Styled.Message> : null}
      </Styled.Form>
  );
};

export default ResetPasswordForm;
