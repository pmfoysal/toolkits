import React from 'react';
import BlogCard from '@helpers/blogCard';
import MainContainer from '@shared/mainContainer';
import {HomeBlogsContainer} from './homeBlogs.styled';

export default function HomeBlogs() {
   return (
      <HomeBlogsContainer>
         <MainContainer>
            <BlogCard />
            <BlogCard />
            <BlogCard />
         </MainContainer>
      </HomeBlogsContainer>
   );
}
