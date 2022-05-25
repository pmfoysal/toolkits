import {useQuery} from 'react-query';
import pmaxios from '@middlewares/pmaxios';

export default function useOrders() {
   return useQuery('orders', async () => {
      const {data} = await pmaxios.get('/orders');
      return data;
   });
}
