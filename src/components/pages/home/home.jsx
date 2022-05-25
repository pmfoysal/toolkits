import React from 'react';
import SectionTitle from '@helpers/sectionTitle';
import HomeBanner from './partials/homeBanner';
import HomeProducts from './partials/homeProducts';
import HomeSummary from './partials/homeSummary';

export default function Home() {
   return (
      <React.Fragment>
         <HomeBanner />
         <HomeSummary />
         <SectionTitle>latest products</SectionTitle>
         <HomeProducts />
      </React.Fragment>
   );
}
