import styled from 'styled-components';

export const BackdropContainer = styled.section`
   position: fixed;
   top: 0;
   left: 0;
   width: 100%;
   z-index: 100;
   overflow: hidden;
   background-color: rgba(0, 0, 0, 0.4);

   & > * {
      height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
   }
`;
