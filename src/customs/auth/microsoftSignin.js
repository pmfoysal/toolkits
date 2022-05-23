import popupSignin from './popupSignin';
import {OAuthProvider} from 'firebase/auth';

const provider = new OAuthProvider('microsoft.com');

export default function microsoftSignin() {
   popupSignin(provider);
}
