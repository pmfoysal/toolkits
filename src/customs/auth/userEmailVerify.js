import {toast} from 'react-toastify';
import {sendEmailVerification} from 'firebase/auth';

export default function userEmailVerify(tId, auth) {
   sendEmailVerification(auth.currentUser).then(() => {
      toast.update(tId, {
         render: 'Your Account Verification Email Sent Successfully!',
         type: 'success',
         isLoading: false,
         autoClose: 3000,
      });
   });
}
