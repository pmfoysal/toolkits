import Button from '@shared/button';
import React, {useContext} from 'react';
import {StoreContext} from '@contexts/storeProvider';
import {ManageReviewsBody, ManageReviewsContainer, ManageReviewsContent, ManageReviewsHeader} from './manageReviews.styled';

export default function ManageReviews() {
   const {role} = useContext(StoreContext);
   const admin = role === 'admin';

   const array = [1, 2, 3, 4, 5];

   return (
      <ManageReviewsContainer>
         <ManageReviewsContent>
            <ManageReviewsHeader>
               <tr>
                  <th>sl no</th>
                  <th>date</th>
                  <th>review summary</th>
                  <th>actions</th>
               </tr>
            </ManageReviewsHeader>
            <ManageReviewsBody>
               {array.map((v, i) => (
                  <tr key={i}>
                     <td>01</td>
                     <td>12 May, 2022</td>
                     <td>Lorem Ipsum, Dolor Sit Amet Consectetur Adipisicing Elit. Quae, Ex Explicabo. Praesentium...</td>
                     <td>
                        {!admin && <Button name='edit' small neutral />}
                        <Button name={admin ? 'delete now' : 'delete'} small danger />
                     </td>
                  </tr>
               ))}
            </ManageReviewsBody>
         </ManageReviewsContent>
      </ManageReviewsContainer>
   );
}
