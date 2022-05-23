import styled from 'styled-components';

export const PortfolioContainer = styled.section`
   padding: 8rem 0;
`;

export const PortfolioCard = styled.article`
   max-width: 120rem;
   margin: 0 auto;
   padding: 5rem 6rem;
   border-radius: 2rem;
   background-color: ${({theme}) => theme.back.page};
   box-shadow: 0 0 1.25rem rgba(0, 0, 0, 0.1);
   display: flex;
   flex-direction: column;
   align-items: center;
   gap: 4rem;
`;

export const PortfolioCardLeft = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   padding-bottom: 4rem;

   &::after {
      content: '';
      width: 20rem;
      height: 0.3rem;
      border-radius: 1rem;
      position: absolute;
      top: 100%;
      left: 50%;
      transform: translateX(-50%);
      background-color: ${({theme}) => theme.back.accent};
      opacity: 0.3;
   }
`;

export const PortfolioCardImage = styled.img`
   height: 17.5rem;
   width: 17.5rem;
   border-radius: 100%;

   @media screen and (max-width: 450px) {
      width: 60%;
      height: auto;
      aspect-ratio: 1/1;
   }
`;

export const PortfolioCardName = styled.h1`
   font-size: 2.2rem;
   color: ${({theme}) => theme.text.main.head};
   white-space: nowrap;
   margin-top: 2rem;
`;

export const PortfolioCardRole = styled.h3`
   font-size: 1.5rem;
   font-weight: 550;
   color: ${({theme}) => theme.back.accent};
   margin-top: 0.25rem;
`;

export const PortfolioCardIcons = styled.div`
   width: 100%;
   display: flex;
   align-items: center;
   gap: 1.5rem;
   flex-wrap: wrap;
   justify-content: center;
   margin-top: 2rem;
`;

export const PortfolioCardIcon = styled.a`
   height: 3.5rem;
   width: 3.5rem;
   border-radius: 100%;
   display: flex;
   align-items: center;
   justify-content: center;
   background-color: ${({theme}) => theme.back.card1};
   transition: 0.1s ease;

   svg {
      color: ${({theme}) => theme.back.accent};
      transition: 0.1s ease;
      height: 1.8rem;
      width: auto;
   }

   &:hover {
      background-color: ${({theme}) => theme.back.accent};

      svg {
         color: ${({theme}) => theme.back.page};
      }
   }

   &:active {
      transform: scale(0.95);
   }
`;

export const PortfolioCardPara = styled.p`
   flex-grow: 1;
   color: ${({theme}) => theme.text.main.para};
   line-height: 1.6;

   .title {
      font-size: 2rem;
      font-weight: 700;
      text-transform: capitalize;
      line-height: 1;
      margin-bottom: 1.5rem;
      padding-bottom: 2rem;

      &::after {
         content: '';
         position: absolute;
         bottom: 0;
         left: 0;
         height: 0.3rem;
         width: 7rem;
         border-radius: 1rem;
         background-color: ${({theme}) => theme.back.accent};
         opacity: 0.3;
      }
   }

   .name {
      font-weight: 700;
      line-height: inherit;
      font-size: inherit;
      color: inherit;
   }
`;
