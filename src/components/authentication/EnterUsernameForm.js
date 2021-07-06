import React from 'react'
import * as Styled from './Authentication.styles'

const EnterUsernameForm = (props) => {

  const { inputValues, errorMessage, handleChange, handleSubmitUsername, loading } = props;

  return (
    <Styled.Form formType={'signup'} onSubmit={handleSubmitUsername} disabled={loading}>
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
      {errorMessage ? <Styled.ErrorMessage>{errorMessage}</Styled.ErrorMessage> : null}
    </Styled.Form>
  )
}

export default EnterUsernameForm
