import Logo from './logo';
import UserIcon from './userIcon';
import NavLinks from './navLinks';
import NavSearch from './navSearch';
import NavButtons from './navButtons';
import React, {useContext, useState} from 'react';
import MainContainer from './mainContainer';
import {StoreContext} from '@contexts/storeProvider';
import {HeaderContainer, HeaderPart1, HeaderPart2} from './header.styled';
import HamIcon from 'components/extras/hamIcon';
import HamMenu from 'components/extras/hamMenu';

export default function Header() {
   const {user, role} = useContext(StoreContext);
   const [active, setActive] = useState(false);

   return (
      <HeaderContainer>
         <HeaderPart1>
            <MainContainer>
               <Logo />
               <HamIcon active={active} setActive={setActive} />
               <NavSearch />
               {user.uid ? <UserIcon user={user} role={role} main /> : <NavButtons main />}
            </MainContainer>
         </HeaderPart1>
         {active && <HamMenu user={user} role={role} />}
         <HeaderPart2>
            <MainContainer>
               <NavLinks />
            </MainContainer>
         </HeaderPart2>
      </HeaderContainer>
   );
}
