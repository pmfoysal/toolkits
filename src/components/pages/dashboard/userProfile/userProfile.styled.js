import styled from 'styled-components';

export const UserProfileContainer = styled.article`
   display: flex;
   align-items: center;
   flex-direction: column;
   justify-content: center;
`;

export const UserProfileImage = styled.figure`
   height: 18rem;
   width: 18rem;
   border-radius: 100%;
   overflow: hidden;
   background-color: ${({theme}) => theme.back.card0};
`;

export const UserProfileName = styled.h1`
   font-size: 3rem;
   margin-top: 2rem;
   color: ${({theme}) => theme.text.main.head};
   text-align: center;
`;

export const UserProfileEmail = styled.h3`
   font-size: 1.6rem;
   font-weight: 550;
   margin-top: 0.5rem;
   color: ${({theme}) => theme.text.main.para};
   text-transform: lowercase;
   text-align: center;
`;

export const UserProfileRole = styled.h3`
   font-size: 1.6rem;
   font-weight: 550;
   margin-top: 1rem;
   color: ${({theme}) => theme.text.main.para};
   text-align: center;

   span {
      line-height: inherit;
      font-size: inherit;
      font-weight: inherit;
      color: ${({theme}) => theme.back.accent};
   }
`;

export const UserProfileForm = styled.div`
   width: 60rem;
   display: flex;
   flex-direction: column;
   gap: 2rem;
   padding: 5rem 0 3rem;

   @media screen and (max-width: 1050px) {
      width: 100%;
      padding: 4rem 0 3rem;
   }
`;

export const ProfileInputGroup = styled.div`
   display: grid;
   grid-template-columns: repeat(2, 1fr);
   gap: 2rem;

   @media screen and (max-width: 500px) {
      grid-template-columns: 1fr;
   }
`;

export const ProfileButtons = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;
   gap: 2rem;
   margin-top: 2rem;
`;
