import {toast} from 'react-toastify';
import pmaxios from '@middlewares/pmaxios';

export default function getToken(data) {
   pmaxios
      .post('/token', data)
      .then(res => {
         const token = res?.data?.token;
         if (token) {
            window.localStorage.setItem('userToken', JSON.stringify(token));
         }
      })
      .catch(error => toast.error(error.message));
}
