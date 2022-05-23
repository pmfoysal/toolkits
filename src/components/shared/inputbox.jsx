import React from 'react';
import {InputboxContainer} from './inputbox.styled';

export default function Inputbox({name, type, value, handler, holder, line, ...rest}) {
   function inputHandler(event) {
      if (handler) handler(event);
      else return false;
   }

   return (
      <InputboxContainer>
         &nbsp;{name}
         {type ? (
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
         ) : (
            <textarea
               autoComplete='false'
               spellCheck='false'
               value={value}
               data-has={Boolean(value?.length)}
               placeholder={holder}
               onChange={inputHandler}
               rows={line || 1}
               {...rest}
            ></textarea>
         )}
      </InputboxContainer>
   );
}
