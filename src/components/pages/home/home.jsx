import React from 'react';
import MainContainer from '@shared/mainContainer';
import BlogCard from '@helpers/blogCard';

export default function Home() {
   return (
      <React.Fragment>
         <div style={{padding: '3rem', fontSize: '3rem', textAlign: 'center', fontWeight: 550}}>
            Welcome to React Starter Project Home Page!
         </div>
         <MainContainer>
            <div style={{padding: '5rem'}}>
               <BlogCard />
            </div>
         </MainContainer>
      </React.Fragment>
   );
}
