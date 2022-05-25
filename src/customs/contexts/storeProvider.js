import {toast} from 'react-toastify';
import pmaxios from '@middlewares/pmaxios';
import auth from '@configs/firebase.config';
import {onAuthStateChanged} from 'firebase/auth';
import React, {createContext, useEffect, useState} from 'react';

export const StoreContext = createContext();

export default function StoreProvider({children}) {
   const [store, setStore] = useState({});
   const [user, setUser] = useState({});
   const [dbUser, setDbUser] = useState({});
   const [role, setRole] = useState('user');

   useEffect(() => {
      onAuthStateChanged(auth, u => {
         if (u) {
            setUser(u);
         } else {
            setUser({});
         }
      });
   }, []);

   useEffect(() => {
      if (user?.email) {
         pmaxios
            .get(`/user/${user?.email}`)
            .then(res => {
               if (res?.data?.email) {
                  setDbUser(res?.data);
                  setRole(res?.data?.role || 'user');
               }
            })
            .catch(error => toast.error(error.message));
      }
   }, [user]);

   return (
      <StoreContext.Provider value={{store, setStore, user, setUser, dbUser, setDbUser, role, setRole}}>
         {children}
      </StoreContext.Provider>
   );
}
