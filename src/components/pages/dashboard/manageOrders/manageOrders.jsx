import Button from '@shared/button';
import React, {useContext} from 'react';
import {StoreContext} from '@contexts/storeProvider';
import {ManageOrdersBody, ManageOrdersContainer, ManageOrdersContent, ManageOrdersHeader} from './manageOrders.styled';

export default function ManageOrders() {
   const {role} = useContext(StoreContext);
   const admin = role === 'admin';

   const array = [1, 2, 3, 4, 5];

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
                     <td>pending</td>
                     <td>
                        <Button name='cancel' small neutral />
                        <Button name='payment' small />
                     </td>
                  </tr>
               ))}
            </ManageOrdersBody>
         </ManageOrdersContent>
      </ManageOrdersContainer>
   );
}
