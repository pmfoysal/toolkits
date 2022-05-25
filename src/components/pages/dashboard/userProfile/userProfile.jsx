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
import isLink from '@validations/isLink';
import pmaxios from '@middlewares/pmaxios';
import {toast} from 'react-toastify';
import isNumber from '@validations/isNumber';

export default function UserProfile() {
   const {user, dbUser, role} = useContext(StoreContext);
   const [firstName, setFirstName] = useState('');
   const [lastName, setLastName] = useState('');
   const [location, setLocation] = useState('');
   const [email, setEmail] = useState('');
   const [image, setImage] = useState('');
   const [phone, setPhone] = useState('');
   const [linkedin, setLinkedin] = useState('');
   const [education, setEducation] = useState('');
   const [edit, setEdit] = useState(false);
   const [disable, setDisable] = useState(true);

   function inputHandler(setter) {
      return function (event) {
         setter(event.target.value);
      };
   }

   function resetForm() {
      setFirstName(user?.displayName?.split(' ')[0] || '');
      setLastName(user?.displayName?.split(' ')[1] || '');
      setEmail(user?.email || '');
      setLocation(dbUser?.location || '');
      setImage(user?.photoURL || '');
      setPhone(dbUser?.phone || '');
      setEducation(dbUser?.education || '');
      setLinkedin(dbUser?.linkedin || '');
   }

   function editHandler() {
      setEdit(current => !current);
      resetForm();
   }

   function detectChange() {
      const fNameN = firstName !== user?.displayName?.split(' ')[0];
      const lNameN = lastName !== user?.displayName?.split(' ')[1];
      const phoneN = phone !== dbUser?.phone;
      const imageN = image !== dbUser?.image;
      const locationN = location !== dbUser?.location;
      const linkedinN = linkedin !== dbUser?.linkedin;
      const educationN = education !== dbUser?.education;
      const test3 = fNameN || lNameN || phoneN || locationN;
      const test4 = imageN || linkedinN || educationN;

      return test3 || test4;
   }

   const data = {
      name: `${firstName} ${lastName}`,
      email,
      phone,
      image,
      linkedin,
      location,
      education,
   };

   function saveHandler() {
      setDisable(true);
      const allOk = detectChange();
      const linkedinOk = linkedin ? isLink(linkedin, 'Linkedin') : true;
      const imageOk = image ? isLink(image, 'Photo Url') : true;
      const phoneOk = phone ? isNumber(phone, 'Phone Number') : true;

      if (allOk && linkedinOk && imageOk && phoneOk) {
         const tId = toast.loading('Please Wait! Updating Your Profile Information...');
         pmaxios
            .put(`/user/${email}`, data)
            .then(res => {
               if (res?.data?.acknowledged) {
                  toast.update(tId, {
                     render: 'Your Profile Updated Successfully!',
                     type: 'success',
                     isLoading: false,
                     autoClose: 3000,
                  });
               }
            })
            .catch(error => {
               toast.update(tId, {
                  render: error.message,
                  type: 'error',
                  isLoading: false,
                  autoClose: 3000,
               });
            });
      }
   }

   useEffect(() => {
      if (edit) setDisable(!detectChange());
      else setDisable(true);
   }, [firstName, lastName, phone, image, location, linkedin, education, edit]);

   useEffect(() => {
      resetForm();
   }, [user, dbUser]);

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
            <Inputbox name='email address' type='email' value={email} readOnly={true} />
            <Inputbox name='phone number' type='tel' value={phone} readOnly={!edit} handler={inputHandler(setPhone)} />
            <Inputbox name='photo url' type='url' value={image} readOnly={!edit} handler={inputHandler(setImage)} />
            <Inputbox name='location' type='text' value={location} readOnly={!edit} handler={inputHandler(setLocation)} />
            <Inputbox name='linkedin url' type='url' value={linkedin} readOnly={!edit} handler={inputHandler(setLinkedin)} />
            <Inputbox name='education' type='text' value={education} readOnly={!edit} handler={inputHandler(setEducation)} />
            <ProfileButtons>
               <Button name={edit ? 'cancel' : 'edit'} round neutral handler={editHandler} medium />
               <Button name='save' round medium disabled={disable} handler={saveHandler} />
            </ProfileButtons>
         </UserProfileForm>
      </UserProfileContainer>
   );
}
