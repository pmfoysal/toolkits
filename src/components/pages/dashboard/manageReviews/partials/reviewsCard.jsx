import React, {useState} from 'react';
import Button from '@shared/button';
import {useNavigate} from 'react-router-dom';
import {toast} from 'react-toastify';
import pmaxios from '@middlewares/pmaxios';
import Confirm from '@helpers/confirm';

export default function ReviewsCard({data, index, admin, refetch}) {
   const {_id, date, ratings, review} = data;
   const serial = index + 1 < 10 ? `0${index + 1}` : index + 1;
   const navigate = useNavigate();
   const [active, setActive] = useState(false);

   function editHandler() {
      navigate(`/dashboard/edit/review/${_id}`);
   }

   function deleteHandler() {
      const tId = toast.loading('Please Wait! This Review Deleting From Database...');
      pmaxios
         .delete(`/review/${_id}`)
         .then(res => {
            if (res?.data?.acknowledged) {
               refetch();
               toast.update(tId, {
                  render: `The Following Review Successfully Deleted From Database!'}`,
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
      <tr>
         <td>{serial}</td>
         <td>{new Date(date || Date.now()).toLocaleDateString(undefined, {dateStyle: 'long'})}</td>
         <td>{ratings}</td>
         <td>{review?.slice(0, 72) + (review?.length > 72 ? '...' : '')}</td>
         <td>
            {!admin && <Button name='edit' small neutral handler={editHandler} />}
            <Button name={admin ? 'delete now' : 'delete'} small danger handler={popupOpenar} />
         </td>
         {active && <Confirm setActive={setActive} handler={deleteHandler} />}
      </tr>
   );
}
