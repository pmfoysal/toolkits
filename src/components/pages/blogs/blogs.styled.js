import styled from 'styled-components';

export const BlogsContainer = styled.section`
   padding: 8rem 0;
`;

export const BlogsContent = styled.div`
   display: grid;
   grid-template-columns: repeat(3, 1fr);
   gap: 4rem;

   @media screen and (max-width: 1200px) {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
   }
`;
