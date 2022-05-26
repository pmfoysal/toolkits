import styled from 'styled-components';

export const ProductsContainer = styled.section`
   padding: 8rem 0;
`;

export const ProductsContent = styled.article`
   display: grid;
   grid-template-columns: repeat(3, 1fr);
   gap: 5rem;
   max-width: 135rem;
   margin: 0 auto;
   background-color: ${({theme}) => theme.back.card0};
   padding: 8rem;
   border-radius: 3rem;

   @media screen and (max-width: 1350px) {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      padding: 7rem;
   }

   @media screen and (max-width: 700px) {
      padding: 5rem;
   }

   @media screen and (max-width: 500px) {
      padding: 4rem 3rem;
   }

   @media screen and (max-width: 400px) {
      padding: 3rem 2rem;
   }
`;
