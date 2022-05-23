import Header from '@shared/header';
import Footer from '@shared/footer';
import React, {Suspense, useContext} from 'react';
import Toaster from '@helpers/toaster';
import PageLoader from '@helpers/pageLoader';
import {Route, Routes} from 'react-router-dom';
import {Blogs, Contact, Dashboard, Forget, Home, NotFound} from '@pages';
import {BlogDetails, Portfolio, Products, Purchase, Signin, Signup} from '@pages';
import {ManageOrders, ManageProducts, ManageReviews, UserProfile} from '@dashboard';
import {AddProduct, AddReview, EditProduct, EditReview, ManageAdmins} from '@dashboard';
import {StoreContext} from '@contexts/storeProvider';

export default function App() {
   const {user} = useContext(StoreContext);
   return (
      <React.Fragment>
         <Header />
         <Suspense fallback={<PageLoader />}>
            <Routes>
               <Route path='/' element={<Home />} />
               <Route path='/blogs' element={<Blogs />} />
               <Route path='/signin' element={<Signin user={user} />} />
               <Route path='/signup' element={<Signup user={user} />} />
               <Route path='/forget' element={<Forget />} />
               <Route path='/contact' element={<Contact />} />
               <Route path='/products' element={<Products />} />
               <Route path='/purchase' element={<Purchase />} />
               <Route path='/portfolio' element={<Portfolio />} />
               <Route path='/blogs/:id' element={<BlogDetails />} />
               <Route path='/dashboard' element={<Dashboard />}>
                  <Route index element={<UserProfile />} />
                  <Route path='add/product' element={<AddProduct />} />
                  <Route path='add/review' element={<AddReview />} />
                  <Route path='edit/product/:id' element={<EditProduct />} />
                  <Route path='edit/review/:id' element={<EditReview />} />
                  <Route path='manage/admins' element={<ManageAdmins />} />
                  <Route path='manage/orders' element={<ManageOrders />} />
                  <Route path='manage/products' element={<ManageProducts />} />
                  <Route path='manage/reviews' element={<ManageReviews />} />
               </Route>
               <Route path='*' element={<NotFound />} />
            </Routes>
         </Suspense>
         <Footer />
         <Toaster />
      </React.Fragment>
   );
}
