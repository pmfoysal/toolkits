import Button from '@shared/button';
import {Link} from 'react-router-dom';
import logo from '@icons/logo-main.svg';
import Inputbox from '@shared/inputbox';
import forgetImage from '@images/forget.svg';
import React, {useEffect, useState} from 'react';
import MainContainer from '@shared/mainContainer';
import userPassReset from 'customs/auth/userPassReset';
import {AuthContainer, AuthForm, AuthHead, AuthImage} from '@shared/auth.styled';
import {AuthInputArea, AuthLogo, AuthPara, AuthTitle} from '@shared/auth.styled';

export default function Forget() {
   const [email, setEmail] = useState('');
   const [disable, setDisable] = useState(true);

   function inputHandler(setter) {
      return function (event) {
         setter(event.target.value);
      };
   }

   function forgetHandler() {
      userPassReset(email);
      setDisable(true);
   }

   useEffect(() => {
      if (email) setDisable(false);
      else setDisable(true);
   }, [email]);

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
                  <Inputbox
                     name='your email'
                     holder='name@domain.com'
                     type='email'
                     value={email}
                     handler={inputHandler(setEmail)}
                  />
                  <Button name='send reset email' round disabled={disable} handler={forgetHandler} />
               </AuthInputArea>
            </AuthForm>
         </MainContainer>
      </AuthContainer>
   );
}
