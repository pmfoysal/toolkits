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
import {useForm} from 'react-hook-form';
import {useParams} from 'react-router-dom';
import {toast} from 'react-toastify';
import {
   PurchaseContainer,
   PurchaseDetails,
   PurchaseDetailsArea,
   PurchaseImage,
   PurchaseOrderArea,
   PurchasePara,
   PurchaseTitle,
} from './purchase.styled';

export default function Purchase() {
   const {id: urlId} = useParams();
   const {user} = useContext(StoreContext);
   const {data: dbUser} = useUser(user?.email);
   const {data: product = {}, isLoading, refetch} = useProduct(urlId);
   const {image, title, email, price, required, available, details} = product;

   const [orderQuantity, setOrderQuantity] = useState('');
   const [disable, setDisable] = useState(false);

   const {
      register,
      handleSubmit,
      formState: {errors},
   } = useForm();

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

   function orderHandler(data) {
      const order = {
         title,
         price,
         quantity: orderQuantity,
         total: Number(orderQuantity) * Number(price),
         status: 'unpaid',
         email: user?.email,
         name: dbUser?.name,
         phone: data?.newPhone,
         address: data?.newAddress,
         date: Date.now(),
      };

      if (Number(orderQuantity) > Number(available)) {
         toast.error(`You Can Not Order More Than ${available} pcs!`);
         setDisable(true);
      } else if (Number(orderQuantity) < Number(required)) {
         toast.error(`You Can Not Order Less Than ${required} pcs!`);
         setDisable(true);
      } else {
         setDisable(true);
         const tId = toast.loading('Please Wait! Placing Your Order to Database...');
         pmaxios
            .post('/orders', order)
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
      if (errors?.newPhone?.type === 'required') toast.error('Please Provide Your Phone Number!');
      if (errors?.newPhone?.type === 'maxLength') toast.error('Your Phone Number Cannot Greater Than 16!');
      if (errors?.newAddress?.type === 'required') toast.error('Please Provide Your Delivery Address!');
   }, [errors?.newPhone, errors?.newAddress]);

   useEffect(() => {
      formUpdater();
   }, [product]);

   useEffect(() => {
      if (!Number(available)) setDisable(true);
      else setDisable(false);
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
                        <strong>price: </strong> ${price || 0}/pcs
                     </PurchasePara>
                     <PurchasePara>
                        <strong>required: </strong> {required || 0} pcs
                     </PurchasePara>
                     <PurchasePara>
                        <strong>available: </strong> {available || 0} pcs
                     </PurchasePara>
                     <PurchaseDetails>
                        <strong>description: </strong> {details}
                     </PurchaseDetails>
                  </PurchaseDetailsArea>
                  <PurchaseOrderArea>
                     <input type='text' readOnly value={dbUser?.name || ''} />
                     <input type='email' readOnly value={dbUser?.email || ''} />
                     <input
                        type='number'
                        placeholder='your phone'
                        {...register('newPhone', {
                           required: true,
                           maxLength: 16,
                        })}
                     />
                     <input
                        type='text'
                        placeholder='delivery address'
                        {...register('newAddress', {
                           required: true,
                        })}
                     />
                     <p>
                        You have to Pay: <strong>${Number(price) * Number(orderQuantity)}</strong> (${price} x {orderQuantity})
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
                     <Button name='place order' round neutral handler={handleSubmit(orderHandler)} disabled={disable} />
                  </PurchaseOrderArea>
               </React.Fragment>
            )}
         </MainContainer>
      </PurchaseContainer>
   );
}
