import React from 'react';
import MainContainer from './mainContainer';
import {FooterContainer, FooterLink, FooterPara} from './footer.styled';

export default function Footer() {
   const year = new Date().getFullYear();
   return (
      <FooterContainer>
         <MainContainer>
            <FooterPara>
               &copy; {year} &bull; all rights reserved &bull;
               <FooterLink href='https://facebook.com/pmfoysalz' target='_blank'>
                  foysal ahmmed
               </FooterLink>
            </FooterPara>
         </MainContainer>
      </FooterContainer>
   );
}
