import React from 'react';
import Button from './button';
import {NavButtonsContainer} from './navButtons.styled';

export default function NavButtons() {
   return (
      <NavButtonsContainer>
         <Button name='signin' sub neutral round link='/signin' />
         <Button name='signup' round neutral link='/signup' />
      </NavButtonsContainer>
   );
}
