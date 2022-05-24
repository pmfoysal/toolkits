import ImgLoader from '@shared/imgLoader';
import React, {useEffect, useRef, useState} from 'react';
import {ProjectCardContainer, ProjectCardImage, ProjectCardText} from './projectCard.styled';

export default function ProjectCard({data}) {
   const tagRef = useRef();
   const [size, setSize] = useState(0);

   const {name, link, src} = data;

   useEffect(() => {
      const parent = tagRef.current.offsetHeight;
      const child = tagRef.current.querySelector('img').offsetHeight;
      if (parent < child) setSize(child - parent);
      else setSize(0);
   }, [tagRef.current]);

   return (
      <ProjectCardContainer href={link} target='_blank' size={size}>
         <ProjectCardImage ref={tagRef}>
            <ImgLoader src={src} alt='project' />
         </ProjectCardImage>
         <ProjectCardText>{name}</ProjectCardText>
      </ProjectCardContainer>
   );
}
