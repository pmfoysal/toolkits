import styled from 'styled-components';

export const HomeProductsContainer = styled.section`
   padding: 8rem 0;
`;

export const HomeProductsContent = styled.article`
   display: grid;
   grid-template-columns: repeat(3, 1fr);
   gap: 4rem;
   background-color: ${({theme}) => theme.back.card0};
   padding: 8rem 10rem;
   border-radius: 3rem;
   margin: 0 auto;

   @media screen and (max-width: 1450px) {
      padding: 6rem 8rem;
   }

   @media screen and (max-width: 1400px) {
      padding: 7rem;
   }

   @media screen and (max-width: 1350px) {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
   }

   @media screen and (max-width: 1000px) {
      padding: 5rem;
   }

   @media screen and (max-width: 500px) {
      padding: 3rem;
   }

   @media screen and (max-width: 400px) {
      padding: 2rem;
   }

   @media screen and (max-width: 330px) {
      padding: 1.5rem;
   }
`;
