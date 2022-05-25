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
   }
`;

export const SummaryBannerButtons = styled.div`
   display: flex;
   align-items: center;
   gap: 2rem;
`;
