import Button from '@shared/button';
import React, {useState} from 'react';
import Inputbox from '@shared/inputbox';
import {AddReviewContainer, AddReviewForm, AddReviewTitle} from './addReview.styled';

export default function AddReview() {
   const [disable, setDisable] = useState(true);

   return (
      <AddReviewContainer>
         <AddReviewTitle>add a new review</AddReviewTitle>
         <AddReviewForm>
            <Inputbox name='your ratings' type='number' value='' />
            <Inputbox name='your review' line='10' value='' />
            <Button name='add review' disabled={disable} />
         </AddReviewForm>
      </AddReviewContainer>
   );
}
