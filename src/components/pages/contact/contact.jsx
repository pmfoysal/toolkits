import Button from '@shared/button';
import React, {useState} from 'react';
import Inputbox from '@shared/inputbox';
import ContactCard from '@helpers/contactCard';
import contactData from '@databases/contactData';
import MainContainer from '@shared/mainContainer';
import {
   ContactContainer,
   ContactContent,
   ContactForm,
   ContactFormBg,
   ContactFormButtons,
   ContactFormInputGroup,
   ContactLine,
   ContactPara,
   ContactTouchArea,
   ContactTouchCards,
   ContactTouchTitle,
} from './contact.styled';

export default function Contact() {
   const [name, setName] = useState('');
   const [email, setEmail] = useState('');
   const [address, setAddress] = useState('');
   const [subject, setSubject] = useState('');
   const [message, setMessage] = useState('');

   function inputHandler(setter) {
      return event => {
         setter(event.target.value);
      };
   }

   function resetData() {
      setName('');
      setEmail('');
      setAddress('');
      setSubject('');
      setMessage('');
   }

   return (
      <React.Fragment>
         <ContactContainer>
            <MainContainer>
               <ContactContent>
                  <ContactTouchArea>
                     <ContactTouchTitle>get in touch</ContactTouchTitle>
                     <ContactPara>
                        ToolKits is the best parts shop for your car accessories. What kind of parts do you need? you can get here
                        all latest card parts!
                     </ContactPara>
                     <ContactTouchCards>
                        {contactData.map(data => (
                           <ContactCard data={data} key={data.id} />
                        ))}
                     </ContactTouchCards>
                  </ContactTouchArea>
                  <ContactLine />
                  <ContactTouchArea>
                     <ContactTouchTitle>give your feedback</ContactTouchTitle>
                     <ContactPara>
                        ToolKits is the best parts shop for your car accessories. What kind of parts do you need? you can get here
                        all latest card parts!
                     </ContactPara>
                     <ContactFormBg>
                        <ContactForm>
                           <ContactFormInputGroup>
                              <Inputbox name='your name' holder='john doe' type='text' value={name} />
                              <Inputbox name='your email' holder='john@doe.com' type='email' value={email} />
                           </ContactFormInputGroup>
                           <Inputbox name='your address' holder='dhaka, bangladesh' type='text' value={address} />
                           <Inputbox name='your subject' type='text' holder='your awesome subject here' value={subject} />
                           <Inputbox name='your message' line='10' holder='your awesome message here' value={message} />
                           <ContactFormButtons>
                              <Button name='reset' medium neutral />
                              <Button name='send' medium />
                           </ContactFormButtons>
                        </ContactForm>
                     </ContactFormBg>
                  </ContactTouchArea>
               </ContactContent>
            </MainContainer>
         </ContactContainer>
      </React.Fragment>
   );
}
