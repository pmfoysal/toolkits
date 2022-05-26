import React, {useContext} from 'react';
import useOrders from '@hooks/useOrders';
import {StoreContext} from '@contexts/storeProvider';
import OrdersCard from './partials/ordersCard';
import PageLoader from '@helpers/pageLoader';
import {ManageOrdersBody, ManageOrdersContainer, ManageOrdersContent, ManageOrdersHeader} from './manageOrders.styled';

export default function ManageOrders() {
   const {role, user} = useContext(StoreContext);
   const admin = role === 'admin';
   const {data: orders, isLoading, refetch} = useOrders();

   return (
      <ManageOrdersContainer>
         {isLoading ? (
            <PageLoader />
         ) : (
            <ManageOrdersContent>
               <ManageOrdersHeader>
                  <tr>
                     <th>sl no</th>
                     <th>product name</th>
                     <th>transaction id</th>
                     <th>price</th>
                     <th>quantity</th>
                     <th>total</th>
                     <th>status</th>
                     <th>actions</th>
                  </tr>
               </ManageOrdersHeader>
               <ManageOrdersBody>
                  {admin
                     ? orders?.map((data, index) => (
                          <OrdersCard data={data} key={data._id} index={index} refetch={refetch} admin={admin} />
                       ))
                     : orders
                          ?.filter(v => v?.email === user?.email)
                          ?.map((data, index) => (
                             <OrdersCard data={data} key={data._id} index={index} refetch={refetch} admin={admin} />
                          ))}
               </ManageOrdersBody>
            </ManageOrdersContent>
         )}
      </ManageOrdersContainer>
   );
}
