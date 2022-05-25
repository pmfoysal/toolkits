import Button from '@shared/button';
import ImgLoader from '@shared/imgLoader';
import MainContainer from '@shared/mainContainer';
import React from 'react';
import image from '@images/chair.webp';
import {
   HomeBannerContainer,
   HomeBannerContent,
   HomeBannerHeading,
   HomeBannerImage,
   HomeBannerTexts,
   HomeBannerTitle,
} from './homeBanner.styled';

export default function HomeBanner() {
   return (
      <HomeBannerContainer>
         <MainContainer>
            <HomeBannerContent>
               <HomeBannerTexts>
                  <HomeBannerTitle>new technology and build</HomeBannerTitle>
                  <HomeBannerHeading>latest & powerfull engines for you</HomeBannerHeading>
                  <Button name='order now' round link='/products' />
               </HomeBannerTexts>
               <HomeBannerImage>
                  <ImgLoader src={image} alt='banner' />
               </HomeBannerImage>
            </HomeBannerContent>
         </MainContainer>
      </HomeBannerContainer>
   );
}
