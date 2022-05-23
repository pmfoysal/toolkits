import React from 'react';
import {Link} from 'react-router-dom';
import logo from '@icons/logo-main.svg';
import signupImage from '@images/signup.svg';
import MainContainer from '@shared/mainContainer';
import {
   AuthContainer,
   AuthForm,
   AuthHead,
   AuthImage,
   AuthInputArea,
   AuthInputGroup,
   AuthLogo,
   AuthPara,
   AuthTitle,
} from '@shared/auth.styled';
import Inputbox from '@shared/inputbox';
import Button from '@shared/button';
import Checkbox from '@shared/checkbox';

export default function Signup() {
   return (
      <AuthContainer>
         <MainContainer>
            <AuthImage>
               <img src={signupImage} alt='signup' />
            </AuthImage>
            <AuthForm>
               <AuthLogo src={logo} alt='brand-logo' />
               <AuthHead>signup</AuthHead>
               <AuthTitle>create an account</AuthTitle>
               <AuthPara>
                  Already have an account? <Link to='/signin'>signin</Link>
               </AuthPara>
               <AuthInputArea>
                  <AuthInputGroup>
                     <Inputbox name='first name' holder='john' type='text' value='' />
                     <Inputbox name='last name' holder='doe' type='text' value='' />
                  </AuthInputGroup>
                  <Inputbox name='your email' holder='name@domain.com' type='email' value='' />
                  <Inputbox name='photo url' holder='https://example.com/user.jpg' type='url' value='' />
                  <Inputbox name='phone no' holder='+8801812345678' type='tel' value='' />
                  <Inputbox name='password' holder='********' type='password' value='' />
                  <Checkbox>
                     Accept our <Link to='/terms'>terms and conditions!</Link>
                  </Checkbox>
                  <Button name='signup' round />
               </AuthInputArea>
            </AuthForm>
         </MainContainer>
      </AuthContainer>
   );
}
