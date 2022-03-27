import React from 'react';
import App from '@app/app';
import ReactDOM from 'react-dom';
import '@commonStyle/reset.scss';
import AppWrapper from '@helper/appWrapper';
import reportWebVitals from '@test/reportWebVitals';
import * as serviceWorkerRegistration from '@test/serviceWorkerRegistration';

ReactDOM.render(
   <React.StrictMode>
      <AppWrapper>
         <App />
      </AppWrapper>
   </React.StrictMode>,
   document.querySelector("[data-app='pmfoysal']")
);

serviceWorkerRegistration.register();
reportWebVitals();
