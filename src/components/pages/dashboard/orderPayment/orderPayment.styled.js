import styled from 'styled-components';

export const OrderPaymentContainer = styled.section``;

export const OrderPaymentTitle = styled.h1`
   font-size: 3rem;
   color: ${({theme}) => theme.text.main.head};
   text-align: center;
   padding: 2rem 0 4rem;
`;

export const OrderPaymentContent = styled.article`
   display: flex;
   flex-direction: column;
   gap: 2rem;
   max-width: 60rem;
   margin: 0 auto;
`;

export const OrderPaymentInputGroup = styled.div`
   display: grid;
   grid-template-columns: repeat(2, 1fr);
   gap: 2rem;

   @media screen and (max-width: 450px) {
      grid-template-columns: 1fr;
   }
`;
