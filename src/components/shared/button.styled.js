import styled, {css} from 'styled-components';

export const ButtonContainer = styled.button`
   width: ${({wide}) => (wide ? '100%' : 'unset')};
   border-radius: ${({round}) => (round ? '10rem' : '0.75rem')};
   border: 0.2rem solid;
   text-transform: capitalize;
   font-weight: 550;
   line-height: 1;
   transition: 0.1s ease;
   z-index: 3;
   ${({medium, small}) => setSize(medium, small)};
   ${({theme, sub, danger, success, neutral}) => setColor(theme, sub, danger, success, neutral)};

   &:hover:not(:disabled) {
      opacity: 0.85;
   }

   &:active:not(:disabled) {
      transform: scale(0.95);
      opacity: 0.75;
   }

   &:disabled {
      opacity: 0.5;
      cursor: default;
   }
`;

function setSize(medium, small) {
   if (small) {
      return css`
         font-size: 1.3rem;
         padding: 0.4rem 0.9rem;
         height: unset;
         border-width: 0.1rem;
         border-radius: 10rem;
      `;
   } else if (medium) {
      return css`
         font-size: 1.4rem;
         padding: 0 3rem;
         height: 3.8rem;
      `;
   }
   return css`
      font-size: 1.5rem;
      padding: 0 4rem;
      height: 4.8rem;
   `;
}

function setColor(theme, sub, danger, success, neutral) {
   if (danger) {
      return css`
         border-color: #ff4500;
         background-color: ${sub ? 'transparent' : '#ff4500'};
         color: ${sub ? '#ff4500' : 'white'};

         &:hover {
            background-color: #ff4500;
            color: white;
         }
      `;
   } else if (success) {
      return css`
         border-color: #00dd00;
         background-color: ${sub ? 'transparent' : '#00dd00'};
         color: ${sub ? '#00dd00' : theme.text.main.head};

         &:hover {
            background-color: #00dd00;
            color: ${theme.text.main.head};
         }
      `;
   } else if (neutral) {
      return css`
         border-color: ${theme.text.main.head};
         background-color: ${sub ? 'transparent' : theme.text.main.head};
         color: ${sub ? theme.text.main.head : theme.text.sub.head};

         &:hover {
            background-color: ${theme.text.main.head};
            color: ${theme.text.sub.head};
         }
      `;
   }
   return css`
      border-color: ${theme.back.accent};
      background-color: ${sub ? 'transparent' : theme.back.accent};
      color: ${sub ? theme.back.accent : theme.text.main.head};

      &:hover {
         background-color: ${theme.back.accent};
         color: ${theme.text.main.head};
      }
   `;
}
