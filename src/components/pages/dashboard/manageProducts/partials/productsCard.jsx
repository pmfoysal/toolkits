import React from 'react';
import Button from '@shared/button';
import {useNavigate} from 'react-router-dom';

export default function ProductsCard({data, index}) {
   const {_id, image, email, title, price, required, available} = data;
   const serial = index + 1 < 10 ? `0${index + 1}` : index + 1;
   const navigate = useNavigate();

   function updateHandler() {
      navigate(`/dashboard/edit/product/${_id}`);
   }

   return (
      <tr>
         <td>{serial}</td>
         <td>
            <img src={image} alt='product' />
         </td>
         <td className='email'>{email?.split('@')[0]}</td>
         <td>{title}</td>
         <td>{price}</td>
         <td>{required}</td>
         <td>{available}</td>
         <td>
            <Button name='update' small neutral handler={updateHandler} />
            <Button name='delete' small danger />
         </td>
      </tr>
   );
}
