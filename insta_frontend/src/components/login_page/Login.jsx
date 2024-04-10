import React, { useState } from 'react'
import AuthUser from '../authentication/AuthUser';
import './login.css'
import { Link } from 'react-router-dom';

export default function Login() {
  const { http, saveToken } = AuthUser();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const submitForm = (e) => {
    e.preventDefault();
    http.post('/login', { email: email, password: password })
      .then(res => {
        saveToken(res.data.user, res.data.access_token);
      }).catch(err => {
        alert('Invalid Email or Password')
      })
  }

  return (
    <div className='loginContainer'>
      <div className="loginForm">
        <h2>Insta Clone</h2>
        <form action="" id='loginForm' method="post" onSubmit={submitForm}>
          <input type="text" id='email' placeholder='Enter your email'
            value={email} onChange={e => { setEmail(e.target.value) }}
            required /> <br />
          <input type="password" id='password' placeholder='Enter your password'
            value={password} onChange={e => { setPassword(e.target.value) }}
            required /> <br />
          <button>Login</button>
        </form>
        <div style={{marginTop:'2vh'}}>
          <p>Dont Have an Account?</p>
          <p style={{fontWeight:'600'}}><Link to='/register'>Sign Up</Link></p>
        </div>
      </div>
    </div>
  )
}
