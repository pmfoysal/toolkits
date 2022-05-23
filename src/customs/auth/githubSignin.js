import popupSignin from './popupSignin';
import {GithubAuthProvider} from 'firebase/auth';

const provider = new GithubAuthProvider();

export default function githubSignin() {
   popupSignin(provider);
}
