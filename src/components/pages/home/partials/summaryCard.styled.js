import {Icon} from '@iconify/react';
import styled from 'styled-components';

export const SummaryCardContainer = styled.summary`
   display: flex;
   align-items: center;
   flex-direction: column;
   justify-content: center;
   gap: 1rem;
   background-color: ${({theme}) => theme.back.card0};
   width: 34rem;
   padding: 4rem;
   border-radius: 3rem;
`;

export const SummaryCardIcon = styled(Icon)`
   height: 6rem;
   width: auto;
   color: ${({theme}) => theme.back.accent};
`;

export const SummaryCardTitle = styled.h1`
   font-size: 3.6rem;
   color: ${({theme}) => theme.text.main.head};
   margin: 3rem 0 1rem;
`;

export const SummaryCardPara = styled.p`
   text-transform: capitalize;
   color: ${({theme}) => theme.text.main.para};
   font-weight: 550;
   font-size: 2rem;
`;
