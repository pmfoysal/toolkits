import React from 'react';
import ImgLoader from '@shared/imgLoader';
import {
   ReviewCardContainer,
   ReviewCardDate,
   ReviewCardImage,
   ReviewCardName,
   ReviewCardRatings,
   ReviewCardReview,
} from './reviewCard.styled';

export default function ReviewCard({data}) {
   const {date, name, ratings, review, image} = data;

   return (
      <ReviewCardContainer>
         <ReviewCardImage>
            <ImgLoader src={image} alt='customer' />
         </ReviewCardImage>
         <ReviewCardName>{name}</ReviewCardName>
         <ReviewCardDate>{new Date(date).toLocaleDateString('en-US', {dateStyle: 'long'})}</ReviewCardDate>
         <ReviewCardRatings>
            ratings: <span>{ratings}</span>
         </ReviewCardRatings>
         <ReviewCardReview>{review?.slice(0, 290)}</ReviewCardReview>
      </ReviewCardContainer>
   );
}
