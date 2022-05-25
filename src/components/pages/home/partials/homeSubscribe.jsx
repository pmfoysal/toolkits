import React from 'react';
import Button from '@shared/button';
import MainContainer from '@shared/mainContainer';
import {HomeSubscribeContainer, SubscribeForm, SubscribeHead, SubscribePara, SubscribeTitle} from './homeSubscribe.styled';

export default function HomeSubscribe() {
   return (
      <HomeSubscribeContainer>
         <MainContainer>
            <SubscribeTitle>
               special <span>offer</span> for subscription
            </SubscribeTitle>
            <SubscribeHead>get instant discount for membership</SubscribeHead>
            <SubscribePara>
               Subscribe our newsletter and all latest news of our latest product, promotion and offers
            </SubscribePara>
            <SubscribeForm>
               <input type='email' placeholder='your email address' />
               <Button name='subscribe' round />
            </SubscribeForm>
         </MainContainer>
      </HomeSubscribeContainer>
   );
}
