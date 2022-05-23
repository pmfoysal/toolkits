import React, {useState} from 'react';
import {useTheme} from 'styled-components';
import {RotatingLines} from 'react-loader-spinner';
import {ImgLoaderImg, ImgLoaderSpinner} from './imgLoader.styled';

export default function ImgLoader({src, alt}) {
   const theme = useTheme();
   const [loading, setLoading] = useState(true);

   function loadHandler() {
      setLoading(false);
   }

   return (
      <React.Fragment>
         <ImgLoaderImg src={src} alt={alt} onLoad={loadHandler} />
         {loading && (
            <ImgLoaderSpinner>
               <RotatingLines width='50' strokeColor={theme.back.accent} animationDuration='0.5' />
            </ImgLoaderSpinner>
         )}
      </React.Fragment>
   );
}
