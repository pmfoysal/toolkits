import {Icon} from '@iconify/react';
import avatar from '@icons/user.svg';
import React, {useState} from 'react';
import userSignout from 'customs/auth/userSignout';
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
import {useLocation} from 'react-router-dom';

export default function UserIcon({user, role}) {
   const admin = role === 'admin';
   const {pathname} = useLocation();
   const [active, setActive] = useState(false);

   function setClassName(link) {
      return pathname === link ? 'active' : '';
   }

   function clickHandler() {
      setActive(current => !current);
   }

   return (
      <UserIconContainer>
         <UserIconImage src={user?.photoURL || avatar} alt='user' onClick={clickHandler} />
         {active && (
            <UserIconWindow>
               <UserWindowImage src={user?.photoURL || avatar} alt='user' />
               <UserWindowName>{user?.displayName || 'unknown'}</UserWindowName>
               <UserWindowRole>{role}</UserWindowRole>
               <UserWindowLinks>
                  <UserWindowLink to='/dashboard' className={setClassName('/dashboard')}>
                     <Icon icon='ic:round-dashboard' />
                     dashboard
                  </UserWindowLink>
                  <UserWindowLink to='/dashboard/profile' className={setClassName('/dashboard/profile')}>
                     <Icon icon='fa:user-circle-o' />
                     my profile
                  </UserWindowLink>
                  <UserWindowLink to='/dashboard/manage/orders' className={setClassName('/dashboard/manage/orders')}>
                     <Icon icon='bi:cart-check-fill' />
                     {admin ? 'manage orders' : 'my orders'}
                  </UserWindowLink>
                  <UserWindowLink to='/dashboard/manage/reviews' className={setClassName('/dashboard/manage/reviews')}>
                     <Icon icon='fa6-solid:file-pen' />
                     {admin ? 'manage reviews' : 'my reviews'}
                  </UserWindowLink>
                  {admin && (
                     <UserWindowLink to='/dashboard/manage/products' className={setClassName('/dashboard/manage/products')}>
                        <Icon icon='fa-solid:cart-arrow-down' />
                        manage products
                     </UserWindowLink>
                  )}
                  <UserWindowButton onClick={userSignout}>
                     <Icon icon='fa:sign-out' />
                     signout
                  </UserWindowButton>
               </UserWindowLinks>
            </UserIconWindow>
         )}
      </UserIconContainer>
   );
}
