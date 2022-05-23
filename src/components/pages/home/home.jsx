import React from 'react';
import MainContainer from '@shared/mainContainer';
import ImgLoader from '@shared/imgLoader';

export default function Home() {
   return (
      <React.Fragment>
         <div style={{padding: '3rem', fontSize: '3rem', textAlign: 'center', fontWeight: 550}}>
            Welcome to React Starter Project Home Page!
         </div>
         <MainContainer>
            <div style={{padding: '5rem'}}>
               <ImgLoader
                  src='https://images.unsplash.com/photo-1648737155328-0c0012cf2f20?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070'
                  alt='alt'
               />
            </div>
         </MainContainer>
      </React.Fragment>
   );
}
