import React from 'react';
import {Icon} from '@iconify/react';
import {SocialIconContainer} from './socialIcon.styled';

export default function SocialIcon({icon, handler}) {
   return (
      <SocialIconContainer onClick={handler}>
         <Icon icon={icon} />
      </SocialIconContainer>
   );
}
