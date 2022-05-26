import axios from 'axios';

const pmaxios = axios.create({
   baseURL: 'https://pmphas12.herokuapp.com',
});

pmaxios.interceptors.request.use(
   function (config) {
      if (!config?.headers?.authorization) {
         config.headers.authorization = `Bearer ${window.localStorage.getItem('userToken')}`;
      }
      return config;
   },
   function (error) {
      return Promise.reject(error);
   }
);

pmaxios.interceptors.response.use(
   function (response) {
      return response;
   },
   function (error) {
      return Promise.reject(error);
   }
);

export default pmaxios;