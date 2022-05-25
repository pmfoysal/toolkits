import styled from 'styled-components';

export const HomeProductsContainer = styled.section`
   padding: 8rem 0;
`;

export const HomeProductsContent = styled.article`
   display: grid;
   grid-template-columns: repeat(3, 1fr);
   gap: 4rem;
   max-width: 120rem;
   margin: 0 auto;
`;
