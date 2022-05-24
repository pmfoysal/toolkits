import Button from '@shared/button';
import Inputbox from '@shared/inputbox';
import React from 'react';
import {AddProductContainer, AddProductForm, AddProductInputGroup, AddProductTitle} from './addProduct.styled';

export default function AddProduct() {
   return (
      <AddProductContainer>
         <AddProductTitle>add a new product</AddProductTitle>
         <AddProductForm>
            <Inputbox name='product title' type='text' value='' />
            <AddProductInputGroup>
               <Inputbox name='price' type='number' value='' />
               <Inputbox name='required' type='number' value='' />
               <Inputbox name='available' type='number' value='' />
            </AddProductInputGroup>
            <Inputbox name='product description' line='10' value='' />
            <Button name='add product' />
         </AddProductForm>
      </AddProductContainer>
   );
}
