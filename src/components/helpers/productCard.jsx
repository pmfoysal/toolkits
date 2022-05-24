import React from 'react';
import Button from '@shared/button';
import {
   ProductCardContainer,
   ProductCardImage,
   ProductCardPara,
   ProductCardTags,
   ProductCardTagsGroup,
   ProductCardTexts,
   ProductCardTitle,
} from './productCard.styled';
import productData from '@databases/productData';
import ImgLoader from '@shared/imgLoader';

export default function ProductCard() {
   const data = productData[0];

   const {title, required, available, details, price, _id, image} = data;

   return (
      <ProductCardContainer>
         <ProductCardImage>
            <ImgLoader src={image} alt='product' />
         </ProductCardImage>
         <ProductCardTexts>
            <ProductCardTitle>{title?.slice(0, 25) + '...'}</ProductCardTitle>
            <ProductCardPara>{details?.slice(0, 65) + '...'}</ProductCardPara>
            <ProductCardTagsGroup>
               <ProductCardTags>
                  <strong>required: </strong>
                  {required}
               </ProductCardTags>
               <ProductCardTags>
                  <strong>available: </strong>
                  {available}
               </ProductCardTags>
            </ProductCardTagsGroup>
            <ProductCardTags className='price'>
               ${price}
               <span>/pcs</span>
            </ProductCardTags>
            <Button name='order now' medium />
         </ProductCardTexts>
      </ProductCardContainer>
   );
}
