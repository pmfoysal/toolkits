import {useQuery} from 'react-query';
import pmaxios from '@middlewares/pmaxios';

export default function useOrder(id) {
   return useQuery(['order', id], async () => {
      const {data} = await pmaxios.get(`/order/${id}`);
      return data;
   });
}
