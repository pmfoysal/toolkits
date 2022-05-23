import React from 'react';
import SocialIcon from './socialIcon';
import githubSignin from 'customs/auth/githubSignin';
import googleSignin from 'customs/auth/googleSignin';
import facebookSignin from 'customs/auth/facebookSignin';
import microsoftSignin from 'customs/auth/microsoftSignin';
import {SocialSigninContainer} from './socialSignin.styled';

export default function SocialSignin() {
   return (
      <SocialSigninContainer>
         <SocialIcon icon='cib:google' handler={googleSignin} />
         <SocialIcon icon='cib:facebook-f' handler={facebookSignin} />
         <SocialIcon icon='cib:microsoft' handler={microsoftSignin} />
         <SocialIcon icon='cib:github' handler={githubSignin} />
      </SocialSigninContainer>
   );
}
