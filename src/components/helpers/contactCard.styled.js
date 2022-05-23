import {Icon} from '@iconify/react';
import styled from 'styled-components';

export const ContactCardContainer = styled.summary`
   width: 100%;
   padding: 3rem;
   border-radius: 2rem;
   background-color: ${({theme}) => theme.back.page};
   box-shadow: ${({theme}) => theme.back.shadow1};
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   text-align: center;
`;

export const ContactCardIcon = styled(Icon)`
   height: 3.6rem;
   width: auto;
   color: ${({theme}) => theme.text.main.title};
`;

export const ContactCardTitle = styled.h1`
   font-size: 2.2rem;
   color: ${({theme}) => theme.text.main.head};
   font-weight: 550;
   margin: 1rem 0;
`;

export const ContactCardPara = styled.p`
   color: ${({theme}) => theme.text.main.para};
   max-width: 30rem;
`;

export const ContactCardButton = styled.button`
   margin-top: 2rem;
   height: 4.5rem;
   padding: 0 2.5rem;
   display: flex;
   align-items: center;
   justify-content: center;
   font-size: 1.5rem;
   text-transform: capitalize;
   font-weight: 550;
   background-color: ${({theme}) => theme.back.accent};
   color: ${({theme}) => theme.text.sub.head};
   border-radius: 10rem;
   transition: 0.1s ease;

   &:hover {
      opacity: 0.85;
   }

   &:active {
      transform: scale(0.95);
   }
`;
