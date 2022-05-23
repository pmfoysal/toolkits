import styled from 'styled-components';

export const SocialIconContainer = styled.span`
   border: 0.2rem solid ${({theme}) => theme.text.main.para};
   border-radius: 0.75rem;
   width: 100%;
   aspect-ratio: 2/1;
   transition: 0.1s ease;
   display: flex;
   align-items: center;
   justify-content: center;
   cursor: pointer;
   opacity: 0.5;

   * {
      pointer-events: none;
   }

   svg {
      height: 2rem;
      width: auto;
      color: inherit;
   }

   &:hover {
      background-color: ${({theme}) => theme.back.accent};
      border-color: ${({theme}) => theme.back.accent};
      opacity: 0.8;
   }

   &:active {
      opacity: 0.75;
      transform: scale(0.95);
   }
`;
