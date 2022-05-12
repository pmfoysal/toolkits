import React, {useEffect} from 'react';
import {BrowserRouter} from 'react-router-dom';
import ThemeProvider from '@context/themeProvider';
import StoreProvider from '@context/storeProvider';

export default function AppWrapper({children}) {
   const author = {
      username: 'pmfoysal',
      name: 'Foysal Ahmmed',
      email: 'pmfoysal@gmail.com',
      github: 'https://github.com/pmfoysal',
      facebook: 'https://facebook.com/pmfoysalz',
   };

   useEffect(() => {
      window.localStorage.setItem('author', JSON.stringify(author));
   }, []);

   return (
      <React.Fragment>
         <ThemeProvider>
            <StoreProvider>
               <BrowserRouter>{children}</BrowserRouter>
            </StoreProvider>
         </ThemeProvider>
      </React.Fragment>
   );
}
