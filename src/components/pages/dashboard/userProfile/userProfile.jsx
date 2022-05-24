import {StoreContext} from '@contexts/storeProvider';
import ImgLoader from '@shared/imgLoader';
import avatar from '@icons/user.svg';
import React, {useContext, useEffect, useState} from 'react';
import {
   ProfileButtons,
   ProfileInputGroup,
   UserProfileContainer,
   UserProfileEmail,
   UserProfileForm,
   UserProfileImage,
   UserProfileName,
   UserProfileRole,
} from './userProfile.styled';
import Inputbox from '@shared/inputbox';
import Button from '@shared/button';

export default function UserProfile() {
   const {user, role} = useContext(StoreContext);
   const [firstName, setFirstName] = useState(user?.displayName?.split(' ')[0]);
   const [lastName, setLastName] = useState(user?.displayName?.split(' ')[1]);
   const [location, setLocation] = useState('');
   const [email, setEmail] = useState(user?.email);
   const [image, setImage] = useState(user?.photoURL);
   const [phone, setPhone] = useState('');
   const [edit, setEdit] = useState(false);
   const [disable, setDisable] = useState(true);

   function inputHandler(setter) {
      return function (event) {
         setter(event.target.value);
      };
   }

   function resetForm() {
      setFirstName(user?.displayName?.split(' ')[0]);
      setLastName(user?.displayName?.split(' ')[1]);
      setLocation('');
      setImage(user?.photoURL);
      setPhone('');
   }

   function editHandler() {
      setEdit(current => !current);
      resetForm();
   }

   return (
      <UserProfileContainer>
         <UserProfileImage>
            <ImgLoader src={user?.photoURL || avatar} alt='user' />
         </UserProfileImage>
         <UserProfileName>{user?.displayName || 'unknown'}</UserProfileName>
         <UserProfileEmail>{user?.email}</UserProfileEmail>
         <UserProfileRole>
            role: <span>{role}</span>
         </UserProfileRole>
         <UserProfileForm>
            <ProfileInputGroup>
               <Inputbox name='first name' type='text' value={firstName} readOnly={!edit} handler={inputHandler(setFirstName)} />
               <Inputbox name='last name' type='text' value={lastName} readOnly={!edit} handler={inputHandler(setLastName)} />
            </ProfileInputGroup>
            <Inputbox name='email address' type='email' value={email} readOnly='true' />
            <Inputbox name='phone number' type='tel' value={phone} readOnly={!edit} handler={inputHandler(setPhone)} />
            <Inputbox name='photo url' type='url' value={image} readOnly={!edit} handler={inputHandler(setImage)} />
            <Inputbox name='location' type='text' value={location} readOnly={!edit} handler={inputHandler(setLocation)} />
            <ProfileButtons>
               <Button name={edit ? 'cancel' : 'edit'} round neutral handler={editHandler} medium />
               <Button name='save' round medium disabled={disable} />
            </ProfileButtons>
         </UserProfileForm>
      </UserProfileContainer>
   );
}
