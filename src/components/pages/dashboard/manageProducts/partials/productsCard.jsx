import React, {useState} from 'react';
import Button from '@shared/button';
import Confirm from '@helpers/confirm';
import {useNavigate} from 'react-router-dom';
import {toast} from 'react-toastify';
import pmaxios from '@middlewares/pmaxios';

export default function ProductsCard({data, index, refetch}) {
   const {_id, image, email, title, price, required, available} = data;
   const serial = index + 1 < 10 ? `0${index + 1}` : index + 1;
   const navigate = useNavigate();
   const [active, setActive] = useState(false);

   function updateHandler() {
      navigate(`/dashboard/edit/product/${_id}`);
   }

   function deleteHandler() {
      const tId = toast.loading('Please Wait! This Product Deleting From Database...');
      pmaxios
         .delete(`/product/${_id}`)
         .then(res => {
            if (res?.data?.acknowledged) {
               refetch();
               toast.update(tId, {
                  render: `The Following Product Successfully Deleted From Database!'}`,
                  autoClose: 3000,
                  isLoading: false,
                  type: 'success',
               });
            }
         })
         .catch(error => {
            toast.update(tId, {
               render: error.message,
               autoClose: 3000,
               isLoading: false,
               type: 'error',
            });
         });
   }

   function popupOpenar() {
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
               <Button name='delete' small danger handler={popupOpenar} />
            </td>
         </tr>
         {active && <Confirm setActive={setActive} handler={deleteHandler} />}
      </React.Fragment>
   );
}
