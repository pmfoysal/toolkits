import React from 'react';
import ProductCard from '@helpers/productCard';
import MainContainer from '@shared/mainContainer';
import useProducts from '@hooks/useProducts';
import PageLoader from '@helpers/pageLoader';
import {ProductsContainer, ProductsContent} from './products.styled';

export default function Products() {
   const {data: products, isLoading} = useProducts();
   return (
      <ProductsContainer>
         <MainContainer>
            {isLoading ? (
               <PageLoader />
            ) : (
               <ProductsContent>
                  {products?.map(data => (
                     <ProductCard data={data} key={data._id} />
                  ))}
               </ProductsContent>
            )}
         </MainContainer>
      </ProductsContainer>
   );
}
