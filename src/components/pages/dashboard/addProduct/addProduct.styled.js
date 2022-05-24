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
`;

export const AddProductInputGroup = styled.div`
   display: grid;
   grid-template-columns: repeat(3, 1fr);
   gap: 2rem;
`;
