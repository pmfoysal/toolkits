import styled from 'styled-components';

export const ManageOrdersContainer = styled.article``;

export const ManageOrdersContent = styled.table`
   width: 115rem;
   border-radius: 2rem;
   overflow: hidden;
`;

export const ManageOrdersHeader = styled.thead`
   padding: 1.5rem;
   background-color: ${({theme}) => theme.back.accent};

   tr {
      width: 100%;
      display: grid;
      grid-template-columns: 7rem 1fr 1fr 9rem 10rem 10rem 12rem 15rem;
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

export const ManageOrdersBody = styled.tbody`
   display: flex;
   flex-direction: column;
   background-color: ${({theme}) => theme.back.card0};

   tr {
      padding: 0.8rem 1.5rem;
      width: 100%;
      display: grid;
      grid-template-columns: 7rem 1fr 1fr 9rem 10rem 10rem 12rem 15rem;
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
