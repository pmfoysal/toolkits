import styled from 'styled-components';

export const HomeReviewsContainer = styled.section`
   padding: 8rem 0;
`;

export const HomeReviewsCards = styled.div`
   display: grid;
   grid-template-columns: repeat(3, 1fr);
   gap: 4rem;

   @media screen and (max-width: 1350px) {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
   }
`;
