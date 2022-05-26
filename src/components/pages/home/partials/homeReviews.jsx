import React from 'react';
import MainContainer from '@shared/mainContainer';
import ReviewCard from './reviewCard';
import useReviews from '@hooks/useReviews';
import PageLoader from '@helpers/pageLoader';
import {HomeReviewsCards, HomeReviewsContainer} from './homeReviews.styled';

export default function HomeReviews() {
   const {data: reviews, isLoading} = useReviews();

   return (
      <HomeReviewsContainer>
         <MainContainer>
            {isLoading ? (
               <PageLoader />
            ) : (
               <HomeReviewsCards>
                  {reviews?.slice(0, 3)?.map(data => (
                     <ReviewCard data={data} key={data._id} />
                  ))}
                  {reviews?.slice(0, 3)?.map(data => (
                     <ReviewCard data={data} key={data._id} />
                  ))}
               </HomeReviewsCards>
            )}
         </MainContainer>
      </HomeReviewsContainer>
   );
}
