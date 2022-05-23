import {NavLink} from 'react-router-dom';
import styled from 'styled-components';

export const PageLinkContainer = styled(NavLink)`
   font-size: ${({small}) => (small ? '1.6rem' : '2rem')};
   color: ${({theme}) => theme.text.main.head};
   transition: 0.1s ease;

   &.active,
   &:hover {
      color: ${({theme}) => theme.back.accent};
   }
`;
