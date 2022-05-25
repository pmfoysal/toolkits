import {toast} from 'react-toastify';
import pmaxios from '@middlewares/pmaxios';

export default function addUserToDB(data) {
   pmaxios
      .put(`/user/${data?.email}`, data)
      .then(res => {})
      .catch(error => {
         toast.error(error.message);
      });
}
