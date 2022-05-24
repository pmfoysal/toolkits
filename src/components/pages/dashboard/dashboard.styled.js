import {Link} from 'react-router-dom';
import styled from 'styled-components';

export const DasboardContainer = styled.section`
   padding: 8rem 0;

   & > * {
      display: grid;
      grid-template-columns: 25rem 1fr;
      gap: 4rem;
   }
`;

export const DashboardNav = styled.nav`
   padding: 2.5rem;
   display: flex;
   flex-direction: column;
   gap: 0.5rem;
   border-radius: 2.5rem;
   background-color: ${({theme}) => theme.back.page};
   box-shadow: ${({theme}) => theme.back.shadow1};
`;

export const DashboardNavLink = styled(Link)`
   display: flex;
   align-items: center;
   gap: 0.75rem;
   color: ${({theme}) => theme.text.main.para};
   font-weight: 550;
   text-transform: capitalize;
   font-size: 1.5rem;
   padding: 1rem 1rem;
   transition: 0.1s ease;
   border-radius: 0.75rem;

   &.active,
   &:hover {
      background-color: ${({theme}) => theme.back.accent};
   }
`;

export const DasboardContent = styled.div`
   padding: 3rem;
   border-radius: 2.5rem;
   background-color: ${({theme}) => theme.back.page};
   box-shadow: ${({theme}) => theme.back.shadow1};
`;