import React from 'react';
import logo from '@icons/logo.svg';
import logomain from '@icons/logo-main.svg';
import {LogoContainer} from './logo.styled';
import {useLocation, useNavigate} from 'react-router-dom';

export default function Logo({main}) {
   const navigate = useNavigate();
   const {pathname} = useLocation();

   function clickHandler() {
      if (pathname !== '/') navigate('/');
   }

   return <LogoContainer src={main ? logomain : logo} alt='brand-logo' onClick={clickHandler} />;
}
