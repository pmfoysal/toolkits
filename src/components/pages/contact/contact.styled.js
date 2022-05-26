import styled, {css} from 'styled-components';

export const ContactContainer = styled.section`
   padding: 8rem 0;
`;

export const ContactContent = styled.div`
   display: flex;
   flex-direction: column;
   gap: 8rem;
   max-width: 100rem;
   margin: 0 auto;
`;

export const ContactTouchArea = styled.article`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   width: 100%;
`;

export const ContactFormBg = styled.div`
   width: 100%;
   margin-top: 5rem;
   padding: 8rem;
   border-radius: 2.5rem;
   background-color: ${({theme}) => theme.back.card0};

   @media screen and (max-width: 1000px) {
      padding: 5rem;
   }

   @media screen and (max-width: 500px) {
      padding: 3rem 2rem;
   }
`;

export const ContactForm = styled.div`
   display: flex;
   flex-direction: column;
   gap: 2.5rem;
   width: 100%;
   padding: 5rem 6rem;
   border-radius: 2.5rem;
   background-color: ${({theme}) => theme.back.page};
   box-shadow: ${({theme}) => theme.back.shadow1};

   @media screen and (max-width: 600px) {
      padding: 4rem;
   }

   @media screen and (max-width: 400px) {
      padding: 3rem 2rem;
   }
`;

export const ContactTouchTitle = styled.h1`
   font-size: 3.2rem;
   color: ${({theme}) => theme.text.main.head};
   margin-bottom: 2rem;
   text-align: center;
`;

export const ContactPara = styled.p`
   max-width: 70rem;
   color: ${({theme}) => theme.text.main.para};
   text-align: center;
`;

export const ContactTouchCards = styled.div`
   display: grid;
   grid-template-columns: repeat(2, 1fr);
   gap: 5rem;
   width: 100%;
   margin-top: 5rem;

   @media screen and (max-width: 750px) {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
   }

   @media screen and (max-width: 500px) {
      gap: 4rem;
   }
`;

export const ContactFormInputGroup = styled.span`
   display: grid;
   grid-template-columns: repeat(2, 1fr);
   gap: 2.5rem;

   @media screen and (max-width: 700px) {
      grid-template-columns: repeat(1, 1fr);
   }
`;

export const ContactFormButtons = styled.div`
   width: 100%;
   display: flex;
   align-items: center;
   justify-content: center;
   gap: 3rem;

   @media screen and (max-width: 450px) {
      flex-wrap: wrap;
      gap: 2rem;
   }
`;

export const ContactLine = styled.div`
   width: 25rem;
   height: 0.3rem;
   border-radius: 2rem;
   background-color: ${({theme}) => theme.back.accent};
   opacity: 0.3;
   margin: 0 auto;
`;
