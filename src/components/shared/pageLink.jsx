import React from 'react';
import {PageLinkContainer} from './pageLink.styled';

export default function PageLink({name, link, small}) {
   return (
      <PageLinkContainer to={link} small={small}>
         {name}
      </PageLinkContainer>
   );
}
