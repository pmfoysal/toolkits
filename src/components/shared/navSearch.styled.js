import styled from 'styled-components';

export const NavSearchContainer = styled.nav`
   border-radius: 10rem;
   width: 50rem;
   display: flex;
   align-items: center;
   background-color: ${({theme}) => theme.back.page};

   input {
      flex-grow: 1;
      padding: 0 2rem;
      background-color: transparent;
      color: ${({theme}) => theme.text.main.head};
      font-weight: 550;
      height: 100%;
   }

   button {
      height: 4.5rem;

      &:active {
         transform: none;
      }
   }

   @media screen and (max-width: 1000px) {
      width: 40rem;
   }

   @media screen and (max-width: 850px) {
      width: 30rem;
   }

   @media screen and (max-width: 750px) {
      display: none;
   }
`;
