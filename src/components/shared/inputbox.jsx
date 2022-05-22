import React from 'react';
import {InputboxContainer} from './inputbox.styled';

export default function Inputbox({name, type, value, handler, holder, ...rest}) {
   function inputHandler() {
      if (handler) handler();
      else return false;
   }

   return (
      <InputboxContainer>
         &nbsp;{name}
         <input
            autoComplete='false'
            spellCheck='false'
            type={type}
            value={value}
            data-has={Boolean(value?.length)}
            placeholder={holder}
            onChange={inputHandler}
            {...rest}
         />
      </InputboxContainer>
   );
}
