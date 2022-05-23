import React from 'react';
import PageLink from './pageLink';
import {NavLinksContainer} from './navLinks.styled';

export default function NavLinks() {
   return (
      <NavLinksContainer>
         <PageLink name='home' link='/' />
         <PageLink name='portfolio' link='/portfolio' />
         <PageLink name='products' link='/products' />
         <PageLink name='blogs' link='/blogs' />
         <PageLink name='contact' link='/contact' />
      </NavLinksContainer>
   );
}
