import styled from 'styled-components';

export const BlogDetailsContainer = styled.section`
   padding: 8rem 0.5rem;
`;

export const BlogDetailsContent = styled.article`
   max-width: 120rem;
   margin: 0 auto;
`;

export const BlogDetailsImage = styled.figure`
   width: 100%;
   margin: 0 auto;
   height: auto;
   aspect-ratio: 2/1.2;
   border-radius: 2rem;
   overflow: hidden;
   background-color: ${({theme}) => theme.back.card0};

   @media screen and (max-width: 450px) {
      aspect-ratio: 2/1.5;
   }
`;

export const BlogDetailsTitle = styled.h1`
   font-size: 3.6rem;
   padding-top: 4rem;
   text-transform: none;
   color: ${({theme}) => theme.text.main.head};

   @media screen and (max-width: 500px) {
      text-align: center;
   }

   @media screen and (max-width: 400px) {
      font-size: 3rem;
   }
`;

export const BlogDetailsInfo = styled.div`
   display: flex;
   align-items: center;
   gap: 1rem;
   padding: 1.5rem 0;
   flex-wrap: wrap;

   p {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      color: ${({theme}) => theme.text.main.title};
      font-weight: 550;

      span {
         display: flex;
         align-items: center;
         gap: 0.5rem;
         color: ${({theme}) => theme.back.accent};
         font-weight: 550;
         line-height: inherit;

         svg {
            opacity: 0.9;
            height: 0.95em;
         }
      }
   }

   @media screen and (max-width: 500px) {
      text-align: center;
      align-items: center;
      justify-content: center;
   }
`;

export const BlogDetailsLine = styled.div`
   margin: 2.25rem auto 4.5rem;
   height: 0.3rem;
   border-radius: 1rem;
   width: 20rem;
   background-color: ${({theme}) => theme.back.accent};
   opacity: 0.5;
`;

export const BlogDetailsDescription = styled.div`
   background-color: ${({theme}) => theme.back.card0};
   border-radius: 2rem;
   padding: 2rem;

   &,
   * {
      line-height: 1.5;
      font-weight: 400;
      text-transform: none;
      color: ${({theme}) => theme.text.main.para};
   }

   strong {
      font-weight: 700;
      color: ${({theme}) => theme.text.main.title};
   }
`;
