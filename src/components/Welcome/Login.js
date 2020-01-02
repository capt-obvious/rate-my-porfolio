import React from 'react';

const welcomeButton = {
    background: 'navy',
    borderRadius: '6px',
    color: 'white',
    textAlign: 'center',
    padding: '5px',
    fontSize: '1rem'
  };

const Login = () => { 
    return (
        <div>
            <form>
                <input 
                    id='email-input'
                    placeholder='email'
                    type='email'
                />
                <input
                    id='password-input'
                    placeholder='password'
                    type='password'
                />
            </form>
            <button style={welcomeButton}>Log In</button>
        </div>
    )
}

export default Login;
