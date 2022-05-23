import auth from '@configs/firebase.config';
import {signInWithEmailAndPassword} from 'firebase/auth';

export default function emailPassSignin(email, password) {
   const tId = toast.loading('Please Wait! Connecting to The Server...');
   signInWithEmailAndPassword(auth, email, password)
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
