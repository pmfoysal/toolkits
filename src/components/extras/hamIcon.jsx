import React from 'react';
import {HamIconContainer, HamIconLine} from './hamIcon.styled';

export default function HamIcon({active, setActive}) {
   function clickHandler() {
      setActive(!active);
   }

   return (
      <HamIconContainer onClick={clickHandler} className={active}>
         <HamIconLine></HamIconLine>
      </HamIconContainer>
   );
}
