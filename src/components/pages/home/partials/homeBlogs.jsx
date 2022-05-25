import React from 'react';
import BlogCard from '@helpers/blogCard';
import MainContainer from '@shared/mainContainer';
import {HomeBlogsContainer} from './homeBlogs.styled';
import useBlogs from '@hooks/useBlogs';
import PageLoader from '@helpers/pageLoader';

export default function HomeBlogs() {
   const {data: blogs, isLoading} = useBlogs();

   return (
      <HomeBlogsContainer>
         {isLoading ? (
            <PageLoader />
         ) : (
            <MainContainer>
               {blogs?.slice(0, 3)?.map(data => (
                  <BlogCard data={data} key={data._id} />
               ))}
            </MainContainer>
         )}
      </HomeBlogsContainer>
   );
}
