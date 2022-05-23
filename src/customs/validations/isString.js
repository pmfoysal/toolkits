import {toast} from 'react-toastify';

export default function isString(value, name) {
   if (!value) {
      toast.error(`Please Provide a ${name}`);
      return false;
   }
   return true;
}
