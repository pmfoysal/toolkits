import React from 'react';
import useOrder from '@hooks/useOrder';
import Inputbox from '@shared/inputbox';
import {useParams} from 'react-router-dom';
import PageLoader from '@helpers/pageLoader';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import CheckoutForm from './partials/checkoutForm';
import {OrderPaymentContainer, OrderPaymentContent, OrderPaymentInputGroup, OrderPaymentTitle} from './orderPayment.styled';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPEKEY);

export default function OrderPayment() {
   const {id: urlId} = useParams();
   const {data: order = {}, isLoading, refetch} = useOrder(urlId);

   const {name, email, phone, address, title, price, quantity, total} = order;

   return (
      <OrderPaymentContainer>
         {isLoading ? (
            <PageLoader />
         ) : (
            <React.Fragment>
               <OrderPaymentTitle>order payment</OrderPaymentTitle>
               <OrderPaymentContent>
                  <Inputbox type='text' name='your name' value={name || ''} readOnly={true} />
                  <Inputbox type='email' name='your email' value={email || ''} readOnly={true} />
                  <Inputbox type='tel' name='your phone' value={phone || ''} readOnly={true} />
                  <Inputbox type='text' name='your address' value={address || ''} readOnly={true} />
                  <Inputbox type='text' name='product name' value={title || ''} readOnly={true} />
                  <OrderPaymentInputGroup>
                     <Inputbox type='number' name='unit price' value={price || ''} readOnly={true} />
                     <Inputbox type='number' name='quantity' value={quantity || ''} readOnly={true} />
                  </OrderPaymentInputGroup>
                  <Inputbox type='number' name='total price' value={total || ''} readOnly={true} />
                  <br />
                  <Elements stripe={stripePromise}>
                     <CheckoutForm price={total} email={email} name={name} id={urlId} refetch={refetch} />
                  </Elements>
               </OrderPaymentContent>
            </React.Fragment>
         )}
      </OrderPaymentContainer>
   );
}
