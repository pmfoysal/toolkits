import React from 'react';
import Button from '@shared/button';
import {SummaryBannerButtons, SummaryBannerContainer, SummaryBannerTexts} from './summaryBanner.styled';

export default function SummaryBanner() {
   return (
      <SummaryBannerContainer>
         <SummaryBannerTexts>
            <h1>have any questions about us or send a product request?</h1>
            <p>please contact us</p>
         </SummaryBannerTexts>
         <SummaryBannerButtons>
            <Button name='request for quote' />
            <Button name='contact us' neutral link='/contact' />
         </SummaryBannerButtons>
      </SummaryBannerContainer>
   );
}
