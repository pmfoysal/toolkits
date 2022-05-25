import {useQuery} from 'react-query';
import pmaxios from '@middlewares/pmaxios';

export default function useReview(id) {
   return useQuery(['review', id], async () => {
      const {data} = await pmaxios.get(`/review/${id}`);
      return data;
   });
}
