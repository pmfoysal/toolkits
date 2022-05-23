import React, {Suspense} from 'react';
import {Outlet} from 'react-router-dom';
import PageLoader from '@helpers/pageLoader';

export default function Dashboard() {
   return (
      <React.Fragment>
         <div>Dashboard</div>
         <Suspense fallback={<PageLoader />}>
            <Outlet />
         </Suspense>
      </React.Fragment>
   );
}
