import styled from 'styled-components';

export const HeaderContainer = styled.header`
   background-color: ${({theme}) => theme.back.accent};
   box-shadow: ${({theme}) => theme.back.shadow1};
   position: sticky;
   top: 0;
   left: 0;
   z-index: 15;
`;

export const HeaderPart1 = styled.div`
   width: 100%;
   padding: 2rem 0;

   & > * {
      display: flex;
      align-items: center;
      justify-content: space-between;

      & > *:nth-child(3) {
         position: absolute;
         top: 50%;
         left: 50%;
         transform: translate(-50%, -50%);
      }
   }
`;

export const HeaderPart2 = styled.div`
   width: 100%;
   padding: 1.5rem 0;
   background-color: ${({theme}) => theme.back.page};

   @media screen and (max-width: 650px) {
      display: none;
   }
`;
