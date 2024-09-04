import React, { useState } from 'react';
import  SimpleForm from './SimpleForm';

function ParentComponent() {
    const [userData, setUserData] = useState({ name: '', email: ''});

    const updateUserData = (data) => {
        setUserData(data);
    };

    return (
        <div>
         <h1>User Information</h1>
         <SimpleForm onFormSubmit={updateUserData} />
         <div>
          <h2>Submitted Data:</h2>
           <p>Name: {userData.name}</p>
          <p>Email: {userData.email}</p>
         </div>
        </div>
    );
}

export default ParentComponent