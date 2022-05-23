import React from 'react';
import {ToastContainer, Zoom} from 'react-toastify';

export default function Toaster() {
   return (
      <ToastContainer
         position='top-center'
         autoClose={3000}
         hideProgressBar={false}
         newestOnTop
         closeOnClick
         rtl={false}
         pauseOnFocusLoss={false}
         draggable
         pauseOnHover={false}
         transition={Zoom}
      />
   );
}
