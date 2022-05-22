import React from 'react';
import {NavLinksContainer} from './navLinks.styled';
import PageLink from './pageLink';

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
