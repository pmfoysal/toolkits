import NavButtons from '@shared/navButtons';
import NavLinks from '@shared/navLinks';
import UserIcon from '@shared/userIcon';
import React from 'react';
import {HamMenuContainer} from './hamMenu.styled';

export default function HamMenu({user, role}) {
   return (
      <HamMenuContainer>
         {user.uid && <UserIcon user={user} role={role} />}
         <NavLinks />
         {!user.uid && <NavButtons />}
      </HamMenuContainer>
   );
}
