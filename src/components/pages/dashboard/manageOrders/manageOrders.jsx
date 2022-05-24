import {StoreContext} from '@contexts/storeProvider';
import Button from '@shared/button';
import React, {useContext, useState} from 'react';
import {ManageOrdersBody, ManageOrdersContainer, ManageOrdersContent, ManageOrdersHeader} from './manageOrders.styled';

export default function ManageOrders() {
   const {role} = useContext(StoreContext);
   return (
      <ManageOrdersContainer>
         <ManageOrdersContent>
            <ManageOrdersHeader role={role}>
               <tr>
                  <th>sl no</th>
                  <th>product name</th>
                  <th>transaction id</th>
                  <th>price</th>
                  <th>quantity</th>
                  <th>total</th>
                  <th>actions</th>
               </tr>
            </ManageOrdersHeader>
            <ManageOrdersBody role={role}>
               <tr>
                  <td>01</td>
                  <td>foysal ahmmed</td>
                  <td>12843298743313</td>
                  <td>10</td>
                  <td>20</td>
                  <td>200</td>
                  <td>
                     <Button name='cancel' small neutral />
                     <Button name='payment' small />
                  </td>
               </tr>
               <tr>
                  <td>01</td>
                  <td>foysal ahmmed</td>
                  <td>12843298743313</td>
                  <td>10</td>
                  <td>20</td>
                  <td>200</td>
                  <td>
                     <Button name='cancel' small neutral />
                     <Button name='payment' small />
                  </td>
               </tr>
               <tr>
                  <td>01</td>
                  <td>foysal ahmmed</td>
                  <td>12843298743313</td>
                  <td>10</td>
                  <td>20</td>
                  <td>200</td>
                  <td>
                     <Button name='cancel' small neutral />
                     <Button name='payment' small />
                  </td>
               </tr>
               <tr>
                  <td>01</td>
                  <td>foysal ahmmed</td>
                  <td>12843298743313</td>
                  <td>10</td>
                  <td>20</td>
                  <td>200</td>
                  <td>
                     <Button name='cancel' small neutral />
                     <Button name='payment' small />
                  </td>
               </tr>
               <tr>
                  <td>01</td>
                  <td>foysal ahmmed</td>
                  <td>12843298743313</td>
                  <td>10</td>
                  <td>20</td>
                  <td>200</td>
                  <td>
                     <Button name='cancel' small neutral />
                     <Button name='payment' small />
                  </td>
               </tr>
            </ManageOrdersBody>
         </ManageOrdersContent>
      </ManageOrdersContainer>
   );
}
