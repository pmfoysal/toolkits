import React from 'react';
import ProductCard from '@helpers/productCard';
import MainContainer from '@shared/mainContainer';
import {ProductsContainer, ProductsContent} from './products.styled';

export default function Products() {
   return (
      <ProductsContainer>
         <MainContainer>
            <ProductsContent>
               <ProductCard />
               <ProductCard />
               <ProductCard />
               <ProductCard />
               <ProductCard />
               <ProductCard />
            </ProductsContent>
         </MainContainer>
      </ProductsContainer>
   );
}
