import React, {useState} from 'react';
import Button from '@shared/button';
import pmaxios from '@middlewares/pmaxios';
import {toast} from 'react-toastify';
import Confirm from '@helpers/confirm';

export default function UsersCard({data, index, refetch}) {
   const serial = index + 1 < 10 ? `0${index + 1}` : index + 1;
   const {_id, image, name, email, phone, role} = data;
   const admin = role === 'admin';
   const [active, setActive] = useState(false);

   function userUpdater(type) {
      const tId = toast.loading('Please Wait! Updating to Database...');
      pmaxios
         .put(`/user/${email}`, {role: type === 'add' ? 'admin' : 'user'})
         .then(res => {
            if (res?.data?.acknowledged) {
               refetch();
               toast.update(tId, {
                  render: `The Following User Successfully ${type === 'add' ? 'Added as an Admin!' : 'Removed from Admin!'}`,
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

   function makeAdmin() {
      userUpdater('add');
   }

   function popupOpernar() {
      setActive(true);
   }

   function removeAdmin() {
      userUpdater('remove');
   }

   return (
      <tr>
         <td>{serial}</td>
         <td>
            <img src={image} alt='product' />
         </td>
         <td>{name}</td>
         <td className='email'>{email}</td>
         <td>{phone}</td>
         <td>{role || 'user'}</td>
         <td>
            {admin ? (
               <Button name='suspend' small danger handler={popupOpernar} />
            ) : (
               <Button name='make admin' small handler={makeAdmin} />
            )}
         </td>
         {active && <Confirm setActive={setActive} handler={removeAdmin} />}
      </tr>
   );
}
