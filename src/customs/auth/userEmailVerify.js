import {toast} from 'react-toastify';
import auth from '@configs/firebase.config';

export default function userEmailVerify() {
   const tId = toast.loading('Please Wait! Sending Password Reset Email...');
   sendEmailVerification(auth.currentUser).then(() => {
      toast.update(tId, {
         render: 'Your Account Verification Email Sent Successfully!',
         type: 'success',
         isLoading: false,
         autoClose: 3000,
      });
   });
}
