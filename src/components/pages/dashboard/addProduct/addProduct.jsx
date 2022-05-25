import Button from '@shared/button';
import React, {useContext, useEffect, useState} from 'react';
import Inputbox from '@shared/inputbox';
import {AddProductContainer, AddProductForm, AddProductInputGroup, AddProductTitle} from './addProduct.styled';
import isString from '@validations/isString';
import isNumber from '@validations/isNumber';
import {StoreContext} from '@contexts/storeProvider';
import pmaxios from '@middlewares/pmaxios';
import {toast} from 'react-toastify';
import isLink from '@validations/isLink';

export default function AddProduct() {
   const [disable, setDisable] = useState(true);
   const [title, setTitle] = useState('');
   const [image, setImage] = useState('');
   const [price, setPrice] = useState('');
   const [required, setRequired] = useState('');
   const [available, setAvailable] = useState('');
   const [details, setDetails] = useState('');

   const {user} = useContext(StoreContext);

   function validateData() {
      const test1 = title && price && required;
      const test2 = available && details && image;

      if (test1 && test2) {
         const titleOk = isString(title, 'Product Title');
         const priceOk = isNumber(price, 'Product Price');
         const requiredOk = isNumber(required, 'Required Quantity');
         const availableOk = isNumber(available, 'Available Stock');
         const detailsOk = isString(details, 'Product Details');
         const imageOk = isLink(image, 'Product Image');

         const test3 = titleOk && priceOk && requiredOk;
         const test4 = availableOk && detailsOk && imageOk;

         return test3 && test4;
      }
      return false;
   }

   const data = {
      email: user?.email,
      title,
      image,
      price,
      required,
      available,
      details,
   };

   function inputHandler(setter) {
      return function (event) {
         setter(event.target.value);
      };
   }

   function submitHandler() {
      const allOk = validateData();
      if (allOk) {
         setDisable(true);
         const tId = toast.loading('Please Wait! Your Product Adding to Database...');
         pmaxios
            .post('/products', data)
            .then(res => {
               if (res?.data?.acknowledged) {
                  toast.update(tId, {
                     render: 'Your Product Added Successfully to Database!',
                     isLoading: false,
                     autoClose: 3000,
                     type: 'success',
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
      const allOk = title && price && required && details && image && available;
      if (allOk) setDisable(false);
      else setDisable(true);
   }, [title, price, required, available, details, image]);

   return (
      <AddProductContainer>
         <AddProductTitle>add a new product</AddProductTitle>
         <AddProductForm>
            <Inputbox name='product title' type='text' value={title} handler={inputHandler(setTitle)} />
            <Inputbox name='product image' type='url' value={image} handler={inputHandler(setImage)} />
            <AddProductInputGroup>
               <Inputbox name='price' type='number' value={price} handler={inputHandler(setPrice)} />
               <Inputbox name='required' type='number' value={required} handler={inputHandler(setRequired)} />
               <Inputbox name='available' type='number' value={available} handler={inputHandler(setAvailable)} />
            </AddProductInputGroup>
            <Inputbox name='product description' line='10' value={details} handler={inputHandler(setDetails)} />
            <Button name='add product' disabled={disable} handler={submitHandler} />
         </AddProductForm>
      </AddProductContainer>
   );
}
