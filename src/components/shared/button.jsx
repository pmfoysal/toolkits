import React from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import {ButtonContainer} from './button.styled';

export default function Button({name, wide, round, sub, danger, success, neutral, medium, small, link}) {
   const {pathname} = useLocation();
   const navigate = useNavigate();

   function clickHandler() {
      if (link && pathname !== link) navigate(link);
   }

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
         onClick={clickHandler}
      >
         {name}
      </ButtonContainer>
   );
}
