import {toast} from 'react-toastify';

export default function isNumber(value, name) {
   const newValue = value.replaceAll(/[ \-\+]+/g, '');
   if (!value) {
      toast.error(`Please Provide a ${name}!`);
      return false;
   } else if (isNaN(newValue)) {
      toast.error(`Please Provide a Valid ${name}!`);
      return false;
   }
   return true;
}
