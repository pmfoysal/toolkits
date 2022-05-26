import styled from 'styled-components';

export const SocialSigninContainer = styled.div`
   width: 100%;
   display: grid;
   gap: 2rem;
   grid-template-columns: repeat(4, 1fr);

   @media screen and (max-width: 500px) {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
   }
`;
