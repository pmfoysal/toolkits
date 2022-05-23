import {toast} from 'react-toastify';
import auth from '@configs/firebase.config';
import {createUserWithEmailAndPassword, updateProfile} from 'firebase/auth';
import userEmailVerify from './userEmailVerify';

export default function emailPassSignup(data) {
   const {email, password, image, name} = data;
   const tId = toast.loading('Please Wait! Connecting to The Server...');
   createUserWithEmailAndPassword(auth, email, password)
      .then(result => {
         if (result.user.uid) {
            toast.update(tId, {
               render: 'Account Created! Updating Your Profile Information...!',
            });
            userProfileUpdate(tId, image, name);
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

function userProfileUpdate(tId, image, name) {
   updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: image,
   })
      .then(() => {
         toast.update(tId, {
            render: 'Profile Updated! Sending Account Verification Email...',
         });
         userEmailVerify(tId, auth);
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
