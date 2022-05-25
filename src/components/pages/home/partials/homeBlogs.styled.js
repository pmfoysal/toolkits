import styled from 'styled-components';

export const HomeBlogsContainer = styled.section`
   padding: 8rem 0;

   & > * {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 4rem;
   }
`;
