import React from 'react';

function UserGreeting(props)  {
    if (props.isLoggedIn) {
        return <h1>Welcome back!</h1>;
    }  else {
        return <h1>Please sign in.</h1>
    }
}

export default UserGreeting;