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
`;
