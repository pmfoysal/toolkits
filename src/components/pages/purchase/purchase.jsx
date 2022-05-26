import {StoreContext} from '@contexts/storeProvider';
import PageLoader from '@helpers/pageLoader';
import useProduct from '@hooks/useProduct';
import useUser from '@hooks/useUser';
import {Icon} from '@iconify/react';
import pmaxios from '@middlewares/pmaxios';
import Button from '@shared/button';
import ImgLoader from '@shared/imgLoader';
import MainContainer from '@shared/mainContainer';
import React, {useContext, useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {toast} from 'react-toastify';
import {
   PurchaseContainer,
   PurchaseDetails,
   PurchaseDetailsArea,
   PurchaseImage,
   PurchaseOrderArea,
   PurchaseOrderButtons,
   PurchaseOrderInputs,
   PurchasePara,
   PurchaseTitle,
} from './purchase.styled';

export default function Purchase() {
   const {id: urlId} = useParams();
   const {user} = useContext(StoreContext);
   const {data: dbUser} = useUser(user?.email);
   const {data: product = {}, isLoading, refetch} = useProduct(urlId);
   const {image, title, email, price, required, available, details} = product;

   const [total, setTotal] = useState('');
   const [orderQuantity, setOrderQuantity] = useState('');
   const [orderDisable, setOrderDisable] = useState(false);
   const [paymentDisable, setPaymentDisable] = useState(true);

   function inputHandler(setter) {
      return function (event) {
         setter(event.target.value);
      };
   }

   function formUpdater() {
      setOrderQuantity(product?.required || '');
   }

   function decreaseHandler() {
      setOrderQuantity(prev => Number(prev) - 1);
   }

   function increaseHandler() {
      setOrderQuantity(prev => Number(prev) + 1);
   }

   const data = {
      title,
      price,
      quantity: orderQuantity,
      total: Number(orderQuantity) * Number(price),
      status: 'unpaid',
      email: user?.email,
      name: dbUser?.name,
      phone: dbUser?.phone,
      date: Date.now(),
   };

   function orderHandler() {
      if (Number(orderQuantity) > Number(available)) {
         toast.error(`You Can Not Order More Than ${available} pcs!`);
         setOrderDisable(true);
      } else if (Number(orderQuantity) < Number(required)) {
         toast.error(`You Can Not Order Less Than ${required} pcs!`);
         setOrderDisable(true);
      } else {
         setOrderDisable(true);
         const tId = toast.loading('Please Wait! Placing Your Order to Database...');
         pmaxios
            .post('/orders', data)
            .then(res => {
               if (res?.data?.acknowledged) {
                  toast.update(tId, {
                     render: 'Your Order Successfully Placed on The Database!',
                     isLoading: false,
                     autoClose: 3000,
                     type: 'success',
                  });
                  pmaxios
                     .put(`/product/${product?._id}`, {
                        available: Number(available) - Number(orderQuantity),
                     })
                     .then(res => {
                        if (res?.data?.acknowledged) refetch();
                     })
                     .catch(error => {
                        toast.error(error.message);
                     });
               }
            })
            .catch(error => {
               toast.update(tId, {
                  render: error.message,
                  isLoading: false,
                  autoClose: 3000,
                  type: 'error',
               });
            });
      }
   }

   useEffect(() => {
      formUpdater();
   }, [product]);

   useEffect(() => {
      if (!Number(available)) setOrderDisable(true);
      else setOrderDisable(false);
   }, [orderQuantity, available]);

   return (
      <PurchaseContainer>
         <MainContainer>
            {isLoading ? (
               <PageLoader />
            ) : (
               <React.Fragment>
                  <PurchaseDetailsArea>
                     <PurchaseImage>
                        <ImgLoader src={image} alt='product' />
                     </PurchaseImage>
                     <PurchaseTitle>{title}</PurchaseTitle>
                     <PurchasePara>
                        <strong>author: </strong> {email?.split('@')[0].toLowerCase()}
                     </PurchasePara>
                     <PurchasePara>
                        <strong>price: </strong> ${price}/pcs
                     </PurchasePara>
                     <PurchasePara>
                        <strong>required: </strong> {required} pcs
                     </PurchasePara>
                     <PurchasePara>
                        <strong>available: </strong> {available} pcs
                     </PurchasePara>
                     <PurchaseDetails>
                        <strong>description: </strong> {details}
                     </PurchaseDetails>
                  </PurchaseDetailsArea>
                  <PurchaseOrderArea>
                     <p>
                        You have to Pay: ${Number(price) * Number(orderQuantity)} (${price} x {orderQuantity})
                     </p>
                     <div>
                        <button onClick={decreaseHandler}>
                           <Icon icon='fluent:subtract-24-filled' />
                        </button>
                        <input
                           type='number'
                           value={orderQuantity}
                           onChange={inputHandler(setOrderQuantity)}
                           placeholder='order quantity'
                        />
                        <button onClick={increaseHandler}>
                           <Icon icon='fluent:add-24-filled' />
                        </button>
                     </div>
                     <Button name='place order' round neutral handler={orderHandler} disabled={orderDisable} />
                  </PurchaseOrderArea>
               </React.Fragment>
            )}
         </MainContainer>
      </PurchaseContainer>
   );
}
