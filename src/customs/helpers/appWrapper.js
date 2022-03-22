import ThemeProvider from '@context/themeProvider';
import React, {useEffect} from 'react';
import {BrowserRouter} from 'react-router-dom';

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
            <BrowserRouter>{children}</BrowserRouter>
         </ThemeProvider>
      </React.Fragment>
   );
}
