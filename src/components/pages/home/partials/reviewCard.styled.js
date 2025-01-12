import styled from 'styled-components';

export const ReviewCardContainer = styled.summary`
   width: 100%;
   background-color: ${({theme}) => theme.back.card0};
   display: flex;
   align-items: center;
   text-align: center;
   flex-direction: column;
   padding: 5rem;
   border-radius: 3rem;

   @media screen and (max-width: 1350px) {
      max-width: 55rem;
   }

   @media screen and (max-width: 1250px) {
      max-width: 50rem;
   }

   @media screen and (max-width: 1150px) {
      max-width: 45rem;
   }

   @media screen and (max-width: 1050px) {
      max-width: 75rem;
   }

   @media screen and (max-width: 500px) {
      padding: 3rem;
   }

   @media screen and (max-width: 400px) {
      padding: 2rem;
   }
`;

export const ReviewCardImage = styled.figure`
   height: 12rem;
   width: 12rem;
   border-radius: 100%;
   overflow: hidden;
`;

export const ReviewCardName = styled.h1`
   font-size: 2.5rem;
   color: ${({theme}) => theme.text.main.head};
   margin-top: 2rem;
`;

export const ReviewCardRatings = styled.h3`
   color: ${({theme}) => theme.text.main.para};
   font-weight: 550;
   margin-top: 0.5rem;
   font-size: 1.6rem;

   span {
      line-height: inherit;
      font-size: inherit;
      font-weight: 700;
      color: ${({theme}) => theme.back.accent};
   }
`;

export const ReviewCardDate = styled.p`
   font-size: 1.7rem;
   color: ${({theme}) => theme.text.main.para};
   font-weight: 550;
   margin-top: 0.5rem;
`;

export const ReviewCardReview = styled.p`
   margin-top: 3rem;
`;
