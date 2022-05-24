import Button from '@shared/button';
import React from 'react';
import {ManageProductsBody, ManageProductsContainer, ManageProductsContent, ManageProductsHeader} from './manageProducts.styled';

export default function ManageProducts() {
   const array = [1, 2, 3, 4, 5];

   function getActions() {}

   return (
      <ManageProductsContainer>
         <ManageProductsContent>
            <ManageProductsHeader>
               <tr>
                  <th>sl no</th>
                  <th>image</th>
                  <th>author</th>
                  <th>product name</th>
                  <th>price</th>
                  <th>required</th>
                  <th>available</th>
                  <th>actions</th>
               </tr>
            </ManageProductsHeader>
            <ManageProductsBody>
               {array.map((v, i) => (
                  <tr key={i}>
                     <td>01</td>
                     <td>
                        <img src='https://i.pravatar.cc/150?img=41' alt='product' />
                     </td>
                     <td>pmfoysal</td>
                     <td>foysal ahmmed</td>
                     <td>10</td>
                     <td>20</td>
                     <td>200</td>
                     <td>
                        <Button name='update' small neutral />
                        <Button name='delete' small danger />
                     </td>
                  </tr>
               ))}
            </ManageProductsBody>
         </ManageProductsContent>
      </ManageProductsContainer>
   );
}
