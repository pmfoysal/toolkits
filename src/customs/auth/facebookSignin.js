import popupSignin from './popupSignin';
import {FacebookAuthProvider} from 'firebase/auth';

const provider = new FacebookAuthProvider();

export default function facebookSignin() {
   popupSignin(provider);
}
