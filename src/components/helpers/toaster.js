import React from 'react';
import { ToastContainer, Zoom } from 'react-toastify';

export default function Toaster() {
   return (
      <ToastContainer
         position='top-center'
         autoClose={3000}
         hideProgressBar={false}
         newestOnTop
         closeOnClick
         rtl={false}
         limit={1}
         pauseOnFocusLoss={false}
         draggable
         pauseOnHover={false}
         transition={Zoom}
      />
   );
}
