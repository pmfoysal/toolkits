import styled from 'styled-components';

export const InputboxContainer = styled.label`
   display: flex;
   flex-direction: column;
   gap: 1rem;
   line-height: 1;
   font-size: 1.5rem;
   text-transform: capitalize;
   color: ${({theme}) => theme.text.main.para};

   input {
      height: 4.5rem;
      width: 100%;
      border-radius: 0.75rem;
      border: 0.2rem solid ${({theme}) => theme.back.border};
      padding: 0 1.5rem;
      color: ${({theme}) => theme.text.main.head};
      font-weight: 550;
      transition: 0.1s ease;

      &:focus {
         border-color: ${({theme}) => theme.back.accent};
         background-color: ${({theme}) => theme.back.page};
         box-shadow: 0 0 0 0.3rem ${({theme}) => theme.back.page};
      }

      &[data-has='true'] {
         background-color: ${({theme}) => theme.back.page};
      }
   }

   textarea {
      width: 100%;
      border-radius: 0.75rem;
      border: 0.2rem solid ${({theme}) => theme.back.border};
      padding: 1.5rem;
      color: ${({theme}) => theme.text.main.head};
      font-weight: 550;
      line-height: 1.5;
      transition: 0.1s ease;

      ::-webkit-scrollbar {
         width: 0;
      }

      &:focus {
         border-color: ${({theme}) => theme.back.accent};
         background-color: ${({theme}) => theme.back.page};
         box-shadow: 0 0 0 0.3rem ${({theme}) => theme.back.page};
      }

      &[data-has='true'] {
         background-color: ${({theme}) => theme.back.page};
      }
   }
`;
