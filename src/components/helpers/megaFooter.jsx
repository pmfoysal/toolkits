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
                  ToolKits is the best parts shop for your car accessories. What kind of parts do you need? you can get here all
                  latest card parts!
               </p>
            </MegaFooterIconArea>
            {generateMenu(menuData)}
         </MainContainer>
      </MegaFooterContainer>
   );
}
