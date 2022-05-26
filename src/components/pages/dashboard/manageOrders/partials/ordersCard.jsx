import React, {useState} from 'react';
import Button from '@shared/button';
import Confirm from '@helpers/confirm';
import {toast} from 'react-toastify';
import pmaxios from '@middlewares/pmaxios';

export default function OrdersCard({data, index, admin, refetch}) {
   const {_id, title, trxId, price, quantity, total, status} = data;
   const serial = index + 1 < 10 ? `0${index + 1}` : index + 1;
   const [active, setActive] = useState(false);

   function getActions() {
      if (admin) {
         if (status === 'unpaid') {
            return <Button name='delete now' small danger handler={popupOpenar} />;
         } else if (status === 'pending') {
            return <Button name='ship now' small handler={shipHandler} />;
         }
         return <Button name='completed' success small />;
      } else {
         if (status === 'unpaid') {
            return (
               <React.Fragment>
                  <Button name='cancel' small danger handler={popupOpenar} />
                  <Button name='payment' small link={`/dashboard/orders/payment/${_id}`} />
               </React.Fragment>
            );
         } else if (status === 'pending') {
            return <Button name='processing' small neutral />;
         }
         return <Button name='completed' success small />;
      }
   }

   function shipHandler() {
      const tId = toast.loading('Please Wait! This Order Status Updating From Database...');
      pmaxios
         .put(`/order/${_id}`, {status: 'shipped'})
         .then(res => {
            if (res?.data?.acknowledged) {
               refetch();
               toast.update(tId, {
                  render: `The Order Status Successfully Updated From Database!'}`,
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

   function deleteHandler() {
      const tId = toast.loading('Please Wait! This Order Deleting From Database...');
      pmaxios
         .delete(`/order/${_id}`)
         .then(res => {
            if (res?.data?.acknowledged) {
               refetch();
               toast.update(tId, {
                  render: `The Following Order Successfully Deleted From Database!'}`,
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

   return (
      <tr>
         <td>{serial}</td>
         <td>{title?.slice(0, 21) + '...'}</td>
         <td>{trxId && trxId?.slice(0, 18) + '...'}</td>
         <td>{price}</td>
         <td>{quantity}</td>
         <td>{total}</td>
         <td>{status}</td>
         <td>{getActions()}</td>
         {active && <Confirm setActive={setActive} handler={deleteHandler} />}
      </tr>
   );
}
