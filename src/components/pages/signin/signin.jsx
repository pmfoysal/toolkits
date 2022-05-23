import Button from '@shared/button';
import logo from '@icons/logo-main.svg';
import Inputbox from '@shared/inputbox';
import Checkbox from '@shared/checkbox';
import signinImage from '@images/signin.svg';
import SocialSignin from '@shared/socialSignin';
import MainContainer from '@shared/mainContainer';
import {StoreContext} from '@contexts/storeProvider';
import emailPassSignin from 'customs/auth/emailPassSignin';
import React, {useEffect, useState, useContext} from 'react';
import {Link, Navigate, useLocation} from 'react-router-dom';
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

export default function Signin() {
   const {user} = useContext(StoreContext);
   const location = useLocation();
   const [disable, setDisable] = useState(true);
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');

   function inputHandler(setter) {
      return function (event) {
         setter(event.target.value);
      };
   }

   function signinHandler() {
      emailPassSignin(email, password);
      setDisable(true);
   }

   useEffect(() => {
      if (email && password) setDisable(false);
      else setDisable(true);
   }, [email, password]);

   if (user?.uid) {
      const from = location?.state?.from?.pathname || '/';
      return <Navigate to={from} replace />;
   }

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
                  <Inputbox
                     name='your email'
                     holder='name@domain.com'
                     type='email'
                     value={email}
                     handler={inputHandler(setEmail)}
                  />
                  <Inputbox
                     name='password'
                     holder='********'
                     type='password'
                     value={password}
                     handler={inputHandler(setPassword)}
                  />
                  <AuthForgetPara>
                     <Checkbox>Remember me!</Checkbox>
                     <Link to='/forget'>forget password?</Link>
                  </AuthForgetPara>
                  <Button name='signin' round disabled={disable} handler={signinHandler} />
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
