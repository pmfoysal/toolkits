import React, {useEffect} from 'react';
import {BrowserRouter} from 'react-router-dom';
import StoreProvider from '@contexts/storeProvider';
import ThemeProvider from '@contexts/themeProvider';
import {QueryClient, QueryClientProvider} from 'react-query';

const queryClient = new QueryClient();

export default function AppWrapper({children}) {
   useEffect(() => {
      const author = {
         username: 'pmfoysal',
         name: 'Foysal Ahmmed',
         email: 'pmfoysal@gmail.com',
         github: 'https://github.com/pmfoysal',
         facebook: 'https://facebook.com/pmfoysalz',
      };
      window.localStorage.setItem('author', JSON.stringify(author));
   }, []);

   return (
      <React.Fragment>
         <ThemeProvider>
            <StoreProvider>
               <BrowserRouter>
                  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
               </BrowserRouter>
            </StoreProvider>
         </ThemeProvider>
      </React.Fragment>
   );
}
