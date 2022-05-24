import auth from '@configs/firebase.config';
import {onAuthStateChanged} from 'firebase/auth';
import React, {createContext, useEffect, useState} from 'react';

export const StoreContext = createContext();

export default function StoreProvider({children}) {
   const [store, setStore] = useState({});
   const [user, setUser] = useState({});
   const [role, setRole] = useState('user');

   useEffect(() => {
      onAuthStateChanged(auth, u => {
         if (u) {
            setUser(u);
            // get token and role from backend
         } else {
            setUser({});
         }
      });
   }, []);

   return <StoreContext.Provider value={{store, setStore, user, setUser, role, setRole}}>{children}</StoreContext.Provider>;
}
