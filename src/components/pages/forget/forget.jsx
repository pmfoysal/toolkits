import React from 'react';
import Button from '@shared/button';
import {Link} from 'react-router-dom';
import logo from '@icons/logo-main.svg';
import Inputbox from '@shared/inputbox';
import forgetImage from '@images/forget.svg';
import MainContainer from '@shared/mainContainer';
import {AuthContainer, AuthForm, AuthHead, AuthImage, AuthInputArea, AuthLogo, AuthPara, AuthTitle} from '@shared/auth.styled';

export default function Forget() {
   return (
      <AuthContainer>
         <MainContainer>
            <AuthImage>
               <img src={forgetImage} alt='forget' />
            </AuthImage>
            <AuthForm>
               <AuthLogo src={logo} alt='brand-logo' />
               <AuthHead>forget</AuthHead>
               <AuthTitle>reset your password!</AuthTitle>
               <AuthPara>
                  Remember your password? <Link to='/signin'>signin</Link>
               </AuthPara>
               <AuthInputArea>
                  <Inputbox name='your email' holder='name@domain.com' type='email' value='' />
                  <Button name='send reset email' round />
               </AuthInputArea>
            </AuthForm>
         </MainContainer>
      </AuthContainer>
   );
}
