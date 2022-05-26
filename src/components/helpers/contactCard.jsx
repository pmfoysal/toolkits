import Button from '@shared/button';
import React from 'react';
import {ContactCardContainer, ContactCardIcon, ContactCardPara, ContactCardTitle} from './contactCard.styled';

export default function ContactCard({data}) {
   const {icon, title, para, button} = data;

   return (
      <ContactCardContainer>
         <ContactCardIcon icon={icon} />
         <ContactCardTitle>{title}</ContactCardTitle>
         <ContactCardPara>{para}</ContactCardPara>
         <br />
         <br />
         <Button name={button.name} sub round />
      </ContactCardContainer>
   );
}
