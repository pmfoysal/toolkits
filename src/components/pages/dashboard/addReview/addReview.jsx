import Button from '@shared/button';
import Inputbox from '@shared/inputbox';
import pmaxios from '@middlewares/pmaxios';
import isNumber from '@validations/isNumber';
import isString from '@validations/isString';
import {StoreContext} from '@contexts/storeProvider';
import React, {useContext, useEffect, useState} from 'react';
import {AddReviewContainer, AddReviewForm, AddReviewTitle} from './addReview.styled';
import {toast} from 'react-toastify';

export default function AddReview() {
   const {user} = useContext(StoreContext);
   const [disable, setDisable] = useState(true);
   const [ratings, setRatings] = useState('');
   const [review, setReview] = useState('');

   function inputHandler(setter) {
      return function (event) {
         setter(event.target.value);
      };
   }

   const data = {
      name: user?.displayName,
      email: user?.email,
      image: user?.photoURL,
      date: Date.now(),
      ratings,
      review,
   };

   function submitHandler() {
      const ratingsOk = isNumber(ratings, 'Ratings');
      const reviewOk = isString(review, 'Review');
      if (ratingsOk && reviewOk) {
         setDisable(true);
         const tId = toast.loading('Please Wait! Adding Your Review to Database...');
         pmaxios
            .post('/reviews', data)
            .then(res => {
               if (res?.data?.acknowledged) {
                  toast.update(tId, {
                     render: 'Your Review Successfully Added to Database!',
                     type: 'success',
                     isLoading: false,
                     autoClose: 3000,
                  });
               }
            })
            .catch(error => {
               toast.update(tId, {
                  render: error.message,
                  type: 'error',
                  isLoading: false,
                  autoClose: 3000,
               });
            });
      }
   }

   useEffect(() => {
      if (ratings && review && Number(ratings) > 0 && Number(ratings) < 6) setDisable(false);
      else setDisable(true);
   }, [ratings, review]);

   return (
      <AddReviewContainer>
         <AddReviewTitle>add a new review</AddReviewTitle>
         <AddReviewForm>
            <Inputbox name='your ratings' type='number' value={ratings} handler={inputHandler(setRatings)} />
            <Inputbox name='your review' line='10' value={review} handler={inputHandler(setReview)} />
            <Button name='add review' disabled={disable} handler={submitHandler} />
         </AddReviewForm>
      </AddReviewContainer>
   );
}
