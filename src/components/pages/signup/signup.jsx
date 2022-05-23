import React, {useEffect, useState} from 'react';
import Button from '@shared/button';
import {Link} from 'react-router-dom';
import Inputbox from '@shared/inputbox';
import Checkbox from '@shared/checkbox';
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
import isString from '@validations/isString';
import isEmail from '@validations/isEmail';
import isPassword from '@validations/isPassword';
import isLink from '@validations/isLink';
import isNumber from '@validations/isNumber';
import emailPassSignup from 'customs/auth/emailPassSignup';

export default function Signup() {
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
