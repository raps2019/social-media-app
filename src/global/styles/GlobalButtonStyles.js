import styled from 'styled-components/macro';
import { motion } from 'framer-motion'


export const GlobalButton = styled(motion.button)`
text-decoration: none;
background: #ffffff;
padding: 5px 20px;
border: 4px solid #494949;
border-radius: 10px;
box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
font-size: 14px;
cursor: pointer;
border: 4px solid
    ${(props) => {
      if (props.accentColor === 'green') {
        return props.theme.greenAccentColor;
      } else if (props.accentColor === 'blue') {
        return props.theme.blueAccentColor;
      } else if (props.accentColor === 'orange') {
        return props.theme.orangeAccentColor;
      } else if (props.accentColor === 'purple') {
        return props.theme.purpleAccentColor;
      }
    }};

  &:hover {
    transition: all 0.4s ease;
    background-color: ${(props) => {
      if (props.accentColor === 'green') {
        return props.theme.greenAccentColor;
      } else if (props.accentColor === 'blue') {
        return props.theme.blueAccentColor;
      } else if (props.accentColor === 'orange') {
        return props.theme.orangeAccentColor;
      } else if (props.accentColor === 'purple') {
        return props.theme.purpleAccentColor;
      }
    }};
    border-color: ${(props) => {
      if (props.accentColor === 'green') {
        return props.theme.greenAccentColor;
      } else if (props.accentColor === 'blue') {
        return props.theme.blueAccentColor;
      } else if (props.accentColor === 'orange') {
        return props.theme.orangeAccentColor;
      } else if (props.accentColor === 'purple') {
        return props.theme.purpleAccentColor;
      }
    }};
  }
`