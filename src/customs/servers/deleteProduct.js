import {toast} from 'react-toastify';
import pmaxios from '@middlewares/pmaxios';

export default function deleteProduct(id) {
   pmaxios
      .delete(`/product/${id}`)
      .then(res => {
         if (res?.data?.acknowledged) {
            toast.success('Product Deleted Successfully From Database');
         }
      })
      .catch(error => {
         toast.error(error.message);
      });
}
