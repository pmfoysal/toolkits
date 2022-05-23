import React, {useContext} from 'react';
import {StoreContext} from '@contexts/storeProvider';
import {Navigate, useLocation} from 'react-router-dom';

export default function RequireUser({children}) {
   const location = useLocation();
   const {user} = useContext(StoreContext);

   if (!user?.uid) {
      return <Navigate to='/signin' state={{from: location}} />;
   }
   return children;
}
