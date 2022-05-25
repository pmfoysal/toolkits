import {useQuery} from 'react-query';
import pmaxios from '@middlewares/pmaxios';

export default function useProducts() {
   return useQuery('products', async () => {
      const {data} = await pmaxios.get('/products');
      return data;
   });
}
