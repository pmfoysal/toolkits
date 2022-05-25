import {useQuery} from 'react-query';
import pmaxios from '@middlewares/pmaxios';

export default function useBlogs() {
   return useQuery('blogs', async () => {
      const {data} = await pmaxios.get('/blogs');
      return data;
   });
}
