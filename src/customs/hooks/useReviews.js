import {useQuery} from 'react-query';
import pmaxios from '@middlewares/pmaxios';

export default function useReviews() {
   return useQuery('reviews', async () => {
      const {data} = await pmaxios.get('/reviews');
      return data;
   });
}
