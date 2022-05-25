import styled from 'styled-components';

export const MegaFooterContainer = styled.footer`
   padding: 8rem 0;
   background-color: ${({theme}) => theme.back.card1};

   & > * {
      display: grid;
      grid-template-columns: repeat(6, 1fr);
      gap: 5rem;

      @media screen and (max-width: 900px) {
         grid-template-columns: repeat(3, 1fr);
      }

      @media screen and (max-width: 500px) {
         grid-template-columns: repeat(2, 1fr);
         gap: 3rem;
      }

      @media screen and (max-width: 350px) {
         grid-template-columns: repeat(1, 1fr);
         gap: 3rem;

         & > * {
            align-items: center;
            justify-content: center;
            text-align: center;
         }
      }
   }
`;

export const MegaFooterIconArea = styled.nav`
   display: flex;
   flex-direction: column;
   gap: 3rem;
   align-items: flex-start;
   grid-column: span 2;

   img {
      width: 18rem;
      height: auto;
   }

   p {
      color: ${({theme}) => theme.text.main.para};
      max-width: 35rem;

      @media screen and (max-width: 900px) {
         max-width: 100%;
      }
   }

   @media screen and (max-width: 350px) {
      grid-column: span 1;
      align-items: center;
   }
`;
