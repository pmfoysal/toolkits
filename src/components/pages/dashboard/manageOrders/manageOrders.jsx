import Button from '@shared/button';
import React, {useContext} from 'react';
import {StoreContext} from '@contexts/storeProvider';
import {ManageOrdersBody, ManageOrdersContainer, ManageOrdersContent, ManageOrdersHeader} from './manageOrders.styled';

export default function ManageOrders() {
   const {role} = useContext(StoreContext);
   const admin = role === 'admin';
   const status = 'shipped';

   const array = [1, 2, 3, 4, 5];

   function getActions() {
      if (admin) {
         if (status === 'unpaid') {
            return <Button name='delete now' small danger />;
         } else if (status === 'pending') {
            return <Button name='ship now' small />;
         }
         return <Button name='completed' success small />;
      } else {
         if (status === 'unpaid') {
            return (
               <React.Fragment>
                  <Button name='cancel' small danger />
                  <Button name='payment' small />
               </React.Fragment>
            );
         } else if (status === 'pending') {
            return <Button name='processing' small neutral />;
         }
         return <Button name='completed' success small />;
      }
   }

   return (
      <ManageOrdersContainer>
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
               {array.map((v, i) => (
                  <tr key={i}>
                     <td>01</td>
                     <td>foysal ahmmed</td>
                     <td>12843298743313</td>
                     <td>10</td>
                     <td>20</td>
                     <td>200</td>
                     <td>{status}</td>
                     <td>{getActions()}</td>
                  </tr>
               ))}
            </ManageOrdersBody>
         </ManageOrdersContent>
      </ManageOrdersContainer>
   );
}
