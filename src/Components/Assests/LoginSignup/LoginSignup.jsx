import React, { useState } from 'react';
import './Login.css';
import user from 'D:/Front End/React Js/Project/login-signup/src/Components/Assests/LoginSignup/user.png';
import email from 'D:/Front End/React Js/Project/login-signup/src/Components/Assests/email.png';
import password from 'D:/Front End/React Js/Project/login-signup/src/Components/Assests/password.png';
import { act } from 'react-dom/test-utils';

function LoginSignup() {

    const [action, setAction] = useState("Sign Up");

    return (
        <div className='container'>
            <div className='header'>
                <div className='text'>{action}</div>
                <div className='underline'></div>
            </div>
            <div className='inputs'>
            {action === "Login"?<div></div>:<div className='input'>
                    <img src={user} alt='' />
                    <input type='text' placeholder='Name' />
                </div>}
                <div className='input'>
                    <img src={email} alt='' />
                    <input type='email' placeholder='Email' />
                </div>
                <div className='input'>
                    <img src={password} alt='' />
                    <input type='password' placeholder='Password' />
                </div>
            </div>
            {action==="Sign Up"?<div></div>:
            <div className='forgot-pass'>Lost Password?  <span>Click Here</span></div>
            }
            <div className='submit-container'>
                <div className={action === "Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
                <div className={action === "Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</div>
            </div>

        </div>
    );
}

export default LoginSignup;
