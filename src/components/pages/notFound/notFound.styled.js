import styled from 'styled-components';

export const NotFoundContainer = styled.section`
   width: 100%;
   padding: 8rem 0;

   & > * {
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      flex-direction: column;
      gap: 5rem;

      img {
         width: 75rem;
         height: auto;
      }

      @media screen and (max-width: 900px) {
         img {
            width: 90%;
         }
      }
   }
`;
