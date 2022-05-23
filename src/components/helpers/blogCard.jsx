import ImgLoader from '@shared/imgLoader';
import {useNavigate} from 'react-router-dom';
import React, {useEffect, useRef} from 'react';
import {BlogCardContainer, BlogCardDetails, BlogCardPara, BlogCardTags, BlogCardTitle, BlogCardImage} from './bloCard.styled';

export default function BlogCard() {
   const data = {
      author: 'pmfoysal',
      body: 'Javascript is a Scripting language. It is mostly abbreviated as JS. It can be said that Javascript is the updated version of the ECMA script. Javascript is a high-level programming language that uses the concept of Oops but it is based on prototype inheritance. <br /> <br /> NodeJS is a cross-platform and opensource Javascript runtime environment that allows the javascript to be run on the server-side. Nodejs allows Javascript code to run outside the browser. Nodejs comes with a lot of modules and mostly used in web development. <br /> <br /> <strong>JavaScript:</strong> <br /> <strong>1. </strong> Javascript is a programming language that is used for writing scripts on the website. <br /> <strong>2. </strong> Javascript can only be run in the browsers. <br /> <strong>3. </strong> It is basically used on the client-side. <br /> <strong>4. </strong> Javascript is capable enough to add HTML and play with the DOM. <br /> <strong>5. </strong> Javascript can run in any browser engine as like JS core in safari and Spidermonkey in Firefox. <br /> <strong>6. </strong> Javascript is used in frontend development. <br /> <strong>7. </strong> Some of the javascript frameworks are RamdaJS, TypedJS, etc. <br /> <br /> <strong>NodeJS:</strong> <br /> <strong>1. </strong> NodeJS is a Javascript runtime environment. <br /> <strong>2. </strong> We can run Javascript outside the browser with the help of NodeJS. <br /> <strong>3. </strong> It is mostly used on the server-side. <br /> <strong>4. </strong> Nodejs does not have capability to add HTML tags. <br /> <strong>5. </strong> V8 is the Javascript engine inside of node.js that parses and runs Javascript. <br /> <strong>6. </strong> Nodejs is used in server-side development. <br /> <strong>7. </strong> Some of the Nodejs modules are Lodash, express etc. These modules are to be imported from npm.',
      date: 1655661600000,
      image: 'https://raw.githubusercontent.com/pmfoysal/data/main/images/blog-001.jpg',
      title: 'What is the difference between JavaScript and NodeJS?',
      _id: '62751964288c134238294053',
   };

   const navigate = useNavigate();
   const descRef = useRef();
   const {_id, author, date, title, body, image} = data;

   useEffect(() => {
      descRef.current.innerHTML = `
      ${body.slice(0, 140)}... <button id=${_id}>read more</button>`;
      document.getElementById(_id).addEventListener('click', () => {
         navigate(`/blogs/${_id}`);
         window.scrollTo({top: 0});
      });
   }, [body, _id, navigate]);

   return (
      <BlogCardContainer>
         <BlogCardImage>
            <ImgLoader src={image} />
         </BlogCardImage>
         <BlogCardDetails>
            <BlogCardTags>
               <span className='date'>{new Date(date).toLocaleDateString(undefined, {dateStyle: 'full'})}</span>
               &bull;
               <span className='author'>@{author}</span>
            </BlogCardTags>
            <BlogCardTitle>{title}</BlogCardTitle>
            <BlogCardPara ref={descRef}></BlogCardPara>
         </BlogCardDetails>
      </BlogCardContainer>
   );
}
