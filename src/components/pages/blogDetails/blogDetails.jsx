import PageLoader from '@helpers/pageLoader';
import useBlog from '@hooks/useBlog';
import {Icon} from '@iconify/react';
import ImgLoader from '@shared/imgLoader';
import MainContainer from '@shared/mainContainer';
import React, {useEffect, useRef} from 'react';
import {useParams} from 'react-router-dom';
import {
   BlogDetailsContainer,
   BlogDetailsContent,
   BlogDetailsDescription,
   BlogDetailsImage,
   BlogDetailsInfo,
   BlogDetailsLine,
   BlogDetailsTitle,
} from './blogDetails.styled';

export default function BlogDetails() {
   const descRef = useRef();
   const {id: urlId} = useParams();

   const {data: blog = {}, isLoading} = useBlog(urlId);

   const {author, date, title, image, body} = blog;

   useEffect(() => {
      if (body) {
         descRef.current.innerHTML = body;
      }
   }, [body]);

   return (
      <React.Fragment>
         <BlogDetailsContainer>
            <MainContainer>
               {isLoading ? (
                  <PageLoader />
               ) : (
                  <BlogDetailsContent>
                     <BlogDetailsImage>
                        <ImgLoader src={image} />
                     </BlogDetailsImage>
                     <BlogDetailsTitle>{title}</BlogDetailsTitle>
                     <BlogDetailsInfo>
                        <p>
                           <span>
                              <Icon icon='fa6-solid:calendar-check' />
                              Posted on:
                           </span>
                           {new Date(date).toLocaleDateString(undefined, {dateStyle: 'long'})}
                        </p>
                        <p>
                           <span>
                              <Icon icon='fa:user-circle-o' />
                              Author:
                           </span>
                           @{author}
                        </p>
                     </BlogDetailsInfo>
                     <BlogDetailsLine />
                     <BlogDetailsDescription ref={descRef}></BlogDetailsDescription>
                  </BlogDetailsContent>
               )}
            </MainContainer>
         </BlogDetailsContainer>
      </React.Fragment>
   );
}
