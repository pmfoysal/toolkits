import {Home} from '@pages';
import React, {Suspense} from 'react';
import Toaster from '@helpers/toaster';
import {Route, Routes} from 'react-router-dom';

export default function App() {
   return (
      <React.Fragment>
         <Suspense fallback={<h1>Loading...</h1>}>
            <Routes>
               <Route path='/' element={<Home />} />
            </Routes>
         </Suspense>
         <Toaster />
      </React.Fragment>
   );
}
