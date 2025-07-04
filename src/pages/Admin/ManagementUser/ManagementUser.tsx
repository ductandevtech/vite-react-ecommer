import React, { useState, ChangeEvent } from 'react';
import { app } from '~/config/firebaseConfig'; 
import { getDatabase, ref, push, set } from 'firebase/database';
import UserList from '~/components/UserManagement/UserManagementComponent';
import UserManagementComponet from '~/components/UserManagement/UserManagementComponent';

const CreateUser: React.FC = () => {
  
  return(
    <UserManagementComponet/>
  )
};

export default CreateUser;
