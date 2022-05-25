import React from 'react';
import Logo from '@shared/logo';
import {MegaFooterContainer, MegaFooterIconArea} from './megaFooter.styled';
import MainContainer from '@shared/mainContainer';

export default function MegaFooter() {
   function generateMenu(megaData) {
      const arr = [];
      for (const menu in megaData) {
         arr.push(<MegaMenu name={menu} data={megaData[menu]} key={`megamenu-${menu}`} />);
      }
      return arr;
   }

   return (
      <MegaFooterContainer>
         <MainContainer>
            <MegaFooterIconArea>
               <Logo />
               <p>
                  Suitable for Grocery Market, Store, Organic Food, Online Shop, Agriculture and Natural Foods related management
                  Website.
               </p>
            </MegaFooterIconArea>
            {generateMenu(menuData)}
         </MainContainer>
      </MegaFooterContainer>
   );
}
