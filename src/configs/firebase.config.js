import {getAuth} from 'firebase/auth';
import {initializeApp} from 'firebase/app';

const firebaseConfig = {
   appId: process.env.REACT_APP_APPID,
   apiKey: process.env.REACT_APP_APIKEY,
   projectId: process.env.REACT_APP_PROJECTID,
   authDomain: process.env.REACT_APP_AUTHDOMAIN,
   storageBucket: process.env.REACT_APP_STORAGEBUCKET,
   messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
