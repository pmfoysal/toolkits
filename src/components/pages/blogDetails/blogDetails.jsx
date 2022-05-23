import {Icon} from '@iconify/react';
import ImgLoader from '@shared/imgLoader';
import MainContainer from '@shared/mainContainer';
import React, {useEffect, useRef} from 'react';
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
   const blog = {
      author: 'pmfoysal',
      body: 'Javascript is a Scripting language. It is mostly abbreviated as JS. It can be said that Javascript is the updated version of the ECMA script. Javascript is a high-level programming language that uses the concept of Oops but it is based on prototype inheritance. <br /> <br /> NodeJS is a cross-platform and opensource Javascript runtime environment that allows the javascript to be run on the server-side. Nodejs allows Javascript code to run outside the browser. Nodejs comes with a lot of modules and mostly used in web development. <br /> <br /> <strong>JavaScript:</strong> <br /> <strong>1. </strong> Javascript is a programming language that is used for writing scripts on the website. <br /> <strong>2. </strong> Javascript can only be run in the browsers. <br /> <strong>3. </strong> It is basically used on the client-side. <br /> <strong>4. </strong> Javascript is capable enough to add HTML and play with the DOM. <br /> <strong>5. </strong> Javascript can run in any browser engine as like JS core in safari and Spidermonkey in Firefox. <br /> <strong>6. </strong> Javascript is used in frontend development. <br /> <strong>7. </strong> Some of the javascript frameworks are RamdaJS, TypedJS, etc. <br /> <br /> <strong>NodeJS:</strong> <br /> <strong>1. </strong> NodeJS is a Javascript runtime environment. <br /> <strong>2. </strong> We can run Javascript outside the browser with the help of NodeJS. <br /> <strong>3. </strong> It is mostly used on the server-side. <br /> <strong>4. </strong> Nodejs does not have capability to add HTML tags. <br /> <strong>5. </strong> V8 is the Javascript engine inside of node.js that parses and runs Javascript. <br /> <strong>6. </strong> Nodejs is used in server-side development. <br /> <strong>7. </strong> Some of the Nodejs modules are Lodash, express etc. These modules are to be imported from npm.',
      date: 1655661600000,
      image: 'https://raw.githubusercontent.com/pmfoysal/data/main/images/blog-001.jpg',
      title: 'What is the difference between JavaScript and NodeJS?',
      _id: '62751964288c134238294053',
   };

   const {author, date, title, image, body} = blog;

   useEffect(() => {
      descRef.current.innerHTML = body || 'Amazing blog description goes here...';
   }, [body]);

   return (
      <React.Fragment>
         <BlogDetailsContainer>
            <MainContainer>
               <BlogDetailsContent>
                  <BlogDetailsImage>
                     <ImgLoader src={image || 'https://raw.githubusercontent.com/pmfoysal/data/main/images/blog-001.jpg'} />
                  </BlogDetailsImage>
                  <BlogDetailsTitle>{title || 'Amazing Blog Title Goes Here...'}</BlogDetailsTitle>
                  <BlogDetailsInfo>
                     <p>
                        <span>
                           <Icon icon='fa6-solid:calendar-check' />
                           Posted on:
                        </span>
                        {new Date(date || Date.now()).toLocaleDateString(undefined, {dateStyle: 'full'})}
                     </p>
                     <p>
                        <span>
                           <Icon icon='fa:user-circle-o' />
                           Author:
                        </span>
                        @{author || 'unknown'}
                     </p>
                  </BlogDetailsInfo>
                  <BlogDetailsLine />
                  <BlogDetailsDescription ref={descRef}></BlogDetailsDescription>
               </BlogDetailsContent>
            </MainContainer>
         </BlogDetailsContainer>
      </React.Fragment>
   );
}
