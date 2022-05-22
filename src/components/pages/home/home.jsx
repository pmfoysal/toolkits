import React from 'react';
import Inputbox from '@shared/inputbox';

export default function Home() {
   return (
      <React.Fragment>
         <div style={{padding: '3rem', fontSize: '3rem', textAlign: 'center', fontWeight: 550}}>
            Welcome to React Starter Project Home Page!
         </div>
         <div style={{padding: '10rem'}}>
            <Inputbox name='first name' line='10' holder='ex: john' />
         </div>
      </React.Fragment>
   );
}
