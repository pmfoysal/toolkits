import {toast} from 'react-toastify';

export default function isPassword(value) {
   const regex = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/;
   if (!value) {
      toast.error('Please Provide a Password!');
      return false;
   } else if (!regex.test(value)) {
      toast.error('Please Provide a Strong Password!');
      return false;
   }
   return true;
}
