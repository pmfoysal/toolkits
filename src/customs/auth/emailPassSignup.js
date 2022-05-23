import {toast} from 'react-toastify';
import auth from '@configs/firebase.config';
import {createUserWithEmailAndPassword} from 'firebase/auth';

export default function emailPassSignup(data) {
   const {email, password, image, name} = data;
   const tId = toast.loading('Please Wait! Connecting to The Server...');
   createUserWithEmailAndPassword(auth, email, password)
      .then(result => {
         if (result.user.uid) {
            toast.update(tId, {
               render: 'Account Created! Now Updating Profile...!',
            });
            updateProfile(tId, image, name);
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

function updateProfile(tId, image, name) {
   getAccessToken(auth?.currentUser?.email);
}

function getAccessToken(email) {}
