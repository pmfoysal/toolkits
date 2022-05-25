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
`;

export const HomeSummaryTitle = styled.h3`
   font-size: 2rem;
   color: ${({theme}) => theme.text.main.para};
   margin-top: 1rem;
`;

export const HomeSummaryCards = styled.div`
   padding: 8rem 0;
   width: 100%;
   display: flex;
   align-items: center;
   justify-content: space-between;
`;
