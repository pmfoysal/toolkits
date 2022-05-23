import {toast} from 'react-toastify';
import auth from '@configs/firebase.config';
import {sendPasswordResetEmail} from 'firebase/auth';

export default function userPassReset(email) {
   const tId = toast.loading('Please Wait! Sending Password Reset Email...');
   sendPasswordResetEmail(auth, email)
      .then(() => {
         toast.update(tId, {
            render: 'Your Password Reset Email Sent Successfully!',
            type: 'success',
            isLoading: false,
            autoClose: 3000,
         });
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
