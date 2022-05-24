import styled from 'styled-components';

export const ManageReviewsContainer = styled.article``;

export const ManageReviewsContent = styled.table`
   width: 100%;
   border-radius: 2rem;
   overflow: hidden;
`;

export const ManageReviewsHeader = styled.thead`
   padding: 1.5rem;
   background-color: ${({theme}) => theme.back.accent};

   tr {
      width: 100%;
      display: grid;
      grid-template-columns: 7rem 15rem 1fr 12rem;
      gap: 1rem;
      justify-items: flex-start;
   }

   th {
      color: ${({theme}) => theme.text.main.head};
      font-weight: 700;
      text-transform: capitalize;
      text-align: start;
   }
`;

export const ManageReviewsBody = styled.tbody`
   display: flex;
   flex-direction: column;
   background-color: ${({theme}) => theme.back.card0};

   tr {
      padding: 0.8rem 1.5rem;
      width: 100%;
      display: grid;
      grid-template-columns: 7rem 15rem 1fr 12rem;
      gap: 1rem;
      justify-items: flex-start;

      &:nth-child(2n) {
         background-color: ${({theme}) => theme.back.card1};
      }
   }

   td {
      display: flex;
      align-items: center;
      gap: 1rem;
      color: ${({theme}) => theme.text.main.para};
      text-transform: capitalize;
   }
`;
