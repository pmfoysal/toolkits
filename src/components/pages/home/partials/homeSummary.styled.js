import styled from 'styled-components';

export const HomeSummaryContainer = styled.section`
   padding: 8rem 0;

   & > * {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
   }
`;

export const HomeSummaryHeading = styled.h1`
   font-size: 4rem;
   color: ${({theme}) => theme.text.main.head};
   text-align: center;
`;

export const HomeSummaryTitle = styled.h3`
   font-size: 2rem;
   color: ${({theme}) => theme.text.main.para};
   margin-top: 1rem;
   text-align: center;
`;

export const HomeSummaryCards = styled.div`
   padding: 8rem 0;
   width: 100%;
   display: flex;
   align-items: center;
   justify-content: space-between;

   @media screen and (max-width: 1550px) {
      gap: 3rem;
   }

   @media screen and (max-width: 13000px) {
      flex-wrap: wrap;
      justify-content: center;
      gap: 4rem;
   }
`;
