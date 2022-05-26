import React from 'react';
import Button from './button';
import {NavButtonsContainer} from './navButtons.styled';

export default function NavButtons({main}) {
   return (
      <NavButtonsContainer main={main}>
         <Button name='signin' sub neutral round link='/signin' />
         <Button name='signup' round neutral link='/signup' />
      </NavButtonsContainer>
   );
}
