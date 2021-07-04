import styled from 'styled-components/macro';

export const GlobalForm = styled.form`
  display: flex;
  gap: 15px;
  max-width: 400px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px 30px;
  border-radius: 15px;
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.15), 0 15px 12px rgba(0, 0, 0, 0.1);
  transition: all 150ms ease-out;
  /* border-top: 30px solid
  
    ${(props) => {
      if (props.formType === 'login') {
        return props.theme.greenAccentColor;
      } else if (props.formType === 'signup') {
        return props.theme.blueAccentColor;
      } else if (props.formType === 'resetPassword') {
        return props.theme.orangeAccentColor;
      }
    }}; */

  @media screen and (max-width: 411px) {
    width: 100%;
    height: 100%;
    border-radius: 0px;
  }
`;

export const GlobalFormHeading = styled.div`
  font-size: 40px;
  font-family: 'Pacifico', cursive;
`;

export const GlobalFormFieldContainer = styled.div`
  position: relative;
  margin: 15px 0;
  width: 300px;
  max-width: 100%;
`;

export const GlobalFormInput = styled.input`
  border: none;
  border-bottom: 1px solid black;
  padding: 10px 0;
  font-size: 14px;
  width: 100%;
  outline: none;
  background-color: inherit;
  transition: all 150ms ease-out;

  /* &:focus {
    border-bottom: 1px solid
    ${(props) => {
      if (props.formType === 'login') {
        return props.theme.greenAccentColor;
      } else if (props.formType === 'signup') {
        return props.theme.blueAccentColor;
      } else if (props.formType === 'resetPassword') {
        return props.theme.orangeAccentColor;
      }
    }}
  } */

  &:focus + label,
  &:not(:placeholder-shown) + label {
    transform: translateY(-15px);
    font-size: 12px;
    font-weight: 700;
  }
`;
export const GlobalFormLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  font-size: 14px;
  pointer-events: none;
  transform: translateY(15px);
  transition: all 150ms ease-out;
`;