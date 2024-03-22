import React, { useState } from 'react'
import AuthUser from '../authentication/AuthUser';

export default function Login() {
  const {http,saveToken} = AuthUser();
  const [email,setEmail] = useState();
  const [password,setPassword] = useState();

  const submitForm = (e) =>{
    e.preventDefault();
    http.post('/login',{email:email,password:password})
    .then(res=>{
      saveToken(res.data.user,res.data.access_token);
    }).catch(err=>{
      alert('Invalid Email or Password')
    })
  }

  return (
    <div>
      <h2 style={{color:'white'}}>Login</h2>
      <form action="" id='loginForm' method="post" onSubmit={submitForm}>
        <input type="text" id='email' placeholder='Enter your email' 
        value={email} onChange={e=>{setEmail(e.target.value)}}
        required/> <br />
        <input type="password" id='password' placeholder='Enter your password'
        value={password} onChange={e=>{setPassword(e.target.value)}}
        required/> <br />
        <button style={{color:'black'}}>Login</button>
      </form>  
  
    </div>
  )
}
