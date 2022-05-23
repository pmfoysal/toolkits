import React from 'react';
import App from 'app/app';
import 'styles/scss/reset.scss';
import ReactDOM from 'react-dom/client';
import 'react-toastify/dist/ReactToastify.css';
import GlobalStyle from '@global/global.styled';
import reportWebVitals from 'tests/reportWebVitals';
import AppWrapper from 'components/helpers/appWrapper';
import * as serviceWorkerRegistration from 'tests/serviceWorkerRegistration';

const pmApp = ReactDOM.createRoot(document.querySelector("[data-app='pmfoysal']"));

pmApp.render(
   <React.StrictMode>
      <AppWrapper>
         <GlobalStyle />
         <App />
      </AppWrapper>
   </React.StrictMode>
);

reportWebVitals();
serviceWorkerRegistration.unregister();
