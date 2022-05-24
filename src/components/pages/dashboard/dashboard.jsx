import PageLoader from '@helpers/pageLoader';
import MainContainer from '@shared/mainContainer';
import React, {Suspense, useContext} from 'react';
import {Outlet, useLocation} from 'react-router-dom';
import {StoreContext} from '@contexts/storeProvider';
import {DasboardContainer, DasboardContent, DashboardNav, DashboardNavLink} from './dashboard.styled';

export default function Dashboard() {
   const {role} = useContext(StoreContext);
   const admin = role === 'admin';
   const {pathname} = useLocation();

   function getClassName(link) {
      return pathname === link ? 'active' : '';
   }

   return (
      <DasboardContainer>
         <MainContainer>
            <DashboardNav>
               <DashboardNavLink to='/dashboard' className={getClassName('/dashboard')}>
                  my profile
               </DashboardNavLink>
               {admin ? (
                  <DashboardNavLink to='/dashboard/add/product' className={getClassName('/dashboard/add/product')}>
                     add product
                  </DashboardNavLink>
               ) : (
                  <DashboardNavLink to='/dashboard/add/review' className={getClassName('/dashboard/add/review')}>
                     add review
                  </DashboardNavLink>
               )}
               <DashboardNavLink to='/dashboard/manage/orders' className={getClassName('/dashboard/manage/orders')}>
                  {admin ? 'manage orders' : 'my orders'}
               </DashboardNavLink>
               <DashboardNavLink to='/dashboard/manage/reviews' className={getClassName('/dashboard/manage/reviews')}>
                  {admin ? 'manage reviews' : 'my reviews'}
               </DashboardNavLink>
               {admin && (
                  <DashboardNavLink to='/dashboard/manage/products' className={getClassName('/dashboard/manage/products')}>
                     manage products
                  </DashboardNavLink>
               )}
               {admin && (
                  <DashboardNavLink to='/dashboard/manage/users' className={getClassName('/dashboard/manage/users')}>
                     manage users
                  </DashboardNavLink>
               )}
            </DashboardNav>
            <DasboardContent>
               <Suspense fallback={<PageLoader />}>
                  <Outlet />
               </Suspense>
            </DasboardContent>
         </MainContainer>
      </DasboardContainer>
   );
}
