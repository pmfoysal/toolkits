import styled from 'styled-components';

export const AddProductContainer = styled.article`
   display: flex;
   align-items: center;
   justify-content: center;
   flex-direction: column;
`;

export const AddProductTitle = styled.h1`
   font-size: 3rem;
   color: ${({theme}) => theme.text.main.head};
   text-align: center;
`;

export const AddProductForm = styled.div`
   padding-top: 3rem;
   width: 70rem;
   display: flex;
   flex-direction: column;
   gap: 2rem;

   button {
      width: 20rem;
      margin: 2rem auto;
   }

   @media screen and (max-width: 1180px) {
      width: 100%;
   }
`;

export const AddProductInputGroup = styled.div`
   display: grid;
   grid-template-columns: repeat(3, 1fr);
   gap: 2rem;

   @media screen and (max-width: 800px) {
      grid-template-columns: repeat(2, 1fr);

      & > *:nth-child(3) {
         grid-column: span 2;
      }
   }

   @media screen and (max-width: 450px) {
      display: flex;
      flex-direction: column;
   }
`;
