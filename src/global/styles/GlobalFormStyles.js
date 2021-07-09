import styled from 'styled-components/macro';
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom';


export const GlobalForm = styled(motion.form)`
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
  border-top: 30px solid
    ${(props) => {
      if (props.accentColor === 'green') {
        return props.theme.greenAccentColor;
      } else if (props.accentColor === 'blue') {
        return props.theme.blueAccentColor;
      } else if (props.accentColor === 'orange') {
        return props.theme.orangeAccentColor;
      }
    }};

  @media screen and (max-width: 411px) {
    width: 100%;
    height: 100%;
    border-radius: 0px;
  }
`;

export const GlobalFormHeading = styled(motion.div)`
  font-size: 3em;
  font-family: 'Pacifico', cursive;
  `;

export const GlobalFormFieldContainer = styled(motion.div)`
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

  &:focus {
    border-bottom: 1px solid
      ${(props) => {
        if (props.accentColor === 'green') {
          return props.theme.greenAccentColor;
        } else if (props.accentColor === 'blue') {
          return props.theme.blueAccentColor;
        } else if (props.accentColor === 'orange') {
          return props.theme.orangeAccentColor;
        }
      }};
  }

  &:focus + label,
  &:not(:placeholder-shown) + label {
    transform: translateY(-15px);
    font-size: 1em;
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

export const GlobalFormText = styled(motion.p)`
  font-size: 0.8em;
  padding: 10px 0;
`;

export const GlobalFormSmallText = styled(motion.p)`
  font-size: 0.7em;
  padding: 10px 0;
`;

export const GlobalFormRouteLink = styled(Link)`
  text-decoration: none;
  border-bottom: 2px solid black;
  color: inherit;
`;

export const GlobalFormMessage = styled(motion.div)`
  font-size: 1em;
  padding: 10px 0;
  max-width: 100%;
  text-align: center;
  border-radius: 5px;
  padding: 3px;
`;

export const GlobalFormErrorMessage = styled(GlobalFormMessage)`
  background-color: ${(props) => props.theme.errorMessageBackground};
`;

