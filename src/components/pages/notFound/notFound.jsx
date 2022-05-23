import React from 'react';
import Button from '@shared/button';
import errorpage from '@images/errorpage.png';
import MainContainer from '@shared/mainContainer';
import {NotFoundContainer} from './notFound.styled';

export default function NotFound() {
   return (
      <NotFoundContainer>
         <MainContainer>
            <img src={errorpage} alt='error-404' />
            <Button name='back to home' round neutral link='/' />
         </MainContainer>
      </NotFoundContainer>
   );
}
