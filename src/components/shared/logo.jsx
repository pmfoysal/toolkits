import React from 'react';
import logo from '@icons/logo.svg';
import {LogoContainer} from './logo.styled';
import {useLocation, useNavigate} from 'react-router-dom';

export default function Logo() {
   const navigate = useNavigate();
   const {pathname} = useLocation();

   function clickHandler() {
      if (pathname !== '/') navigate('/');
   }

   return <LogoContainer src={logo} alt='brand-logo' onClick={clickHandler} />;
}
