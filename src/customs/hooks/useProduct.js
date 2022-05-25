import {useQuery} from 'react-query';
import pmaxios from '@middlewares/pmaxios';

export default function useProduct(id) {
   return useQuery(['product', id], async () => {
      const {data} = await pmaxios.get(`/product/${id}`);
      return data;
   });
}
