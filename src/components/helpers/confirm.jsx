import React from 'react';
import Backdrop from './backdrop';
import {Icon} from '@iconify/react';
import Button from '@shared/button';
import {ConfirmButtons, ConfirmContainer, ConfirmPara, ConfirmTitle} from './confirm.styled';

export default function Confirm({setActive, id}) {
   function cancelHandler() {
      setActive(false);
   }

   function mainHandler() {
      setActive(false);
   }

   return (
      <Backdrop>
         <ConfirmContainer>
            <ConfirmTitle>
               confirmation!
               <Icon onClick={cancelHandler} icon='ion:close-circle-outline' />
            </ConfirmTitle>
            <ConfirmPara>
               Are you sure you want to delete it? Once deleted, this item can't be possible to bring back again!
            </ConfirmPara>
            <ConfirmButtons>
               <Button name='cancel' neutral medium />
               <Button name='delete' danger medium />
            </ConfirmButtons>
         </ConfirmContainer>
      </Backdrop>
   );
}
