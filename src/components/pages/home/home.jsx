import React from 'react';
import Button from '@shared/button';

export default function Home() {
   return (
      <React.Fragment>
         <div style={{padding: '3rem', fontSize: '3rem', textAlign: 'center', fontWeight: 550}}>
            Welcome to React Starter Project Home Page!
         </div>
         <div style={{padding: '10rem'}}>
            <Button name='see more' />
         </div>
      </React.Fragment>
   );
}
