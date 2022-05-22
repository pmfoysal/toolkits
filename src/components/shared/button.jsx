import React from 'react';
import {ButtonContainer} from './button.styled';

export default function Button({name, wide, round, sub, danger, success, neutral, medium, small}) {
   return (
      <ButtonContainer
         wide={wide}
         round={round}
         sub={sub}
         danger={danger}
         success={success}
         neutral={neutral}
         medium={medium}
         small={small}
      >
         {name}
      </ButtonContainer>
   );
}
