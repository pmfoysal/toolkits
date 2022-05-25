import styled from 'styled-components';

export const MegaMenuContainer = styled.nav`
   display: flex;
   flex-direction: column;
   gap: 0.5rem;
   align-items: flex-start;

   a {
      color: ${({theme}) => theme.text.sub.para};
      opacity: 0.7;

      &:hover {
         opacity: 1;
      }
   }
`;

export const MegaMenuTitle = styled.h3`
   margin-bottom: 2rem;
   font-size: 2.2rem;
   font-weight: 550;
   text-transform: uppercase;
   color: ${({theme}) => theme.text.sub.title};
`;
