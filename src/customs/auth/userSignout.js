import {toast} from 'react-toastify';
import {signOut} from 'firebase/auth';
import auth from '@configs/firebase.config';

export default function userSignout() {
   signOut(auth)
      .then(() => {
         toast.warning('You Have Successfully Signed Out!');
      })
      .catch(error => {
         toast.error(error.message);
      });
}
