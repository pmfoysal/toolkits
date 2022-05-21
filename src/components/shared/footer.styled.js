import styled from 'styled-components';

export const FooterContainer = styled.footer`
   width: 100%;
   background-color: ${({theme}) => theme.back.accent};
   padding: 2.5rem;

   & > * {
      display: flex;
      align-items: center;
      justify-content: center;
   }
`;

export const FooterPara = styled.p`
   text-align: center;
   text-transform: capitalize;
   font-size: 1.5rem;
   color: ${({theme}) => theme.text.sub.title};
`;

export const FooterLink = styled.a`
   white-space: nowrap;
   color: ${({theme}) => theme.text.main.title};
   font-weight: 550;
   font-size: inherit;
   margin-left: 0.5rem;
   padding: 0.25rem 0.5rem;
   border-radius: 0.75rem;
   background-color: rgba(255, 255, 255, 0.85);

   &:hover {
      background-color: ${({theme}) => theme.back.accent};
      color: white;
   }
`;
