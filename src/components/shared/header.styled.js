import styled from 'styled-components';

export const HeaderContainer = styled.header`
   background-color: ${({theme}) => theme.back.accent};
   box-shadow: ${({theme}) => theme.back.shadow1};
   position: sticky;
   top: 0;
   left: 0;
`;

export const HeaderPart1 = styled.div`
   width: 100%;
   padding: 2.5rem 0;

   & > * {
      display: grid;
      grid-template-columns: 20rem 1fr 20rem;
      align-items: center;
      justify-content: center;
      align-content: center;
      justify-items: center;
   }
`;

export const HeaderPart2 = styled.div`
   width: 100%;
   padding: 2rem 0;
   background-color: ${({theme}) => theme.back.page};
`;
