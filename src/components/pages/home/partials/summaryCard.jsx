import React from 'react';
import {SummaryCardContainer, SummaryCardIcon, SummaryCardPara, SummaryCardTitle} from './summaryCard.styled';

export default function SummaryCard({icon, count, name}) {
   return (
      <SummaryCardContainer>
         <SummaryCardIcon icon={icon} />
         <SummaryCardTitle>{count}</SummaryCardTitle>
         <SummaryCardPara>{name}</SummaryCardPara>
      </SummaryCardContainer>
   );
}
