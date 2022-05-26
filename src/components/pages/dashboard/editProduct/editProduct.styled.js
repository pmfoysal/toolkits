import styled from 'styled-components';

export const EditProductContainer = styled.article`
   display: flex;
   align-items: center;
   justify-content: center;
   flex-direction: column;
`;

export const EditProductTitle = styled.h1`
   font-size: 3rem;
   color: ${({theme}) => theme.text.main.head};
`;

export const EditProductForm = styled.div`
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

export const EditProductInputGroup = styled.div`
   display: grid;
   grid-template-columns: repeat(3, 1fr);
   gap: 2rem;
`;
