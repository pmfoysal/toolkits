import styled from 'styled-components';

export const HamIconContainer = styled.nav`
   height: 4.2rem;
   width: 6rem;
   border: 0.2rem solid ${({theme}) => theme.text.main.head};
   display: none;
   margin-left: auto;
   align-items: center;
   justify-content: center;
   border-radius: 0.75rem;
   cursor: pointer;
   user-select: none;
   transition: 0.2s ease;

   &.true {
      border-color: ${({theme}) => theme.back.page};

      span {
         background-color: transparent;

         &::before,
         &::after {
            top: 50%;
            left: 50%;
            background-color: ${({theme}) => theme.back.page};
         }

         &::before {
            transform: translate(-50%, -50%) rotate(45deg);
         }

         &::after {
            transform: translate(-50%, -50%) rotate(-45deg);
         }
      }
   }

   @media screen and (max-width: 650px) {
      display: flex;
   }
`;

export const HamIconLine = styled.span`
   height: 0.3rem;
   width: 3.5rem;
   border-radius: 1rem;
   background-color: ${({theme}) => theme.text.main.head};
   pointer-events: none;
   transition: 0.2s ease;

   &::before,
   &::after {
      content: '';
      position: absolute;
      left: 0;
      background-color: ${({theme}) => theme.text.main.head};
      border-radius: inherit;
      height: inherit;
      width: inherit;
      transition: 0.2s ease;
   }

   &::before {
      top: -0.8rem;
   }

   &::after {
      top: 0.8rem;
   }
`;
