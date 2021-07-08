import React, { useState } from 'react';
import * as Styled from './Authentication.styles';
import { useAuth } from '../../global/AuthContext';
import { useHistory } from 'react-router';

const EnterUsernameForm = (props) => {
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const { updateUsername } = useAuth();
  const history = useHistory();
  const [inputValues, setInputValues] = useState({
    username: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setErrorMessage('');
      setLoading(true);
      await updateUsername(inputValues.username);
      history.push('/');
    } catch (error) {
      setErrorMessage(error.message);
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
    <Styled.Form formType={'signup'} onSubmit={handleSubmit} disabled={loading}>
      <Styled.FieldContainer>
        <Styled.Input
          type="text"
          formType={'signup'}
          placeholder=" "
          name="username"
          value={inputValues.username}
          onChange={handleChange}
          required
        ></Styled.Input>
        <Styled.Label>Choose your display name</Styled.Label>
      </Styled.FieldContainer>
      <Styled.Button type="submit" formType={'signup'}>
        INITIALIZE
      </Styled.Button>
      {errorMessage ? (
        <Styled.ErrorMessage>{errorMessage}</Styled.ErrorMessage>
      ) : null}
    </Styled.Form>
  );
};

export default EnterUsernameForm;
