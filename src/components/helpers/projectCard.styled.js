import styled from 'styled-components';

export const ProjectCardContainer = styled.a`
   width: 100%;
   padding: 2rem;
   border-radius: 2rem;
   background-color: ${({theme}) => theme.back.card0};

   &:hover {
      opacity: 1;

      img {
         transform: translateY(${({size}) => size * -1 + 'px'});
      }
   }
`;

export const ProjectCardImage = styled.figure`
   width: 100%;
   aspect-ratio: 1.5/2;
   overflow: hidden;
   border-radius: 2rem;
   background-color: ${({theme}) => theme.back.page};

   img {
      transition: 2s linear;
      width: 100%;
      height: unset;
      object-fit: unset;
   }
`;

export const ProjectCardText = styled.span`
   text-align: center;
   width: 100%;
   font-size: 2rem;
   font-weight: 550;
   color: ${({theme}) => theme.text.main.para};
   padding-top: 2rem;
`;
