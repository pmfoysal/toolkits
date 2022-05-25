import styled from 'styled-components';

export const ConfirmContainer = styled.main`
   width: 45rem;
   overflow: hidden;
   border-radius: 1.5rem;
   background-color: ${({theme}) => theme.back.page};
`;

export const ConfirmTitle = styled.h1`
   font-size: 2rem;
   line-height: 1;
   padding: 1.75rem 2rem;
   border-bottom: 0.1rem solid rgba(0, 0, 0, 0.15);
   background-color: ${({theme}) => theme.back.card1};
   color: ${({theme}) => theme.text.main.head};
   display: flex;
   align-items: center;
   justify-content: space-between;

   svg {
      height: 2rem;
      width: auto;
      transform: scale(1.4);
      cursor: pointer;
      color: ${({theme}) => theme.text.main.head};
      transition: 0.1s ease;

      &:hover {
         opacity: 0.85;
      }

      &:active {
         transform: scale(1.3);
      }
   }
`;

export const ConfirmPara = styled.p`
   padding: 2rem;
`;

export const ConfirmButtons = styled.div`
   width: 100%;
   display: flex;
   align-items: center;
   justify-content: flex-end;
   gap: 2rem;
   padding: 1rem 2rem 2rem;
`;
