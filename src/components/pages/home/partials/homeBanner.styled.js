import styled from 'styled-components';
import image from '@images/background.webp';

export const HomeBannerContainer = styled.section`
   padding: 8rem 0;
   background-image: url(${image});
   min-height: calc(100vh - 14.2rem);
   background-position: center;
   background-repeat: no-repeat;
   background-size: cover;

   & > * {
      min-height: calc(100vh - 14.2rem - 16rem);
      display: flex;
      align-items: center;
      justify-content: center;
   }
`;

export const HomeBannerContent = styled.article`
   width: 100%;
   display: grid;
   grid-template-columns: repeat(2, 1fr);
   gap: 10rem;
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
`;

export const HomeBannerTitle = styled.h3`
   font-size: 3rem;
   color: ${({theme}) => theme.text.sub.para};
   opacity: 0.95;
   margin-bottom: 2rem;
   text-transform: uppercase;
   font-weight: 550;
`;
