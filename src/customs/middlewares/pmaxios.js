import axios from 'axios';

const pmaxios = axios.create({
   baseURL: 'https://pmphas12.herokuapp.com',
   headers: {
      authorization: `Bearer ${window.localStorage.getItem('userToken')}`,
   },
});

export default pmaxios;
