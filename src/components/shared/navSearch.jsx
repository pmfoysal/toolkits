import React from 'react';
import Button from './button';
import {NavSearchContainer} from './navSearch.styled';

export default function NavSearch() {
   return (
      <NavSearchContainer>
         <input type='search' placeholder='search anything...' />
         <Button name='search' medium round neutral />
      </NavSearchContainer>
   );
}
