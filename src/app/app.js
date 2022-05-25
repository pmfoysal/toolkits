import Header from '@shared/header';
import Footer from '@shared/footer';
import Toaster from '@helpers/toaster';
import PageLoader from '@helpers/pageLoader';
import {Route, Routes} from 'react-router-dom';
import RequireUser from '@helpers/requireUser';
import React, {Suspense, useContext} from 'react';
import {StoreContext} from '@contexts/storeProvider';
import {Blogs, Contact, Dashboard, Forget, Home, NotFound} from '@pages';
import {BlogDetails, Portfolio, Products, Purchase, Signin, Signup} from '@pages';
import {ManageOrders, ManageProducts, ManageReviews, UserProfile} from '@dashboard';
import {AddProduct, AddReview, EditProduct, EditReview, ManageUsers} from '@dashboard';
import MegaFooter from '@helpers/megaFooter';

export default function App() {
   const {user, role} = useContext(StoreContext);
   return (
      <React.Fragment>
         <Header />
         <Suspense fallback={<PageLoader />}>
            <Routes>
               <Route path='/' element={<Home />} />
               <Route path='/blogs' element={<Blogs />} />
               <Route path='/forget' element={<Forget />} />
               <Route path='/contact' element={<Contact />} />
               <Route path='/products' element={<Products />} />
               <Route path='/portfolio' element={<Portfolio />} />
               <Route path='/blogs/:id' element={<BlogDetails />} />
               <Route path='/signin' element={<Signin user={user} />} />
               <Route path='/signup' element={<Signup user={user} />} />
               <Route path='/purchase' element={<RequireUser user={user} then={<Purchase />} />} />
               <Route path='/dashboard' element={<RequireUser user={user} then={<Dashboard />} />}>
                  <Route index element={<UserProfile />} />
                  <Route path='profile' element={<UserProfile />} />
                  <Route path='manage/orders' element={<ManageOrders role={role} />} />
                  <Route path='manage/reviews' element={<ManageReviews role={role} />} />
                  {role === 'user' && (
                     <React.Fragment>
                        <Route path='add/review' element={<AddReview />} />
                        <Route path='edit/review/:id' element={<EditReview />} />
                     </React.Fragment>
                  )}
                  {role === 'admin' && (
                     <React.Fragment>
                        <Route path='add/product' element={<AddProduct />} />
                        <Route path='manage/users' element={<ManageUsers />} />
                        <Route path='edit/product/:id' element={<EditProduct />} />
                        <Route path='manage/products' element={<ManageProducts />} />
                     </React.Fragment>
                  )}
               </Route>
               <Route path='*' element={<NotFound />} />
            </Routes>
         </Suspense>
         <MegaFooter />
         <Footer />
         <Toaster />
      </React.Fragment>
   );
}
