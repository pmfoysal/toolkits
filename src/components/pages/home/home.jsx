import React from 'react';
import NavLinks from '@shared/navLinks';

export default function Home() {
   return (
      <React.Fragment>
         <div style={{padding: '3rem', fontSize: '3rem', textAlign: 'center', fontWeight: 550}}>
            Welcome to React Starter Project Home Page!
         </div>
         <div style={{padding: '10rem'}}>
            <NavLinks />
         </div>
      </React.Fragment>
   );
}
