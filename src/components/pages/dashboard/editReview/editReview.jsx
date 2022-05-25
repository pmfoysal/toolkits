import Button from '@shared/button';
import {toast} from 'react-toastify';
import Inputbox from '@shared/inputbox';
import pmaxios from '@middlewares/pmaxios';
import isNumber from '@validations/isNumber';
import isString from '@validations/isString';
import React, {useEffect, useState} from 'react';
import {EditReviewContainer, EditReviewForm, EditReviewTitle} from './editReview.styled';
import {useParams} from 'react-router-dom';
import useReview from '@hooks/useReview';
import PageLoader from '@helpers/pageLoader';

export default function EditReview() {
   const [disable, setDisable] = useState(true);
   const [ratings, setRatings] = useState('');
   const [review, setReview] = useState('');
   const {id: urlId} = useParams();
   const {data: dbReview, isLoading, refetch} = useReview(urlId);

   function inputHandler(setter) {
      return function (event) {
         setter(event.target.value);
      };
   }

   function formUpdater() {
      setRatings(dbReview?.ratings || '');
      setReview(dbReview?.review || '');
   }

   const data = {
      ratings,
      review,
   };

   function submitHandler() {
      const ratingsOk = isNumber(ratings, 'Ratings');
      const reviewOk = isString(review, 'Review');
      if (ratingsOk && reviewOk) {
         setDisable(true);
         const tId = toast.loading('Please Wait! Updating Your Review to Database...');
         pmaxios
            .put(`/review/${urlId}`, data)
            .then(res => {
               if (res?.data?.acknowledged) {
                  toast.update(tId, {
                     render: 'Your Review Successfully Updated to Database!',
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

   useEffect(() => {
      formUpdater();
   }, [dbReview]);

   return (
      <React.Fragment>
         {isLoading ? (
            <PageLoader />
         ) : (
            <EditReviewContainer>
               <EditReviewTitle>update this review</EditReviewTitle>
               <EditReviewForm>
                  <Inputbox name='your ratings' type='number' value={ratings} handler={inputHandler(setRatings)} />
                  <Inputbox name='your review' line='10' value={review} handler={inputHandler(setReview)} />
                  <Button name='update' disabled={disable} handler={submitHandler} />
               </EditReviewForm>
            </EditReviewContainer>
         )}
      </React.Fragment>
   );
}
