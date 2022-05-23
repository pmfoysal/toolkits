import React from 'react';
import {Outlet} from 'react-router-dom';

export default function Dashboard() {
   return (
      <React.Fragment>
         <div>Dashboard</div>
         <Outlet />
      </React.Fragment>
   );
}
