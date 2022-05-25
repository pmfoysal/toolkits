import React from 'react';
import ProductCard from '@helpers/productCard';
import MainContainer from '@shared/mainContainer';
import {HomeProductsContainer, HomeProductsContent} from './homeProducts.styled';

export default function HomeProducts() {
   return (
      <HomeProductsContainer>
         <MainContainer>
            <HomeProductsContent>
               <ProductCard />
               <ProductCard />
               <ProductCard />
               <ProductCard />
               <ProductCard />
               <ProductCard />
            </HomeProductsContent>
         </MainContainer>
      </HomeProductsContainer>
   );
}
