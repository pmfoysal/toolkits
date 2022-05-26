import React, {useEffect, useState} from 'react';
import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js';
import Button from '@shared/button';
import {toast} from 'react-toastify';
import pmaxios from '@middlewares/pmaxios';

export default function CheckoutForm({price, name, email, id, refetch}) {
   const stripe = useStripe();
   const elements = useElements();
   const [clientSecret, setClientSecret] = useState('');

   async function handleSubmit(event) {
      event.preventDefault();
      if (!stripe || !elements) return;
      const card = elements.getElement(CardElement);
      if (card === null) return;
      const {error} = await stripe.createPaymentMethod({
         type: 'card',
         card,
      });
      if (error) {
         toast.error(error.message);
      } else {
         const tId = toast.loading('Please Wait! Your Payment is Processing...');
         const {error: intentError} = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
               card: card,
               billing_details: {name, email},
            },
         });
         if (intentError) {
            toast.update(tId, {
               render: intentError.message,
               autoClose: 3000,
               isLoading: false,
               type: 'error',
            });
         } else {
            pmaxios
               .put(`/order/${id}`, {status: 'pending'})
               .then(res => {
                  if (res?.data?.acknowledged) {
                     toast.update(tId, {
                        render: 'Your Payment is Successfully Received for This Order!',
                        autoClose: 3000,
                        isLoading: false,
                        type: 'success',
                     });
                  }
               })
               .catch(err => toast.error(err.message));
         }
      }
   }

   useEffect(() => {
      pmaxios.post('/payment/intent', {price}).then(res => {
         if (res?.data?.clientSecret) {
            setClientSecret(res?.data?.clientSecret);
         }
      });
   }, [price]);

   return (
      <form onSubmit={handleSubmit}>
         <CardElement
            options={{
               style: {
                  base: {
                     fontSize: '16px',
                     color: '#424770',
                     '::placeholder': {
                        color: '#aab7c4',
                     },
                  },
                  invalid: {
                     color: '#9e2146',
                  },
               },
            }}
         />
         <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '5rem'}}>
            <Button name='pay now' type='submit' disabled={!stripe || !clientSecret} />
         </div>
      </form>
   );
}
