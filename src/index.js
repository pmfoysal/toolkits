import React from 'react';
import App from '@app/app';
import ReactDOM from 'react-dom';
import reportWebVitals from '@test/reportWebVitals';

ReactDOM.render(
   <React.StrictMode>
      <App />
   </React.StrictMode>,
   document.querySelector("[data-app='pmfoysal']")
);

reportWebVitals();
