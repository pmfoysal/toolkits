import React, {useState} from 'react';
import Button from '@shared/button';
import Confirm from '@helpers/confirm';
import {useNavigate} from 'react-router-dom';

export default function ProductsCard({data, index}) {
   const {_id, image, email, title, price, required, available} = data;
   const serial = index + 1 < 10 ? `0${index + 1}` : index + 1;
   const navigate = useNavigate();
   const [active, setActive] = useState(false);

   function updateHandler() {
      navigate(`/dashboard/edit/product/${_id}`);
   }

   function deleteHandler() {
      setActive(true);
   }

   return (
      <React.Fragment>
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
               <Button name='delete' small danger handler={deleteHandler} />
            </td>
         </tr>
         {active && <Confirm setActive={setActive} id={_id} />}
      </React.Fragment>
   );
}
