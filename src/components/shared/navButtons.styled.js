import styled from 'styled-components';

export const NavButtonsContainer = styled.nav`
   display: flex;
   align-items: center;
   justify-content: flex-end;
   gap: 1.5rem;

   @media screen and (max-width: 1200px) {
      & > *:nth-child(2) {
         display: none;
      }
   }

   @media screen and (max-width: 650px) {
      display: ${({main}) => (main ? 'none' : 'flex')};
      gap: 1.5rem !important;

      & > *:nth-child(2) {
         display: block;
      }
   }
`;
