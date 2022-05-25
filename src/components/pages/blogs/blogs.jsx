import BlogCard from '@helpers/blogCard';
import PageLoader from '@helpers/pageLoader';
import useBlogs from '@hooks/useBlogs';
import MainContainer from '@shared/mainContainer';
import React from 'react';
import {BlogsContainer, BlogsContent} from './blogs.styled';

export default function Blogs() {
   const {data: blogs, isLoading} = useBlogs();

   return (
      <BlogsContainer>
         <MainContainer>
            {isLoading ? (
               <PageLoader />
            ) : (
               <BlogsContent>
                  {blogs?.map(data => (
                     <BlogCard data={data} key={data._id} />
                  ))}
               </BlogsContent>
            )}
         </MainContainer>
      </BlogsContainer>
   );
}
