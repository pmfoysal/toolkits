import styled from 'styled-components';

export const AddReviewContainer = styled.article`
   display: flex;
   align-items: center;
   justify-content: center;
   flex-direction: column;
`;

export const AddReviewTitle = styled.h1`
   font-size: 3rem;
   color: ${({theme}) => theme.text.main.head};
`;

export const AddReviewForm = styled.div`
   padding-top: 3rem;
   width: 70rem;
   display: flex;
   flex-direction: column;
   gap: 2rem;

   button {
      width: 20rem;
      margin: 2rem auto;
   }

   @media screen and (max-width: 1150px) {
      width: 100%;
   }
`;
