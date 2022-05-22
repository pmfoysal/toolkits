import {css, createGlobalStyle} from 'styled-components';

function globalStyle() {
   return css`
      body {
         background-color: ${({theme}) => theme.back.page};
      }

      *::selection {
         background-color: ${({theme}) => theme.back.accent};
         color: ${({theme}) => theme.text.main.head};
      }

      *::-webkit-scrollbar {
         width: 0.625rem;

         @media screen and (max-width: 600px) {
            width: 0;
         }
      }

      *::-webkit-scrollbar-thumb {
         background-color: ${({theme}) => theme.back.accent};
         border-radius: 1rem;
      }

      *::-webkit-scrollbar-track {
         background-color: ${({theme}) => theme.back.card1};
      }

      a {
         color: ${({theme}) => theme.back.accent};

         &:hover {
            opacity: 0.85;
         }
      }
   `;
}

const GlobalStyle = createGlobalStyle`
   ${globalStyle()}
`;

export default GlobalStyle;
