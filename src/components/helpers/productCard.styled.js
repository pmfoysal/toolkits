import styled from 'styled-components';

export const ProductCardContainer = styled.summary`
   width: 100%;
   background-color: ${({theme}) => theme.back.page};
   box-shadow: ${({theme}) => theme.back.shadow1};
   transition: 0.1s ease;
   border-radius: 2rem;
   padding: 2.5rem;

   &:hover {
      box-shadow: ${({theme}) => theme.back.shadow2};
   }

   @media screen and (max-width: 1350px) {
      width: 45rem;
   }

   @media screen and (max-width: 1200px) {
      width: 40rem;
   }

   @media screen and (max-width: 1100px) {
      width: 35rem;
   }

   @media screen and (max-width: 920px) {
      width: 45rem;
   }

   @media screen and (max-width: 500px) {
      width: 100%;
   }
`;

export const ProductCardImage = styled.figure`
   width: 100%;
   height: auto;
   aspect-ratio: 2/1.25;
   overflow: hidden;
   display: flex;
   align-items: center;
   justify-content: center;

   img {
      object-fit: contain;
   }

   @media screen and (max-width: 500px) {
      aspect-ratio: 2/1.5;
   }
`;

export const ProductCardTexts = styled.div`
   display: flex;
   flex-direction: column;
   margin-top: 3rem;
   padding-top: 2rem;

   &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      height: 0.2rem;
      width: 50%;
      background-color: ${({theme}) => theme.back.accent};
      opacity: 0.3;
   }
`;

export const ProductCardTitle = styled.h1`
   font-size: 2rem;
   color: ${({theme}) => theme.text.main.head};
`;

export const ProductCardPara = styled.p`
   color: ${({theme}) => theme.text.main.para};
   margin-top: 1rem;
   margin-bottom: 1rem;

   &::first-letter {
      text-transform: capitalize;
   }
`;

export const ProductCardTagsGroup = styled.div`
   display: grid;
   grid-template-columns: repeat(2, 1fr);
   width: 100%;
   gap: 2rem;

   @media screen and (max-width: 500px) {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 1rem;
      flex-wrap: wrap;
   }
`;

export const ProductCardTags = styled.p`
   color: ${({theme}) => theme.text.main.para};
   text-transform: capitalize;
   display: flex;
   align-items: center;
   gap: 0.5rem;

   strong {
      font-weight: 700;
      line-height: inherit;
      color: inherit;
      font-size: 1.7rem;
   }

   span {
      font-size: 1.5rem;
      text-transform: lowercase;
   }

   &.price {
      font-size: 2.5rem;
      font-weight: 700;
      color: ${({theme}) => theme.text.main.para};
      padding-top: 0.5rem;
      padding-bottom: 2rem;
      gap: 0.25rem;

      span {
         font-size: 1.5rem;
         text-transform: lowercase;
      }
   }
`;
