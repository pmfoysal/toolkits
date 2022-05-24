import React from 'react';
import {Navigate, useLocation} from 'react-router-dom';

export default function RequireUser({user, then}) {
   const location = useLocation();

   if (!user?.uid) {
      return <Navigate to='/signin' state={{from: location}} />;
   }
   return then;
}
