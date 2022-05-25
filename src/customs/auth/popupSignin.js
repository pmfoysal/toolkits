import getToken from './getToken';
import {toast} from 'react-toastify';
import auth from '@configs/firebase.config';
import {signInWithPopup} from 'firebase/auth';
import addUserToDB from '@servers/addUserToDB';

export default function popupSignin(provider) {
   const tId = toast.loading('Please Wait! Connecting to The Server...');
   signInWithPopup(auth, provider)
      .then(result => {
         const email = result?.user?.email;
         const uid = result?.user?.uid;
         const phone = result?.user?.phoneNumber;
         const image = result?.user?.photoURL;
         const name = result?.user?.displayName;
         if (uid) {
            toast.update(tId, {
               render: 'You Have Successfully Signed in!',
               type: 'success',
               isLoading: false,
               autoClose: 3000,
            });
            getToken({name, email, phone, image});
            addUserToDB({name, email, phone, image});
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
