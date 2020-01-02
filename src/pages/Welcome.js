import React from 'react';

import Login from '../components/Welcome/Login';
import Register from '../components/Welcome/Register';
import NavBar from '../components/Navbar';

function Welcome(){
    return (
        <div>
            <NavBar>
                <Login />
            </NavBar>
            <Register /> 
        </div>
    )
}

export default Welcome; 