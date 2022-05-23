import React from 'react';
import MainContainer from './mainContainer';
import {HeaderContainer, HeaderPart1, HeaderPart2} from './header.styled';
import Logo from './logo';
import NavSearch from './navSearch';
import NavButtons from './navButtons';
import NavLinks from './navLinks';

export default function Header() {
   return (
      <HeaderContainer>
         <HeaderPart1>
            <MainContainer>
               <Logo />
               <NavSearch />
               <NavButtons />
            </MainContainer>
         </HeaderPart1>
         <HeaderPart2>
            <MainContainer>
               <NavLinks />
            </MainContainer>
         </HeaderPart2>
      </HeaderContainer>
   );
}
