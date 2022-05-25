import React from 'react';
import ProductCard from '@helpers/productCard';
import MainContainer from '@shared/mainContainer';
import useProducts from '@hooks/useProducts';
import PageLoader from '@helpers/pageLoader';
import {HomeProductsContainer, HomeProductsContent} from './homeProducts.styled';

export default function HomeProducts() {
   const {data: products, isLoading} = useProducts();
   return (
      <HomeProductsContainer>
         <MainContainer>
            {isLoading ? (
               <PageLoader />
            ) : (
               <HomeProductsContent>
                  {products?.map(data => (
                     <ProductCard data={data} key={data._id} />
                  ))}
               </HomeProductsContent>
            )}
         </MainContainer>
      </HomeProductsContainer>
   );
}
