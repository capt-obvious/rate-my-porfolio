import React from 'react';

import Register from '../components/Welcome/Register';
import WelcomeNav from '../components/Welcome/WelcomeNav';

function Welcome(){
    return (
        <div>
            <WelcomeNav />
            <Register /> 
        </div>
    )
}

export default Welcome; 