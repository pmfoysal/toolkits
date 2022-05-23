import {toast} from 'react-toastify';
import auth from '@configs/firebase.config';
import {signInWithPopup} from 'firebase/auth';

export default function popupSignin(provider) {
   const tId = toast.loading('Please Wait! Connecting to The Server...');
   signInWithPopup(auth, provider)
      .then(result => {
         if (result.user.uid) {
            toast.update(tId, {
               render: 'You Have Successfully Signed in!',
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
