import React from 'react';
import SectionTitle from '@helpers/sectionTitle';
import HomeBanner from './partials/homeBanner';
import HomeProducts from './partials/homeProducts';
import HomeSummary from './partials/homeSummary';
import HomeBlogs from './partials/homeBlogs';
import HomeSubscribe from './partials/homeSubscribe';
import HomeReviews from './partials/homeReviews';

export default function Home() {
   return (
      <React.Fragment>
         <HomeBanner />
         <HomeSummary />
         {/* <SectionTitle>latest products</SectionTitle> */}
         {/* <HomeProducts /> */}
         {/* <SectionTitle>latest blogs</SectionTitle> */}
         {/* <HomeBlogs /> */}
         {/* <SectionTitle>customers review</SectionTitle> */}
         {/* <HomeReviews /> */}
         {/* <HomeSubscribe /> */}
      </React.Fragment>
   );
}
