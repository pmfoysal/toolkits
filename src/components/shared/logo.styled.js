import styled from 'styled-components';

export const LogoContainer = styled.img`
   height: 4.8rem;
   width: auto;
   display: inline-block;
   cursor: pointer;
   transition: 0.1s ease;

   &:hover {
      opacity: 0.85;
   }

   &:active {
      transform: scale(0.95);
   }
`;
