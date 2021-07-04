import styled from 'styled-components/macro';
import { GlobalButton } from '../../../global/styles/GlobalStyle';
import {
  GlobalForm,
  GlobalFormHeading,
  GlobalFormFieldContainer,
  GlobalFormInput,
  GlobalFormLabel,
} from '../../../global/styles/FormStyles'

export const PageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Form = styled(GlobalForm)`
border-top: 30px solid ${ props => props.theme.purpleAccentColor};
/* border-top: 30px solid red; */
max-width: 600px;


`;

export const FieldContainer = styled(GlobalFormFieldContainer)``;

export const Input = styled(GlobalFormInput)`
  font-size: 20px;
  padding: 15px 0;

  &:focus + label,
  &:not(:placeholder-shown) + label {
    transform: translateY(-20px);
    font-size: 16px;
    font-weight: 700;
  }
`;

export const Label = styled(GlobalFormLabel)`
  font-size: 20px;
  /* transform: translateY(5px); */
`;

export const Button = styled(GlobalButton)``;