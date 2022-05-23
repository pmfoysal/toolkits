import {toast} from 'react-toastify';

export default function isEmail(value) {
   if (!value) {
      toast.error('Please Provide a Email Address!');
      return false;
   }
   const regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
   if (!regex.test(value)) {
      toast.error('Please Provide a Valid Email Address!');
      return false;
   }
   return true;
}
