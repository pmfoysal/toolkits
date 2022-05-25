import React from 'react';
import useProducts from '@hooks/useProducts';
import PageLoader from '@helpers/pageLoader';
import ProductsCard from './partials/productsCard';
import {ManageProductsBody, ManageProductsContainer, ManageProductsContent, ManageProductsHeader} from './manageProducts.styled';

export default function ManageProducts() {
   const {data: products, isLoading, refetch} = useProducts();

   return (
      <ManageProductsContainer>
         {isLoading ? (
            <div style={{paddingBottom: '8rem'}}>
               <PageLoader />
            </div>
         ) : (
            <ManageProductsContent>
               <ManageProductsHeader>
                  <tr>
                     <th>sl no</th>
                     <th>image</th>
                     <th>author</th>
                     <th>product name</th>
                     <th>price</th>
                     <th>required</th>
                     <th>available</th>
                     <th>actions</th>
                  </tr>
               </ManageProductsHeader>
               <ManageProductsBody>
                  {products?.map((data, index) => (
                     <ProductsCard data={data} key={data._id} index={index} refetch={refetch} />
                  ))}
               </ManageProductsBody>
            </ManageProductsContent>
         )}
      </ManageProductsContainer>
   );
}
