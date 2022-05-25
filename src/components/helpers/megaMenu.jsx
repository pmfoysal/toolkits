import React from 'react';
import PageLink from '@shared/pageLink';
import {MegaMenuContainer, MegaMenuTitle} from './megaMenu.styled';

export default function MegaMenu({name, data = []}) {
   return (
      <MegaMenuContainer>
         <MegaMenuTitle>{name}</MegaMenuTitle>
         {data.map((item, index) => (
            <PageLink small name={item?.name} link={item?.link} key={`megamenu-${index}`} />
         ))}
      </MegaMenuContainer>
   );
}
