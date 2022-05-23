import styled from 'styled-components';

export const AuthContainer = styled.section`
   padding: 8rem 0;
   min-height: calc(100vh - 14.8rem);
   background-color: ${({theme}) => theme.back.card0};
   overflow: hidden;

   &::after {
      content: '';
      position: absolute;
      top: 50%;
      left: 100%;
      transform: translate(-50%, -50%) scale(1.1);
      width: 100vw;
      height: 100vw;
      border-radius: 100%;
      background-color: ${({theme}) => theme.back.page};
   }

   & > * {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      z-index: 3;
      gap: 20rem;
      min-height: calc(100vh - 14.8rem - 16rem);
   }
`;

export const AuthImage = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;

   img {
      width: 50rem;
      height: auto;
   }
`;

export const AuthForm = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   flex-direction: column;
   width: 40rem;
`;

export const AuthLogo = styled.img`
   height: 4.8rem;
   width: auto;
`;

export const AuthHead = styled.h1`
   font-size: 3.6rem;
   color: ${({theme}) => theme.back.accent};
   margin-top: 2rem;
`;

export const AuthTitle = styled.h2`
   font-size: 2.4rem;
   color: ${({theme}) => theme.text.main.para};
   font-weight: 550;
   margin-top: 1.5rem;
   margin-bottom: 0.5rem;
`;

export const AuthPara = styled.p`
   color: ${({theme}) => theme.text.main.para};

   strong {
      font-weight: 700;
      text-transform: capitalize;
   }
`;

export const AuthInputArea = styled.div`
   display: flex;
   flex-direction: column;
   gap: 1.5rem;
   margin-top: 2.5rem;
   width: 100%;
`;

export const AuthOr = styled.div`
   width: 100%;
   display: flex;
   align-items: center;
   justify-content: center;
   gap: 1.25rem;
   width: 60%;
   padding: 2rem 0;

   .line {
      height: 0.2rem;
      flex-grow: 1;
      background-color: ${({theme}) => theme.text.main.head};
      opacity: 0.3;
   }

   .text {
      text-transform: uppercase;
      font-weight: 550;
      color: ${({theme}) => theme.text.main.head};
      opacity: 0.5;
   }
`;
