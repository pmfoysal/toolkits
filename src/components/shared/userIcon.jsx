import {Icon} from '@iconify/react';
import React, {useState} from 'react';
import {
   UserIconContainer,
   UserIconImage,
   UserIconWindow,
   UserWindowButton,
   UserWindowImage,
   UserWindowLink,
   UserWindowLinks,
   UserWindowName,
   UserWindowRole,
} from './userIcon.styled';

export default function UserIcon() {
   const [active, setActive] = useState(false);
   const admin = true;

   function clickHandler() {
      setActive(current => !current);
   }

   return (
      <UserIconContainer>
         <UserIconImage src='https://avatars.githubusercontent.com/u/79983010?v=4' alt='user' onClick={clickHandler} />
         {active && (
            <UserIconWindow>
               <UserWindowImage src='https://avatars.githubusercontent.com/u/79983010?v=4' alt='user' />
               <UserWindowName>foysal ahmmed</UserWindowName>
               <UserWindowRole>admin</UserWindowRole>
               <UserWindowLinks>
                  <UserWindowLink to='/dashboard'>
                     <Icon icon='ic:round-dashboard' />
                     dashboard
                  </UserWindowLink>
                  <UserWindowLink to='/dashboard/profile'>
                     <Icon icon='fa:user-circle-o' />
                     my profile
                  </UserWindowLink>
                  <UserWindowLink to='/dashboard/orders'>
                     <Icon icon='bi:cart-check-fill' />
                     {admin ? 'manage orders' : 'my orders'}
                  </UserWindowLink>
                  <UserWindowLink to='/dashboard/reviews'>
                     <Icon icon='fa6-solid:file-pen' />
                     {admin ? 'manage reviews' : 'my reviews'}
                  </UserWindowLink>
                  {admin && (
                     <UserWindowLink to='/dashboard/products'>
                        <Icon icon='fa-solid:cart-arrow-down' />
                        manage products
                     </UserWindowLink>
                  )}
                  <UserWindowButton>
                     <Icon icon='fa:sign-out' />
                     signout
                  </UserWindowButton>
               </UserWindowLinks>
            </UserIconWindow>
         )}
      </UserIconContainer>
   );
}
