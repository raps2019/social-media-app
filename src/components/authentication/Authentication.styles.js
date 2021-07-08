import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';
import {
  GlobalForm,
  GlobalFormHeading,
  GlobalFormFieldContainer,
  GlobalFormInput,
  GlobalFormLabel,
  GlobalFormText,
  GlobalFormSmallText,
  GlobalFormMessage,
  GlobalFormErrorMessage,
  GlobalFormRouteLink,
} from '../../global/styles/GlobalFormStyles';
import { GlobalButton } from '../../global/styles/GlobalButtonStyles';
import { motion } from 'framer-motion';

export const PageContainer = styled(motion.div)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Form = styled(GlobalForm)``;

export const Heading = styled(GlobalFormHeading)``;

export const FieldContainer = styled(GlobalFormFieldContainer)``;

export const Input = styled(GlobalFormInput)``;

export const Label = styled(GlobalFormLabel)``;

export const Button = styled(GlobalButton)`
  margin: 10px 0;
`;

export const Text = styled(GlobalFormText)``;

export const SmallText = styled(GlobalFormSmallText)``;

export const RouteLink = styled(GlobalFormRouteLink)``;

export const Message = styled(GlobalFormMessage)``;

export const ErrorMessage = styled(GlobalFormErrorMessage)``;
