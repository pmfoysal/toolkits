import Button from '@shared/button';
import React from 'react';
import {useNavigate} from 'react-router-dom';

export default function ReviewsCard({data, index, admin}) {
   const {_id, date, ratings, review} = data;
   const serial = index + 1 < 10 ? `0${index + 1}` : index + 1;
   const navigate = useNavigate();

   function editHandler() {
      navigate(`/dashboard/edit/review/${_id}`);
   }

   function deleteHandler() {}

   return (
      <tr>
         <td>{serial}</td>
         <td>{new Date(date || Date.now()).toLocaleDateString(undefined, {dateStyle: 'long'})}</td>
         <td>{ratings}</td>
         <td>{review?.slice(0, 72) + (review?.length > 72 ? '...' : '')}</td>
         <td>
            {!admin && <Button name='edit' small neutral handler={editHandler} />}
            <Button name={admin ? 'delete now' : 'delete'} small danger />
         </td>
      </tr>
   );
}
