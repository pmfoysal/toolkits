import React, {useEffect, useRef, useState} from 'react';
import ImgLoader from '@shared/imgLoader';
import {ProjectCardContainer, ProjectCardImage, ProjectCardText} from './projectCard.styled';

export default function ProjectCard() {
   const tagRef = useRef();
   const [size, setSize] = useState(0);

   const data = {
      name: 'GroceryMenus',
      src: 'https://raw.githubusercontent.com/pmfoysal/data/main/images/project/project-011.png',
      link: 'https://pmphas11.web.app',
   };

   const {name, link, src} = data;

   useEffect(() => {
      const parent = tagRef.current.offsetHeight;
      const child = tagRef.current.querySelector('img').offsetHeight;
      setSize(child - parent);
   }, []);

   return (
      <ProjectCardContainer href={link} target='_blank' size={size}>
         <ProjectCardImage ref={tagRef}>
            <ImgLoader src={src} alt='project' />
         </ProjectCardImage>
         <ProjectCardText>{name}</ProjectCardText>
      </ProjectCardContainer>
   );
}
