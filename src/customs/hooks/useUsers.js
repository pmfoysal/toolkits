import {useQuery} from 'react-query';
import pmaxios from '@middlewares/pmaxios';

export default function useUsers() {
   return useQuery('users', async () => {
      const {data} = await pmaxios.get('/users');
      return data;
   });
}
