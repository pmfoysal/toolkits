import styled from 'styled-components';

export const PurchaseContainer = styled.section`
   padding: 8rem 0;

   & > * {
      max-width: 100rem;
   }
`;

export const PurchaseDetailsArea = styled.article`
   margin: 0 auto;
   padding: 5rem;
   border-radius: 3rem;
   background-color: ${({theme}) => theme.back.card0};
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
`;

export const PurchaseImage = styled.figure`
   width: 40rem;
   height: auto;
   aspect-ratio: 2/1.25;
   border-radius: 2rem;
   overflow: hidden;

   img {
      object-fit: contain;
   }
`;

export const PurchaseTitle = styled.h1`
   font-size: 2rem;
   color: ${({theme}) => theme.text.main.head};
   margin-top: 3rem;
   margin-bottom: 1rem;
`;

export const PurchasePara = styled.p`
   color: ${({theme}) => theme.text.main.para};
   margin-top: 0.75rem;

   strong {
      font-weight: 700;
      text-transform: capitalize;
   }
`;

export const PurchaseDetails = styled.p`
   color: ${({theme}) => theme.text.main.para};
   margin-top: 4rem;

   strong {
      font-weight: 700;
      text-transform: capitalize;
   }
`;

export const PurchaseOrderArea = styled.article`
   margin: 0 auto;
   padding: 8rem 5rem;
   border-radius: 3rem;
   background-color: ${({theme}) => theme.back.card0};
   display: grid;
   gap: 3rem;
   margin-top: 8rem;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;

   input {
      height: 4.6rem;
      width: 45rem;
      padding: 0 1.5rem;
      border-radius: 0.75rem;
      background-color: ${({theme}) => theme.back.page};
      border: 0.2rem solid ${({theme}) => theme.back.border};
      font-weight: 550;
      color: ${({theme}) => theme.text.main.head};

      &:focus {
         border-color: ${({theme}) => theme.back.accent};
      }
   }

   p {
      strong {
         font-weight: 700;
         line-height: inherit;
      }
   }

   div {
      display: flex;
      align-items: center;
      height: 4rem;
      width: 25rem;
      border-radius: 10rem;
      overflow: hidden;
      background-color: ${({theme}) => theme.back.page};

      input {
         flex-grow: 1;
         height: 100%;
         width: 100%;
         background-color: transparent;
         padding: 0 2rem;
         text-align: center;
         border-color: transparent;
         border-radius: 0;
      }

      button {
         height: 100%;
         width: 10rem;
         background-color: ${({theme}) => theme.back.accent};
         display: flex;
         align-items: center;
         justify-content: center;
         transition: 0.1s ease;

         * {
            pointer-events: none;
         }

         svg {
            height: 2rem;
            width: auto;
            color: ${({theme}) => theme.text.main.head};
         }

         &:hover {
            opacity: 0.85;
         }

         &:active {
            opacity: 0.65;
         }
      }
   }
`;
