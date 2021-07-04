import React, { useState } from 'react';
import LogoutButton from '../../utilities/LogoutButton';
import ToggleThemeButton from '../../utilities/ToggleThemeButton';
import * as Styled from './Initialize.styles';
import { useAuth } from '../../../global/AuthContext';
import { useHistory } from 'react-router';

const Initialize = () => {
  const { updateUsername } = useAuth();
  const [username, setUsername] = useState('');
  const [lodading, setLoading] = useState(false);
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // setError('');
      setLoading(true);
      await updateUsername(username);
      history.push('/dashboard');
    } catch (error) {
      console.log(error.message);
    }

    setLoading(false);
  };

  return (
    <Styled.PageContainer>
      <Styled.Form>
        <Styled.FieldContainer>
          <Styled.Input
            type="text"
            formType={'signup'}
            placeholder=" "
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          ></Styled.Input>
          <Styled.Label>Choose your display name</Styled.Label>
        </Styled.FieldContainer>
        <Styled.Button type="submit" formType={'signup'}>
          INITIALIZE
        </Styled.Button>
      </Styled.Form>
      <ToggleThemeButton></ToggleThemeButton>
    </Styled.PageContainer>
  );
};

export default Initialize;
