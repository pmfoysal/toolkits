import React from 'react';
import {ButtonContainer} from './button.styled';
import {useLocation, useNavigate} from 'react-router-dom';

export default function Button({name, wide, round, sub, danger, success, neutral, medium, small, link, handler, ...rest}) {
   const {pathname} = useLocation();
   const navigate = useNavigate();

   function clickHandler() {
      if (handler) handler();
      else {
         if (link && pathname !== link) navigate(link);
      }
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
         {...rest}
      >
         {name}
      </ButtonContainer>
   );
}
