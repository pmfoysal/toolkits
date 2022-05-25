import React, {useContext} from 'react';
import {StoreContext} from '@contexts/storeProvider';
import useReviews from '@hooks/useReviews';
import PageLoader from '@helpers/pageLoader';
import ReviewsCard from './partials/reviewsCard';
import {ManageReviewsBody, ManageReviewsContainer, ManageReviewsContent, ManageReviewsHeader} from './manageReviews.styled';

export default function ManageReviews() {
   const {role} = useContext(StoreContext);
   const admin = role === 'admin';

   const {data: reviews, isLoading, refetch} = useReviews();

   return (
      <ManageReviewsContainer>
         {isLoading ? (
            <div style={{paddingBottom: '8rem'}}>
               <PageLoader />
            </div>
         ) : (
            <ManageReviewsContent>
               <ManageReviewsHeader>
                  <tr>
                     <th>sl no</th>
                     <th>date</th>
                     <th>ratings</th>
                     <th>review summary</th>
                     <th>actions</th>
                  </tr>
               </ManageReviewsHeader>
               <ManageReviewsBody>
                  {reviews?.map((data, index) => (
                     <ReviewsCard data={data} index={index} admin={admin} refetch={refetch} />
                  ))}
               </ManageReviewsBody>
            </ManageReviewsContent>
         )}
      </ManageReviewsContainer>
   );
}
