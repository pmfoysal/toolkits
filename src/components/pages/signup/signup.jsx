import Button from '@shared/button';
import Inputbox from '@shared/inputbox';
import Checkbox from '@shared/checkbox';
import logo from '@icons/logo-main.svg';
import isLink from '@validations/isLink';
import isEmail from '@validations/isEmail';
import signupImage from '@images/signup.svg';
import isString from '@validations/isString';
import isNumber from '@validations/isNumber';
import isPassword from '@validations/isPassword';
import MainContainer from '@shared/mainContainer';
import {StoreContext} from '@contexts/storeProvider';
import emailPassSignup from 'customs/auth/emailPassSignup';
import React, {useEffect, useState, useContext} from 'react';
import {Link, Navigate, useLocation} from 'react-router-dom';
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

export default function Signup() {
   const {user} = useContext(StoreContext);
   const location = useLocation();
   const [firstName, setFirstName] = useState('');
   const [lastName, setLastName] = useState('');
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [image, setImage] = useState('');
   const [phone, setPhone] = useState('');
   const [disable, setDisable] = useState(true);

   function inputHandler(setter) {
      return function (event) {
         setter(event.target.value);
      };
   }

   function signupHandler() {
      const fNameOk = isString(firstName, 'First Name');
      const lNameOk = isString(lastName, 'Last Name');
      const emailOk = isEmail(email);
      const passOk = isPassword(password);
      const imageOk = isLink(image, 'Photo Url');
      const phoneOk = isNumber(phone, 'Phone Number');

      const test1 = fNameOk && lNameOk && emailOk;
      const test2 = passOk && imageOk && phoneOk;

      const data = {
         email,
         password,
         name: `${firstName} ${lastName}`,
         image,
         phone,
      };

      if (test1 && test2) {
         emailPassSignup(data);
         setDisable(true);
      }
   }

   useEffect(() => {
      if (firstName && lastName && email && phone && image && password) setDisable(false);
      else setDisable(true);
   }, [firstName, lastName, email, phone, image, password]);

   if (user?.uid) {
      const from = location?.state?.from?.pathname || '/';
      return <Navigate to={from} replace />;
   }

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
                     <Inputbox
                        name='first name'
                        holder='john'
                        type='text'
                        value={firstName}
                        handler={inputHandler(setFirstName)}
                     />
                     <Inputbox name='last name' holder='doe' type='text' value={lastName} handler={inputHandler(setLastName)} />
                  </AuthInputGroup>
                  <Inputbox
                     name='your email'
                     holder='name@domain.com'
                     type='email'
                     value={email}
                     handler={inputHandler(setEmail)}
                  />
                  <Inputbox
                     name='photo url'
                     holder='https://example.com/user.jpg'
                     type='url'
                     value={image}
                     handler={inputHandler(setImage)}
                  />
                  <Inputbox name='phone no' holder='+8801812345678' type='tel' value={phone} handler={inputHandler(setPhone)} />
                  <Inputbox
                     name='password'
                     holder='********'
                     type='password'
                     value={password}
                     handler={inputHandler(setPassword)}
                  />
                  <Checkbox>
                     Accept our <Link to='/terms'>terms and conditions!</Link>
                  </Checkbox>
                  <Button name='signup' round disabled={disable} handler={signupHandler} />
               </AuthInputArea>
            </AuthForm>
         </MainContainer>
      </AuthContainer>
   );
}
