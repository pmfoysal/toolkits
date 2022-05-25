import Button from '@shared/button';
import React, {useContext, useEffect, useState} from 'react';
import Inputbox from '@shared/inputbox';
import isString from '@validations/isString';
import isNumber from '@validations/isNumber';
import {StoreContext} from '@contexts/storeProvider';
import pmaxios from '@middlewares/pmaxios';
import {toast} from 'react-toastify';
import isLink from '@validations/isLink';
import {EditProductContainer, EditProductForm, EditProductInputGroup, EditProductTitle} from './editProduct.styled';
import {useParams} from 'react-router-dom';
import useProduct from '@hooks/useProduct';

export default function EditProduct() {
   const {id: urlId} = useParams();
   const {data: product = {}, refetch} = useProduct(urlId);
   const [disable, setDisable] = useState(true);
   const [title, setTitle] = useState('');
   const [image, setImage] = useState('');
   const [price, setPrice] = useState('');
   const [required, setRequired] = useState('');
   const [available, setAvailable] = useState('');
   const [details, setDetails] = useState('');

   function formUpdater() {
      setTitle(product?.title || '');
      setImage(product?.image || '');
      setPrice(product?.price || '');
      setRequired(product?.required || '');
      setAvailable(product?.available || '');
      setDetails(product?.details || '');
   }

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
         const tId = toast.loading('Please Wait! This Product Updating to Database...');
         pmaxios
            .put(`/product/${urlId}`, data)
            .then(res => {
               if (res?.data?.acknowledged) {
                  refetch();
                  toast.update(tId, {
                     render: 'The Following Product Updated Successfully to Database!',
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

   useEffect(() => {
      formUpdater();
   }, [product]);

   return (
      <EditProductContainer>
         <EditProductTitle>update a product</EditProductTitle>
         <EditProductForm>
            <Inputbox name='product title' type='text' value={title} handler={inputHandler(setTitle)} />
            <Inputbox name='product image' type='url' value={image} handler={inputHandler(setImage)} />
            <EditProductInputGroup>
               <Inputbox name='price' type='number' value={price} handler={inputHandler(setPrice)} />
               <Inputbox name='required' type='number' value={required} handler={inputHandler(setRequired)} />
               <Inputbox name='available' type='number' value={available} handler={inputHandler(setAvailable)} />
            </EditProductInputGroup>
            <Inputbox name='product description' line='10' value={details} handler={inputHandler(setDetails)} />
            <Button name='update' disabled={disable} handler={submitHandler} />
         </EditProductForm>
      </EditProductContainer>
   );
}
