import React from 'react';
import SummaryCard from './summaryCard';
import MainContainer from '@shared/mainContainer';
import {HomeSummaryCards, HomeSummaryContainer, HomeSummaryHeading, HomeSummaryTitle} from './homeSummary.styled';
import SummaryBanner from './summaryBanner';

export default function HomeSummary() {
   return (
      <HomeSummaryContainer>
         <MainContainer>
            <HomeSummaryHeading>worldwide trust our company</HomeSummaryHeading>
            <HomeSummaryTitle>our business area, projects and clients</HomeSummaryTitle>
            <HomeSummaryCards>
               <SummaryCard name='countries' icon='subway:world-1' count='120+' />
               <SummaryCard name='projects completed' icon='zondicons:mobile-devices' count='300+' />
               <SummaryCard name='happy clients' icon='fa6-solid:users' count='750+' />
               <SummaryCard name='feedbacks' icon='fa6-solid:ranking-star' count='590+' />
            </HomeSummaryCards>
            <SummaryBanner />
         </MainContainer>
      </HomeSummaryContainer>
   );
}
