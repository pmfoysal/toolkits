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
`;
