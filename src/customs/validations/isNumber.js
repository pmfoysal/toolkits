import {toast} from 'react-toastify';

export default function isNumber(value) {
   const newValue = value.replaceAll(/[ \-\+]+/g, '');
   if (!value) {
      toast.error('Please Provide a Phone Number!');
      return false;
   } else if (isNaN(newValue)) {
      toast.error('Please Provide a Valid Number!');
      return false;
   }
   return true;
}
