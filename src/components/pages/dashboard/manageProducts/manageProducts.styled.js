import styled from 'styled-components';

export const ManageProductsContainer = styled.article``;

export const ManageProductsContent = styled.table`
   width: 115rem;
   border-radius: 2rem;
   overflow: hidden;
`;

export const ManageProductsHeader = styled.thead`
   padding: 1.5rem;
   background-color: ${({theme}) => theme.back.accent};

   tr {
      width: 100%;
      display: grid;
      grid-template-columns: 7rem 8rem 12rem 1fr 10rem 12rem 12rem 14rem;
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

export const ManageProductsBody = styled.tbody`
   display: flex;
   flex-direction: column;
   background-color: ${({theme}) => theme.back.card0};

   tr {
      padding: 0.8rem 1.5rem;
      width: 100%;
      display: grid;
      grid-template-columns: 7rem 8rem 12rem 1fr 10rem 12rem 12rem 14rem;
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

      img {
         height: 3.6rem;
         width: 3.6rem;
         border-radius: 0.75rem;
      }
   }

   .email {
      text-transform: lowercase;
   }
`;
