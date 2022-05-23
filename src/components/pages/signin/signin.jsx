import React from 'react';
import {Link} from 'react-router-dom';
import logo from '@icons/logo-main.svg';
import signinImage from '@images/signin.svg';
import MainContainer from '@shared/mainContainer';
import {
   AuthContainer,
   AuthForgetPara,
   AuthForm,
   AuthHead,
   AuthImage,
   AuthInputArea,
   AuthLogo,
   AuthOr,
   AuthPara,
   AuthTitle,
} from '@shared/auth.styled';
import Inputbox from '@shared/inputbox';
import Button from '@shared/button';
import SocialSignin from '@shared/socialSignin';
import Checkbox from '@shared/checkbox';

export default function Signin() {
   return (
      <AuthContainer>
         <MainContainer>
            <AuthImage>
               <img src={signinImage} alt='signin' />
            </AuthImage>
            <AuthForm>
               <AuthLogo src={logo} alt='brand-logo' />
               <AuthHead>signin</AuthHead>
               <AuthTitle>welcome back!</AuthTitle>
               <AuthPara>
                  Don't have an account? <Link to='/signup'>signup</Link>
               </AuthPara>
               <AuthInputArea>
                  <Inputbox name='your email' holder='name@domain.com' type='email' value='' />
                  <Inputbox name='password' holder='********' type='password' value='' />
                  <AuthForgetPara>
                     <Checkbox>Remember me!</Checkbox>
                     <Link to='/forget'>forget password?</Link>
                  </AuthForgetPara>
                  <Button name='signin' round />
               </AuthInputArea>
               <AuthOr>
                  <span className='line'></span>
                  <span className='text'>or</span>
                  <span className='line'></span>
               </AuthOr>
               <SocialSignin />
               <br />
               <br />
               <AuthPara>
                  <strong>note: </strong> By signing in, you agree our <Link to='/terms'>terms and conditions</Link>. Please read
                  our <Link to='/privacy'>privacy policy</Link> carefully!
               </AuthPara>
            </AuthForm>
         </MainContainer>
      </AuthContainer>
   );
}
