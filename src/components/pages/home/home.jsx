import React from 'react';
import UserIcon from '@shared/userIcon';
import MainContainer from '@shared/mainContainer';

export default function Home() {
   return (
      <React.Fragment>
         <div style={{padding: '3rem', fontSize: '3rem', textAlign: 'center', fontWeight: 550}}>
            Welcome to React Starter Project Home Page!
         </div>
         <MainContainer>
            <div style={{padding: '5rem'}}>
               <UserIcon />
            </div>
         </MainContainer>
      </React.Fragment>
   );
}
