import React from 'react';
import ResetPasswordForm from './ResetPasswordForm';
import * as Styled from './Authentication.styles';
import { pageContainerVariants } from './variants';


const ResetPassword = () => {
  return (
    <Styled.PageContainer
      variants={pageContainerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <ResetPasswordForm></ResetPasswordForm>
    </Styled.PageContainer>
  );
};

export default ResetPassword;
