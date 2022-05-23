import Logo from './logo';
import UserIcon from './userIcon';
import NavLinks from './navLinks';
import NavSearch from './navSearch';
import NavButtons from './navButtons';
import React, {useContext} from 'react';
import MainContainer from './mainContainer';
import {StoreContext} from '@contexts/storeProvider';
import {HeaderContainer, HeaderPart1, HeaderPart2} from './header.styled';

export default function Header() {
   const {user, role} = useContext(StoreContext);

   return (
      <HeaderContainer>
         <HeaderPart1>
            <MainContainer>
               <Logo />
               <NavSearch />
               {user.uid ? <UserIcon user={user} role={role} /> : <NavButtons />}
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
