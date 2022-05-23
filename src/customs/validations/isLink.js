import {toast} from 'react-toastify';

export default function isLink(value, name) {
   if (!value) {
      toast.error(`Please Provide a ${name}!`);
      return false;
   }
   try {
      new URL(value);
   } catch {
      toast.error(`Please Provide a Valid ${name}!`);
      return false;
   }
   return true;
}
