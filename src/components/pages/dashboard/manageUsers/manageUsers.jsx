import React from 'react';
import UsersCard from './partials/usersCard';
import useUsers from '@hooks/useUsers';
import PageLoader from '@helpers/pageLoader';
import {ManageUsersBody, ManageUsersContainer, ManageUsersContent, ManageUsersHeader} from './manageUsers.styled';

export default function ManageUsers() {
   const {data: users, isLoading, refetch} = useUsers();

   return (
      <ManageUsersContainer>
         {isLoading ? (
            <PageLoader />
         ) : (
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
                  {users?.map((data, index) => (
                     <UsersCard data={data} key={data._id} index={index} refetch={refetch} />
                  ))}
               </ManageUsersBody>
            </ManageUsersContent>
         )}
      </ManageUsersContainer>
   );
}
