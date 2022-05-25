import {useQuery} from 'react-query';
import pmaxios from '@middlewares/pmaxios';

export default function useUser(email) {
   return useQuery(['user', email], async () => {
      const {data} = await pmaxios.get(`/user/${email}`);
      return data;
   });
}
