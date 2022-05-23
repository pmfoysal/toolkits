import BlogCard from '@helpers/blogCard';
import MainContainer from '@shared/mainContainer';
import React from 'react';
import {BlogsContainer, BlogsContent} from './blogs.styled';

export default function Blogs() {
   return (
      <BlogsContainer>
         <MainContainer>
            <BlogsContent>
               <BlogCard />
               <BlogCard />
               <BlogCard />
               <BlogCard />
               <BlogCard />
               <BlogCard />
            </BlogsContent>
         </MainContainer>
      </BlogsContainer>
   );
}
