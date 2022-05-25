import styled from 'styled-components';

export const MegaMenuContainer = styled.nav`
   display: flex;
   flex-direction: column;
   gap: 0.5rem;
   align-items: flex-start;
`;

export const MegaMenuTitle = styled.h3`
   margin-bottom: 2rem;
   font-size: 2.4rem;
   font-weight: 700;
   color: ${({theme}) => theme.text.main.head};
`;
