import React from 'react';
import MainContainer from '@shared/mainContainer';
import {BackdropContainer} from './backdrop.styled';

export default function Backdrop({children}) {
   return (
      <BackdropContainer>
         <MainContainer>{children}</MainContainer>
      </BackdropContainer>
   );
}
