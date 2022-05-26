import styled from 'styled-components';
import image from '@images/background.webp';

export const HomeBannerContainer = styled.section`
   padding: 8rem 0;
   background-image: url(${image});
   min-height: calc(100vh - 14.8rem);
   background-position: center;
   background-repeat: no-repeat;
   background-size: cover;

   & > * {
      min-height: calc(100vh - 14.8rem - 16rem);
      display: flex;
      align-items: center;
      justify-content: center;
   }

   @media screen and (max-width: 600px) {
      padding: 5rem 0;
   }
`;

export const HomeBannerContent = styled.article`
   width: 100%;
   display: grid;
   grid-template-columns: repeat(2, 1fr);
   gap: 10rem;

   @media screen and (max-width: 1150px) {
      display: flex;
      flex-direction: column;
      max-width: 80rem;
      padding: 5rem 0;
      justify-content: center;
      align-items: center;
   }

   @media screen and (max-width: 600px) {
      padding: 3rem 0;
   }
`;

export const HomeBannerImage = styled.article`
   display: flex;
   align-items: center;
   justify-content: flex-end;
   width: 60rem;
   aspect-ratio: 2/1.5;

   img {
      width: 100%;
      height: unset;
      object-fit: unset;
   }

   @media screen and (max-width: 1250px) {
      width: 100%;
   }

   @media screen and (max-width: 1150px) {
      width: 75%;
      justify-content: center;
   }

   @media screen and (max-width: 500px) {
      width: 90%;
      justify-content: center;
   }
`;

export const HomeBannerTexts = styled.article`
   display: flex;
   justify-content: center;
   align-items: flex-start;
   flex-direction: column;
`;

export const HomeBannerHeading = styled.h1`
   font-size: 7rem;
   color: ${({theme}) => theme.text.sub.head};
   opacity: 0.9;
   text-transform: uppercase;
   margin-bottom: 5rem;

   @media screen and (max-width: 700px) {
      font-size: 6rem;
   }

   @media screen and (max-width: 500px) {
      font-size: 5rem;
   }

   @media screen and (max-width: 400px) {
      font-size: 4.5rem;
   }

   @media screen and (max-width: 350px) {
      font-size: 4rem;
   }
`;

export const HomeBannerTitle = styled.h3`
   font-size: 3rem;
   color: ${({theme}) => theme.text.sub.para};
   opacity: 0.95;
   margin-bottom: 2rem;
   text-transform: uppercase;
   font-weight: 550;

   @media screen and (max-width: 500px) {
      font-size: 2.5rem;
   }

   @media screen and (max-width: 350px) {
      font-size: 2rem;
   }
`;
