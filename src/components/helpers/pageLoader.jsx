import React from 'react';
import {useTheme} from 'styled-components';
import {RotatingLines} from 'react-loader-spinner';
import {PageLoaderContainer} from './pageLoader.styled';

export default function PageLoader() {
   const theme = useTheme();

   return (
      <PageLoaderContainer>
         <RotatingLines width='120' strokeColor={theme.back.accent} animationDuration='0.5' />
      </PageLoaderContainer>
   );
}
