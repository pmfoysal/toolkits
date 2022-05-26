import styled from 'styled-components';

export const SummaryBannerContainer = styled.article`
   padding: 6rem 5rem;
   width: 100%;
   border-radius: 3rem;
   background-color: ${({theme}) => theme.back.page};
   box-shadow: ${({theme}) => theme.back.shadow1};
   display: flex;
   align-items: center;
   justify-content: space-between;
   gap: 5rem;

   @media screen and (max-width: 1000px) {
      flex-wrap: wrap;
      justify-content: center;
      text-align: center;
   }
`;

export const SummaryBannerTexts = styled.div`
   h1 {
      font-size: 3rem;
      color: ${({theme}) => theme.back.accent};
   }

   p {
      color: ${({theme}) => theme.text.main.para};
      font-size: 2rem;
      text-transform: capitalize;

      @media screen and (max-width: 1000px) {
         margin-top: 2rem;
      }
   }
`;

export const SummaryBannerButtons = styled.div`
   display: flex;
   align-items: center;
   gap: 2rem;

   @media screen and (max-width: 600px) {
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
   }
`;
