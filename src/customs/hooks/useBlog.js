import {useQuery} from 'react-query';
import pmaxios from '@middlewares/pmaxios';

export default function useBlog(id) {
   return useQuery(['blog', id], async () => {
      const {data} = await pmaxios.get(`/blog/${id}`);
      return data;
   });
}
