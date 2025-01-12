import styled from 'styled-components';
import car from '@images/car.webp';

export const HomeSubscribeContainer = styled.section`
   padding: 3rem 0 10rem;

   & > * {
      border-radius: 3rem;
      overflow: hidden;
      background-image: url(${car});
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      padding: 8rem;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;

      @media screen and (max-width: 650px) {
         padding: 6rem;
         gap: 2rem;
      }

      @media screen and (max-width: 500px) {
         padding: 4rem;
      }

      @media screen and (max-width: 400px) {
         padding: 3rem;
      }
   }
`;

export const SubscribeHead = styled.h1`
   font-size: 4rem;
   color: ${({theme}) => theme.text.sub.title};
   opacity: 0.95;
   margin-top: 1.5rem;
   text-align: center;
`;

export const SubscribeTitle = styled.h3`
   font-size: 2.2rem;
   font-weight: 550;
   text-transform: uppercase;
   color: ${({theme}) => theme.text.sub.para};
   text-align: center;

   span {
      line-height: inherit;
      font-weight: 700;
      font-size: inherit;
      text-transform: inherit;
      color: ${({theme}) => theme.back.accent};
   }
`;

export const SubscribePara = styled.p`
   color: ${({theme}) => theme.text.sub.para};
   margin-top: 1.5rem;
   text-align: center;
`;

export const SubscribeForm = styled.div`
   margin-top: 5rem;
   height: 5.5rem;
   border-radius: 10rem;
   overflow: hidden;
   display: flex;
   align-items: center;
   background-color: ${({theme}) => theme.back.page};
   width: 50rem;

   input {
      background-color: transparent;
      font-weight: 550;
      color: ${({theme}) => theme.text.main.head};
      padding: 0 3rem;
      flex-grow: 1;

      @media screen and (max-width: 650px) {
         text-align: center;
         height: 4.5rem;
         margin-bottom: 2rem;
      }
   }

   button {
      height: 100%;

      &:active {
         transform: unset !important;
      }

      @media screen and (max-width: 650px) {
         height: 4.5rem;
      }
   }

   @media screen and (max-width: 650px) {
      width: 100%;
      flex-direction: column;
      height: unset;
      padding: 2rem 0;
      align-items: center;
      justify-content: center;
      border-radius: 2rem;
   }
`;
