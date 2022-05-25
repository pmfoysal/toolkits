import Button from '@shared/button';
import React, {useContext} from 'react';
import {StoreContext} from '@contexts/storeProvider';
import {ManageUsersBody, ManageUsersContainer, ManageUsersContent, ManageUsersHeader} from './manageUsers.styled';

export default function ManageUsers() {
   const array = [1, 2, 3, 4, 5];
   const {role} = useContext(StoreContext);
   const admin = role === 'admin';

   return (
      <ManageUsersContainer>
         <ManageUsersContent>
            <ManageUsersHeader>
               <tr>
                  <th>sl no</th>
                  <th>image</th>
                  <th>full name</th>
                  <th>email address</th>
                  <th>phone</th>
                  <th>role</th>
                  <th>actions</th>
               </tr>
            </ManageUsersHeader>
            <ManageUsersBody>
               {array.map((v, i) => (
                  <tr key={i}>
                     <td>01</td>
                     <td>
                        <img src='https://i.pravatar.cc/150?img=41' alt='product' />
                     </td>
                     <td>foysal ahmmed</td>
                     <td className='email'>pmfoysal@gmail.com</td>
                     <td>+88 01645 114090</td>
                     <td>{role || 'user'}</td>
                     <td>{admin ? <Button name='remove admin' small danger /> : <Button name='make admin' small />}</td>
                  </tr>
               ))}
            </ManageUsersBody>
         </ManageUsersContent>
      </ManageUsersContainer>
   );
}
