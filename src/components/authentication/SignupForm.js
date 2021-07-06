import React from 'react';
import * as Styled from './Authentication.styles';

const SignupForm = (props) => {
  const { handleChange, inputValues, loading, errorMessage, handleSubmit } =
    props;

  return (
    <Styled.Form formType={'signup'} onSubmit={handleSubmit} disabled={loading}>
      <Styled.Heading>FamGram</Styled.Heading>
      <Styled.FieldContainer>
        <Styled.Input
          type="email"
          formType={'signup'}
          placeholder=" "
          name="email"
          value={inputValues.email}
          onChange={handleChange}
          required
        ></Styled.Input>
        <Styled.Label>Email</Styled.Label>
      </Styled.FieldContainer>
      <Styled.FieldContainer>
        <Styled.Input
          type="password"
          formType={'signup'}
          placeholder=" "
          name="password"
          value={inputValues.password}
          onChange={handleChange}
          required
        ></Styled.Input>
        <Styled.Label>Password</Styled.Label>
      </Styled.FieldContainer>
      <Styled.FieldContainer>
        <Styled.Input
          type="password"
          formType={'signup'}
          placeholder=" "
          name="confirmPassword"
          value={inputValues.confirmPassword}
          onChange={handleChange}
          required
        ></Styled.Input>
        <Styled.Label>Confirm Password</Styled.Label>
      </Styled.FieldContainer>
      <Styled.Button type="submit" formType={'signup'}>
        SIGN UP
      </Styled.Button>
      <Styled.Text>
        Have an account? <Styled.RouteLink to="/login">Login</Styled.RouteLink>
      </Styled.Text>
      {errorMessage ? <Styled.ErrorMessage>{errorMessage}</Styled.ErrorMessage> : null}
    </Styled.Form>
  );
};

export default SignupForm;
